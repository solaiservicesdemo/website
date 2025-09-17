/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Booking API types
 */
export interface AvailableSlotsRequest {
  date: string; // YYYY-MM-DD format
}

export interface AvailableSlotsResponse {
  availableSlots: number[]; // Array of available hours (10-16)
}

export interface BookDemoRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  selectedDate: string; // YYYY-MM-DD
  selectedTime: number; // hour (10-16)
}

export interface BookDemoResponse {
  success: boolean;
  appointmentId?: string;
  customerId?: string;
  message: string;
}
