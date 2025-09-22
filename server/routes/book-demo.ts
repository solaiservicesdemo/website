import { RequestHandler } from "express";
import { supabase } from "../../shared/supabase";
import { BookDemoRequest, BookDemoResponse } from "../../shared/api";

export const bookDemo: RequestHandler = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      message,
      selectedDate,
      selectedTime,
    }: BookDemoRequest = req.body;

    // Validate required fields
    if (!name || !email || !selectedDate || selectedTime === undefined) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, email, selectedDate, and selectedTime",
      } as BookDemoResponse);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      } as BookDemoResponse);
    }

    // Validate time slot
    if (selectedTime < 10 || selectedTime > 16) {
      return res.status(400).json({
        success: false,
        message: "Invalid time slot. Must be between 10 AM and 4 PM",
      } as BookDemoResponse);
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(selectedDate)) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format. Use YYYY-MM-DD",
      } as BookDemoResponse);
    }

    // Check if date is a weekend
    const requestedDate = new Date(selectedDate + "T00:00:00.000Z");
    const dayOfWeek = requestedDate.getUTCDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return res.status(400).json({
        success: false,
        message: "Appointments are not available on weekends",
      } as BookDemoResponse);
    }

    // Convert selected time to UTC timestamp
    const appointmentDateTime = new Date(
      `${selectedDate}T${selectedTime + 8}:00:00.000Z`,
    ); // Pacific time + 8 hours = UTC

    // Check if the time slot is still available
    const { data: existingAppointment, error: checkError } = await supabase
      .from("appointments")
      .select("id")
      .eq("resource", "default")
      .eq("starts_at", appointmentDateTime.toISOString())
      .in("status", ["pending", "confirmed"])
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 = no rows found
      console.error("Error checking appointment availability:", checkError);
      return res.status(500).json({
        success: false,
        message: "Failed to check appointment availability",
      } as BookDemoResponse);
    }

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        message: "This time slot is no longer available",
      } as BookDemoResponse);
    }

    // Check if customer already exists
    let customerId: string;
    const { data: existingCustomer, error: customerCheckError } = await supabase
      .from("customers")
      .select("id")
      .eq("email", email.toLowerCase())
      .single();

    if (customerCheckError && customerCheckError.code !== "PGRST116") {
      console.error("Error checking existing customer:", customerCheckError);
      return res.status(500).json({
        success: false,
        message: "Failed to check customer information",
      } as BookDemoResponse);
    }

    if (existingCustomer) {
      // Customer exists, update their information
      customerId = existingCustomer.id;
      const { error: updateError } = await supabase
        .from("customers")
        .update({
          full_name: name,
          phone: phone || null,
          company: company || null,
        })
        .eq("id", customerId);

      if (updateError) {
        console.error("Error updating customer:", updateError);
        return res.status(500).json({
          success: false,
          message: "Failed to update customer information",
        } as BookDemoResponse);
      }
    } else {
      // Create new customer
      const { data: newCustomer, error: createCustomerError } = await supabase
        .from("customers")
        .insert({
          full_name: name,
          email: email.toLowerCase(),
          phone: phone || null,
          company: company || null,
        })
        .select("id")
        .single();

      if (createCustomerError) {
        console.error("Error creating customer:", createCustomerError);
        return res.status(500).json({
          success: false,
          message: "Failed to create customer record",
        } as BookDemoResponse);
      }

      customerId = newCustomer.id;
    }

    // Create appointment
    const { data: newAppointment, error: appointmentError } = await supabase
      .from("appointments")
      .insert({
        customer_id: customerId,
        resource: "default",
        starts_at: appointmentDateTime.toISOString(),
        duration_minutes: 60,
        status: "pending",
        notes: message || null,
      })
      .select("id")
      .single();

    if (appointmentError) {
      console.error("Error creating appointment:", appointmentError);
      return res.status(500).json({
        success: false,
        message: "Failed to create appointment",
      } as BookDemoResponse);
    }

    res.json({
      success: true,
      appointmentId: newAppointment.id,
      customerId,
      message: "Demo appointment booked successfully!",
    } as BookDemoResponse);
  } catch (error) {
    console.error("Error booking demo:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as BookDemoResponse);
  }
};
