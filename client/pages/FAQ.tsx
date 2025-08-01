import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-brand-light to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-brand-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about SolAI
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    1. What exactly is this AI assistant, and how does it help my real estate business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Think of the AI assistant as your personal business sidekick, like a super-smart virtual employee who works 24/7. It's a custom-built platform that automates repetitive tasks, organizes your work, and helps you impress clients. For example, it can send follow-up emails, schedule showings, pull property data, or create marketing posts—all tailored to your real estate business. It saves you time, keeps you organized, and lets you focus on building relationships and closing deals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    2. Do I need to be tech-savvy to use this AI assistant?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Not at all! We designed it to be as easy to use as your smartphone. You can interact with it through simple commands, like typing or speaking, just as you'd text a colleague. For example, you could say, "Schedule a showing for 123 Main St. tomorrow at 2 PM," and it'll handle the rest. During the consultation, we'll walk you through it with hands-on demos to show how intuitive it is.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    3. How is this different from tools like my CRM or scheduling apps?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Unlike a CRM or scheduling app that handles one specific job, our AI assistant is like an all-in-one business partner. It combines client management, scheduling, communication, property analysis, and marketing into a single platform. Plus, it's smart—it learns your preferences and can anticipate your needs, like suggesting follow-ups with hot leads or pulling market trends without you asking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    4. Can the AI assistant really understand my clients and my business?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Yes, it's built to adapt to you and your clients. It keeps track of your conversations, preferences, and client details, so it feels like it "knows" you. For instance, if a client asks about a property, the assistant remembers their past questions and tailors responses to their needs. It's like having a colleague who's always on top of the details, making your interactions feel personal and professional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    5. What kind of tasks can the AI assistant handle for me?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  <p className="mb-3">It's incredibly versatile! Here are some examples:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Client Communication:</strong> Sends emails or texts, like follow-up messages after an open house.</li>
                    <li><strong>Scheduling:</strong> Books showings or meetings and sends reminders to you and clients.</li>
                    <li><strong>Property Insights:</strong> Pulls market data, like recent sales or trends, to help you advise clients.</li>
                    <li><strong>Marketing:</strong> Creates social media posts, newsletters, or even visual content for listings.</li>
                    <li><strong>Paperwork:</strong> Scans and organizes documents, like contracts, pulling out key details.</li>
                    <li><strong>Daily Planning:</strong> Gives you a morning rundown of your schedule and tasks, like a virtual briefing.</li>
                  </ul>
                  <p className="mt-3">We'll show you these in action during the consultation to match your workflow.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    6. Can it communicate with clients in a way that feels like me?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Absolutely! The assistant can use a professional tone that matches your style, and we can even give it a custom voice that sounds like you for phone calls or messages. This makes interactions feel personal, not robotic. For example, it can send a text saying, "Hi Jane, I found a great property for you—want to schedule a tour?" in a way that feels like it's coming from you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    7. How does it handle sensitive client information?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  We take privacy seriously. All your client data is stored securely, like in a digital safe, using industry-standard protections. The assistant only accesses the information it needs to do its job, and nothing is shared without your permission. It's like having a trusted employee who follows strict confidentiality rules.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    8. What happens if the AI doesn't understand something or makes a mistake?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  The assistant is designed to be smart, but if it's unsure, it'll ask you for clarification or flag it for your review. For example, if a client's request is unclear, it might say, "I'm not sure what they meant—can you confirm?" It's built to learn from these moments, so it gets better over time. We'll also set it up to minimize errors for your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    9. How will this AI assistant keep up with new technology or changes in real estate?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Our platform is built to evolve. As new AI advancements come out, your assistant will automatically get smarter, adding new features or improving how it handles tasks. For example, if a new real estate tool or market trend emerges, we can update the assistant to include it, so you're always ahead of the game without extra work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    10. How much time will this save me every week?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  It depends on your workload, but most realtors save 5-15 hours a week by automating tasks like scheduling, emailing, or pulling property data. For example, instead of spending 30 minutes searching for comparable sales, the assistant can do it in seconds. During the consultation, we'll look at your typical day and estimate the time savings for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    11. Can it help me stand out in a competitive market like Coronado?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Definitely! The assistant helps you deliver faster, more personalized service, which makes clients take notice. For instance, you can send tailored property suggestions or market insights to clients instantly, showing them you're on top of their needs. Plus, its marketing tools can create eye-catching listing posts, helping your properties shine online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    12. Will it integrate with tools I already use, like my CRM or email?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Yes, it's designed to work with popular real estate tools like HubSpot, Gmail, or Calendly. It can pull data from your CRM to manage leads or sync with your calendar for scheduling. We'll check which tools you use during the consultation and show you how it connects seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    13. How do I interact with the assistant? Do I need a special app?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  You can interact with it in whatever way feels natural—through a web dashboard, email, text, or even voice commands on your phone. It's like texting or talking to a colleague. No special app is required, but we provide a simple dashboard to see everything in one place, like your schedule or client updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    14. What if I don't have time to learn a new system?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  We get it—your time is precious. That's why we make setup and training super straightforward. During the consultation, we'll show you how to use it in just a few minutes, and we'll customize it to fit your routine. It's designed to feel like a natural part of your day, not something extra to learn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    15. Can it help with specific real estate tasks, like preparing a CMA or managing open houses?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Yes, it's built for real estate! It can pull data to create a Comparative Market Analysis (CMA) in minutes, using local market trends and recent sales. For open houses, it can send invitations, track RSVPs, and follow up with attendees afterward. We'll demo these features live to show how they work for your business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    16. Is this AI assistant reliable, or will it crash when I need it most?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Reliability is a top priority. The assistant runs on a robust system designed to handle your busiest days without hiccups. It's like a dependable car—built to keep going. If anything unexpected happens, our team is here to support you quickly, ensuring no disruptions to your work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    17. How customizable is it for my specific business needs?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  It's highly customizable. Whether you focus on luxury homes, rentals, or commercial properties, we tailor the assistant to your clients, market, and workflow. For example, we can set it up to prioritize high-end property searches or automate follow-ups for rental leads. We'll discuss your goals in the consultation to make it a perfect fit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    18. What kind of support do I get if I have questions or need help?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  You'll have a dedicated support team to answer questions, troubleshoot, or tweak the assistant as needed. Think of us as your tech partners, available via email or phone to keep things running smoothly. We'll also provide easy-to-follow guides during onboarding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    19. Can it help me generate more leads or close more deals?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  Yes! The assistant can identify high-potential leads by analyzing client behavior, like who's actively searching properties. It can also nurture leads with timely follow-ups or personalized marketing, helping you build trust and close deals faster. We'll show you real examples of how this works in the consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-20" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    20. Why should I consider this now? What's the benefit of acting soon?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pb-6 leading-relaxed">
                  The real estate market moves fast, and early adopters of smart tools like this gain a competitive edge. By streamlining your work and wowing clients with fast, personalized service, you'll stand out in Coronado's busy market. Plus, with our free consultation, you can explore this risk-free and see the value for yourself before committing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
