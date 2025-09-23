import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);

    const subject = encodeURIComponent(`New Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || ""}`,
    );

    const mailto = `mailto:jtgeldart@solai-systems.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <Card className="bg-secondary border-border">
            <CardHeader>
              <CardTitle className="text-white">Thanks for reaching out!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Your email app should have opened with your message. If not, you can email us at
                {" "}
                <a
                  href="mailto:jtgeldart@solai-systems.com"
                  className="text-[hsl(var(--brand-blue))] hover:underline"
                >
                  jtgeldart@solai-systems.com
                </a>
                .
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Link to="/">
          <Button className="mb-6 bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to learn more? Send us a message and we'll get back to you by email.
        </p>

        <Card className="bg-secondary border-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Mail className="w-5 h-5" /> Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="How can we help?"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={submitting || !formData.name || !formData.email}
                className="w-full bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
              >
                {submitting ? "Opening your email app..." : "Send Email"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
