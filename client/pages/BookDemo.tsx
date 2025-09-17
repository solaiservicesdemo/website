import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AvailableSlotsResponse, BookDemoRequest, BookDemoResponse } from "@shared/api";

interface TimeSlot {
  hour: number;
  label: string;
  available: boolean;
}

interface DayData {
  date: Date;
  dayName: string;
  dayNumber: number;
  isToday: boolean;
  isPast: boolean;
  slots: TimeSlot[];
}

export default function BookDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<number[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate time slots from 11am to 4pm
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    for (let hour = 11; hour <= 16; hour++) {
      // Create deterministic availability based on date and hour to prevent switching
      const dateString = date.toDateString();
      const hashCode = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
      };

      const seed = Math.abs(hashCode(dateString + hour.toString()));
      const available = seed % 10 > 1; // 80% chance of being available

      const slot: TimeSlot = {
        hour,
        label:
          hour === 12
            ? "12:00 PM"
            : hour > 12
              ? `${hour - 12}:00 PM`
              : `${hour}:00 AM`,
        available,
      };
      slots.push(slot);
    }
    return slots;
  };

  // Generate calendar days for current month
  const generateCalendarDays = (): DayData[] => {
    const today = new Date();
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1,
    );
    const lastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0,
    );
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: DayData[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const emptyDate = new Date(firstDay);
      emptyDate.setDate(firstDay.getDate() - (startingDayOfWeek - i));
      days.push({
        date: emptyDate,
        dayName: "",
        dayNumber: emptyDate.getDate(),
        isToday: false,
        isPast: true,
        slots: [],
      });
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day,
      );
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();
      const slots = generateTimeSlots(date);
      const hasAvailableSlots = slots.some((slot) => slot.available);

      days.push({
        date,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        dayNumber: day,
        isToday,
        isPast,
        slots: isPast ? [] : slots,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateSelect = (dayData: DayData) => {
    if (dayData.isPast || dayData.slots.length === 0) return;
    setSelectedDate(dayData.date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    if (!slot.available) return;
    setSelectedTime(slot);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && formData.name && formData.email) {
      setIsBooked(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-secondary border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-slate-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">
                Demo Booked!
              </h1>
              <p className="text-muted-foreground mb-6">
                Your demo has been successfully scheduled for{" "}
                <span className="text-[hsl(var(--brand-blue))] font-semibold">
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {selectedTime?.label}
                </span>
              </p>
              <p className="text-gray-400 text-sm mb-6">
                We'll send you a calendar invite and meeting details shortly.
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button className="mb-4 bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book a Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized demo to see how SolAI can transform your
              business workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousMonth}
                    className="border-border text-muted-foreground hover:bg-muted"
                  >
                    ←
                  </Button>
                  <h3 className="text-lg font-semibold text-white">
                    {monthName}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextMonth}
                    className="border-border text-muted-foreground hover:bg-muted"
                  >
                    →
                  </Button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-muted-foreground py-2"
                      >
                        {day}
                      </div>
                    ),
                  )}
                  {calendarDays.map((dayData, index) => {
                    const hasAvailableSlots = dayData.slots.some(
                      (slot) => slot.available,
                    );
                    const allSlotsUnavailable =
                      dayData.slots.length > 0 && !hasAvailableSlots;

                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(dayData)}
                        disabled={dayData.isPast || dayData.slots.length === 0}
                        className={cn(
                          "p-2 text-sm rounded-lg transition-all duration-200",
                          "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-blue))]",
                          {
                            // Past dates
                            "text-gray-500 cursor-not-allowed": dayData.isPast,
                            // Today
                            "bg-blue-600 text-white font-semibold":
                              dayData.isToday && !dayData.isPast,
                            // Selected date
                            "bg-[hsl(var(--brand-blue))] text-white":
                              selectedDate?.toDateString() ===
                              dayData.date.toDateString(),
                            // Available dates
                            "text-gray-300 hover:bg-gray-700 border border-gray-600":
                              !dayData.isPast &&
                              hasAvailableSlots &&
                              selectedDate?.toDateString() !==
                                dayData.date.toDateString(),
                            // All slots unavailable
                            "text-gray-500 bg-gray-700/50 cursor-not-allowed":
                              allSlotsUnavailable,
                            // Days from previous/next month
                            "text-gray-600": dayData.dayName === "",
                          },
                        )}
                      >
                        {dayData.dayNumber}
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Available Times
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedDate &&
                        calendarDays
                          .find(
                            (day) =>
                              day.date.toDateString() ===
                              selectedDate.toDateString(),
                          )
                          ?.slots.map((slot) => (
                            <button
                              key={slot.hour}
                              onClick={() => handleTimeSelect(slot)}
                              disabled={!slot.available}
                              className={cn(
                                "p-3 text-sm rounded-lg border transition-all duration-200",
                                "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-blue))]",
                                {
                                  "bg-[hsl(var(--brand-blue))] text-white border-[hsl(var(--brand-blue))]":
                                    selectedTime?.hour === slot.hour,
                                  "bg-secondary text-foreground/90 border-border hover:bg-muted":
                                    slot.available &&
                                    selectedTime?.hour !== slot.hour,
                                  "bg-secondary/60 text-muted-foreground border-border cursor-not-allowed":
                                    !slot.available,
                                },
                              )}
                            >
                              {slot.label}
                            </button>
                          ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Your Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Tell us about your business needs..."
                      rows={3}
                    />
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">
                        Selected Time:
                      </h4>
                      <p className="text-gray-300">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        at {selectedTime.label}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={
                      !selectedDate ||
                      !selectedTime ||
                      !formData.name ||
                      !formData.email
                    }
                    className="w-full bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
                  >
                    Book Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
