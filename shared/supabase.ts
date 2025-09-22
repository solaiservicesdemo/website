import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uviivwqtqkslgvwkwivl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aWl2d3F0cWtzbGd2d2t3aXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NDMxODIsImV4cCI6MjA2ODExOTE4Mn0.Dfjo8-a6l8wzwQ-f1izQJQdlGNIpq_wErr_QzMT5JTw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Customer {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  created_at: string;
}

export interface Appointment {
  id: string;
  customer_id?: string;
  resource: string;
  starts_at: string;
  duration_minutes: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  created_at: string;
}

export interface BookingRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  selectedDate: string; // ISO string
  selectedTime: number; // hour (10-16)
}
