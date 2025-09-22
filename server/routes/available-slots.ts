import { RequestHandler } from "express";
import { supabase } from "../../shared/supabase";
import { AvailableSlotsResponse } from "../../shared/api";

export const getAvailableSlots: RequestHandler = async (req, res) => {
  try {
    const { date } = req.query;
    
    if (!date || typeof date !== 'string') {
      return res.status(400).json({ error: 'Date parameter is required (YYYY-MM-DD format)' });
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
    }

    // Check if date is a weekend
    const requestedDate = new Date(date + 'T00:00:00.000Z');
    const dayOfWeek = requestedDate.getUTCDay(); // 0 = Sunday, 6 = Saturday
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return res.json({ availableSlots: [] } as AvailableSlotsResponse);
    }

    // Check if date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    requestedDate.setHours(0, 0, 0, 0);
    
    if (requestedDate < today) {
      return res.json({ availableSlots: [] } as AvailableSlotsResponse);
    }

    // All possible time slots (10 AM to 4 PM = hours 10, 11, 12, 13, 14, 15, 16)
    const allSlots = [10, 11, 12, 13, 14, 15, 16];
    
    // Query existing appointments for the date
    // Pacific Time is UTC-8 (or UTC-7 during DST), so 10 AM Pacific = 18:00 UTC (or 17:00 UTC during DST)
    // For simplicity, we'll use UTC-8 conversion: 10 AM Pacific = 18:00 UTC, 5 PM Pacific = 01:00 UTC next day
    const startOfDay = `${date}T18:00:00.000Z`; // 10 AM Pacific = 18:00 UTC
    const endOfDay = new Date(`${date}T18:00:00.000Z`);
    endOfDay.setHours(endOfDay.getHours() + 7); // Add 7 hours for 10 AM to 5 PM range
    
    const { data: existingAppointments, error } = await supabase
      .from('appointments')
      .select('starts_at')
      .eq('resource', 'default')
      .in('status', ['pending', 'confirmed'])
      .gte('starts_at', startOfDay)
      .lt('starts_at', endOfDay.toISOString());

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch existing appointments' });
    }

    // Extract booked hours
    const bookedHours = new Set<number>();
    if (existingAppointments) {
      existingAppointments.forEach(appointment => {
        const appointmentDate = new Date(appointment.starts_at);
        // Convert UTC to Pacific time to get the actual hour
        // The appointment was stored as Pacific hour + 8, so we subtract 8 to get back to Pacific
        const pacificHour = appointmentDate.getUTCHours() - 8;
        if (pacificHour >= 10 && pacificHour <= 16) {
          bookedHours.add(pacificHour);
        }
      });
    }

    // Filter out booked slots
    const availableSlots = allSlots.filter(hour => !bookedHours.has(hour));

    res.json({ availableSlots } as AvailableSlotsResponse);
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
