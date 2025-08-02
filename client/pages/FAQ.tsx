import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-brand-light to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-brand-blue transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about SolAI Systems AI Assistant
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Getting Started Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-brand-blue pb-2">
                Getting Started
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="getting-started-1"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      What exactly is the Solai Systems AI Assistant?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Think of the AI assistant as your personal business sidekick, like a super-smart virtual employee who works 24/7. It's a custom-built platform that automates repetitive tasks, organizes your work, and helps you impress clients. For example, it can send follow-up emails, schedule showings, pull relevant data, or create marketing posts. It's a smart digital assistant that handles routine business tasks for you—freeing up your time for more important work and letting you focus on building relationships and closing deals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="getting-started-2"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Do I need to be tech-savvy to use this AI assistant?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Not at all! We designed it to be as easy to use as your smartphone. You can interact with it through simple commands, like typing or speaking, just as you'd text a colleague. For example, you could say, "Schedule a meeting for 123 Main St. tomorrow at 2 PM," and it'll handle the rest. During the consultation, we'll walk you through it with hands-on demos to show how intuitive it is.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="getting-started-3"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      How will it help my specific business?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    It automates time-consuming tasks (saving 5-30 hours per week), helps you serve customers faster, and provides insights to make better business decisions. During our free consultation, we'll show you exactly how it would work for your business. Lead generation and nurturing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="getting-started-4"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Is it difficult to use?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Not at all! You interact with it naturally through text or voice commands, just like texting a colleague. No technical knowledge needed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Key Features Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-brand-blue pb-2">
                Key Features
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="features-1"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      What kind of tasks can the AI assistant handle for me?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    <p className="mb-3">
                      It's incredibly versatile! Here are some examples:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Send emails and messages to customers</li>
                      <li>Schedule appointments and manage your calendar</li>
                      <li>Analyze your business data and provide insights</li>
                      <li>Create marketing materials</li>
                      <li>Process documents and extract important information</li>
                      <li>Organize your daily tasks and priorities</li>
                    </ul>
                    <p className="mt-3">
                      We'll show you these in action during the consultation to match your workflow.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="features-2"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      How is this different from tools I already use?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Unlike single-purpose apps, it combines everything into one intelligent system that connects your tasks automatically. For example, it can schedule a meeting, send a confirmation, and update your customer records—all in one step.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="features-3"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Will it work with my existing tools?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Yes, it integrates with popular email services, calendars, and business software you're already using.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="features-4"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      How do I interact with the assistant? Do I need a special app?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    You can interact with it in whatever way feels natural—through a web dashboard, email, text, or even voice commands on your phone. It's like texting or talking to a colleague. No special app is required, but we provide a simple dashboard to see everything in one place, like your schedule or client updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Practical Concerns Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-brand-blue pb-2">
                Practical Concerns
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="concerns-1"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      How much does it cost?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    We offer a free consultation to demonstrate how it works for your business. After that, we have affordable plans based on your specific needs, typically providing a return on investment through time savings within the first month.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="concerns-2"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Is my business information secure?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Absolutely. We use enterprise-grade security to protect your data with encryption and strict privacy protocols. Your information is never shared or used for anything other than helping your business. The assistant only accesses the information it needs to do its job, and nothing is shared without your permission.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="concerns-3"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      What if I don't have time to learn a new system?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    We get it—your time is precious. That's why we make setup and training super straightforward. During the consultation, we'll show you how to use it in just a few minutes, and we'll customize it to fit your routine. It's designed to feel like a natural part of your day, not something extra to learn.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="concerns-4"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      What if I need help or have questions?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    We provide dedicated support through email, phone, and easy-to-follow guides. You'll have a dedicated support team to answer questions, troubleshoot, or tweak the assistant as needed. Think of us as your tech partners, available via email or phone to keep things running smoothly. We'll also provide easy-to-follow guides during onboarding.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Business Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-brand-blue pb-2">
                Business Benefits
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="benefits-1"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      How will this help me grow my business?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    By saving you time and improving efficiency, you can serve more customers, identify new opportunities, and focus on strategic growth instead of routine tasks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="benefits-2"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Can it communicate in a way that matches my business style?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Absolutely! The assistant can use a professional tone that matches your style, and we can even give it a custom voice that sounds like you for phone calls or messages. This makes interactions feel personal, not robotic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="benefits-3"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-xl font-semibold text-gray-900">
                      Why should I consider this now?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                    Early adopters are already seeing significant benefits in efficiency and customer satisfaction. Getting started now gives you a competitive advantage while the technology is still new to many small businesses.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
