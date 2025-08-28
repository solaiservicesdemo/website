import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Mail,
  Calendar,
  FileText,
  Bot,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-surface min-h-screen flex items-center">
        <div className="logo-beam" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* SOLAI Logo */}
            <div className="mb-12 animate-fade-in">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe7d7c92ddafd455fa21a20820d378b0b%2Fe07c084267434cfe8bd6ba2846044dce?format=webp&width=1200"
                alt="SolAI Systems logo"
                className="logo-blend mx-auto w-[min(88vw,900px)] h-auto select-none"
                draggable={false}
              />
            </div>

            <div className="h-2" />

            {/* Main Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
              AI-powered workflow automation for smarter businesses
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              SolAI is an upcoming AI-driven platform designed to help
              businesses automate routine tasks like email, scheduling, and
              document handling. Our goal is to simplify business operations,
              save time, and reduce costs by providing an intelligent assistant
              that works seamlessly across your tools.
            </p>

            {/* CTA Section */}
            <div className="animate-fade-in-delay-2">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg bg-secondary/60 border-input placeholder:text-muted-foreground"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Get Notified
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-sm text-gray-400">
                Be the first to know when we launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features Coming Soon
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate your business workflows and
                boost productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-secondary border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-slate-600/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automate Email & Calendar
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatically manage your email responses and schedule
                  meetings with AI-powered intelligence.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-secondary border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-slate-600/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-8 h-8 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI-Powered Chat Assistant
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Get instant help with business tasks through our intelligent
                  chat assistant that understands your workflow.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-secondary border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-slate-600/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Document Generation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Create, manage, and organize business documents automatically
                  with AI-powered templates and workflows.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-secondary border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-slate-600/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white drop-shadow" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Simple & Secure
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Built for small teams with enterprise-grade security. Easy to
                  set up, simple to use, powerful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[radial-gradient(900px_600px_at_85%_10%,hsl(var(--brand-blue)/0.12),transparent_60%),hsl(var(--background))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get answers to common questions about SolAI
            </p>

            <Link to="/faq">
              <Button className="bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <HelpCircle className="w-5 h-5 mr-2" />
                View FAQ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about SolAI? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex justify-center">
                <Link to="/book-demo">
                  <Button className="bg-gradient-to-r from-brand-blue to-slate-500 hover:from-brand-blue/90 hover:to-slate-500/90 text-white font-semibold px-12 py-5 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg h-[50px]">
                    <Calendar className="w-6 h-6 mr-3" />
                    Book a Demo
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <span className="text-muted-foreground text-sm">or</span>
                <div className="bg-gradient-to-br from-secondary to-muted border border-border rounded-xl p-4 h-auto flex-grow-0">
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                    <Mail className="w-4 h-4 text-[hsl(var(--brand-blue))]" />
                    <a
                      href="mailto:jtgeldart@solai-systems.com"
                      className="hover:text-[hsl(var(--brand-blue))] transition-colors duration-300 font-medium text-lg"
                    >
                      jtgeldart@solai-systems.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--background))] text-white py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-extrabold font-display bg-gradient-to-r from-brand-blue to-slate-400 bg-clip-text text-transparent">
                  SolAI
                </h3>
                <p className="text-gray-400 mt-2">
                  AI-powered workflow automation for smarter businesses
                </p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-400">
                  © 2025 SolAI. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
