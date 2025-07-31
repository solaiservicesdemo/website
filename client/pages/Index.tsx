import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Calendar, FileText, Bot, ArrowRight, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-light to-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Coming Soon Badge */}
            <div className="mb-8 animate-fade-in">
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-brand-blue to-brand-purple text-white border-none px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Coming Soon
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-gray-900 via-brand-blue to-brand-purple bg-clip-text text-transparent">
                SolAI
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
              AI-powered workflow automation for smarter businesses
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              SolAI is an upcoming AI-driven platform designed to help businesses automate routine tasks like email, scheduling, and document handling. Our goal is to simplify business operations, save time, and reduce costs by providing an intelligent assistant that works seamlessly across your tools.
            </p>

            {/* CTA Section */}
            <div className="animate-fade-in-delay-2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-brand-blue transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="h-12 px-8 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features Coming Soon
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to automate your business workflows and boost productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Automate Email & Calendar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically manage your email responses and schedule meetings with AI-powered intelligence.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI-Powered Chat Assistant
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant help with business tasks through our intelligent chat assistant that understands your workflow.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Document Generation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create, manage, and organize business documents automatically with AI-powered templates and workflows.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simple & Secure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built for small teams with enterprise-grade security. Easy to set up, simple to use, powerful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about SolAI? We'd love to hear from you.
            </p>
            
            <div className="bg-gradient-to-br from-gray-50 to-brand-light rounded-2xl p-8 inline-block">
              <div className="flex items-center justify-center gap-3 text-lg text-gray-700">
                <Mail className="w-6 h-6 text-brand-blue" />
                <a 
                  href="mailto:info@solai.ai" 
                  className="hover:text-brand-blue transition-colors duration-300 font-medium"
                >
                  jtgeldart@solai-systems.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
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
