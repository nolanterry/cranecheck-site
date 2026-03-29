import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Clock, CheckCircle, Play, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with CraneCheck | Quick Setup Guide",
  description: "Get started with CraneCheck OSHA crane inspection software in under 15 minutes. Step-by-step setup guide to go from signup to your first digital inspection.",
  openGraph: {
    title: "Getting Started with CraneCheck | Quick Setup Guide",
    description: "Get started with CraneCheck OSHA crane inspection software in under 15 minutes. Step-by-step setup guide to go from signup to your first digital inspection.",
    url: "https://cranecheck.co/getting-started",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cranecheck.co"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Getting Started",
      "item": "https://cranecheck.co/getting-started"
    }
  ]
};

const steps = [
  {
    number: 1,
    title: "Create your account",
    description: "Sign up with your email and verify your account. No credit card required for the 14-day free trial.",
    time: "2 min",
    tip: "Use your company email to make it easy to invite your team later."
  },
  {
    number: 2, 
    title: "Add your cranes/equipment",
    description: "Register your crane fleet with make, model, and serial numbers. This creates a digital equipment registry for tracking.",
    time: "5 min",
    tip: "Take photos of your equipment nameplates—CraneCheck can extract the serial numbers automatically."
  },
  {
    number: 3,
    title: "Set up inspection templates", 
    description: "Choose from pre-loaded OSHA/ANSI B30 templates or customize your own checklist based on manufacturer requirements.",
    time: "3 min",
    tip: "OSHA and ANSI B30 templates are already configured—just select and you're ready to inspect."
  },
  {
    number: 4,
    title: "Assign inspectors",
    description: "Invite your crane operators and maintenance crew. Each gets mobile access to perform inspections on assigned equipment.",
    time: "2 min",
    tip: "Operators can download the mobile app while you finish setup. Everything syncs automatically."
  },
  {
    number: 5,
    title: "Run your first digital inspection", 
    description: "Complete a test inspection using the mobile app. Take photos, flag any issues, and see how the digital workflow works.",
    time: "3 min",
    tip: "Try finding a minor deficiency to test the notification and workflow system."
  },
  {
    number: 6,
    title: "Generate audit-ready reports",
    description: "View your completed inspection and export a PDF report. This is what you'll show OSHA during audits.",
    time: "1 min",
    tip: "Reports include GPS timestamps, photos, and digital signatures—everything OSHA requires."
  }
];

const faqs = [
  {
    question: "Can I import existing crane data?",
    answer: "Yes! You can bulk import your equipment registry via CSV upload or manually add each crane. Our support team can help with data migration from existing systems."
  },
  {
    question: "How long does setup actually take?",
    answer: "Most companies are up and running in under 15 minutes. The longest part is usually entering your equipment details, but even that's optional—you can add cranes as you inspect them."
  },
  {
    question: "Do I need technical skills?",
    answer: "Not at all. CraneCheck is designed for crane operators and safety managers, not IT experts. If you can use a smartphone, you can use CraneCheck."
  },
  {
    question: "What if I need help during setup?",
    answer: "Our support team is available via chat, email, or phone during business hours. We also offer free onboarding calls to walk through setup with your team."
  }
];

export default function GettingStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand font-medium px-4 py-2 rounded-full text-sm mb-6">
              <Clock size={16} />
              Up and running in under 15 minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started with CraneCheck in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this step-by-step guide to set up your OSHA-compliant digital crane inspection system and complete your first inspection.
            </p>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Your Setup Checklist
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded">
                        <Clock size={14} />
                        ~{step.time}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    
                    {step.tip && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-800 text-sm">
                          <span className="font-medium">Pro tip:</span> {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You'll Need
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-brand mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Basic Requirements</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Company email address</li>
                  <li>• Web browser (Chrome, Safari, Firefox)</li>
                  <li>• Mobile device for inspections</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-brand mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Equipment Information</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Crane make and model</li>
                  <li>• Serial numbers</li>
                  <li>• Current location/site</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Optional (But Helpful)</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Existing paper inspection logs</li>
                  <li>• Equipment maintenance records</li>
                  <li>• Inspector contact list</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Placeholder */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Watch the Setup Walkthrough
            </h2>
            
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Setup Walkthrough</h3>
                  <p className="text-gray-600">Follow along as we set up a new account from start to finish</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Setup Questions & Answers
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}