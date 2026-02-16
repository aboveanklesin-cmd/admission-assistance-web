import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

const faqs = [
  {
    question: 'Is an Amity Online degree valid for an MBA?',
    answer: 'Yes, an Online MBA from Amity Online University is a valid degree as it is UGC-Entitled and acceptable all over the world.',
  },
  {
    question: 'What are the fees of Amity Online MBA?',
    answer: 'The Amity Online MBA fees is ₹1,99,000, for 2 years. Amity Online also offers flexible and no-cost EMI options for easy payment.',
  },
  {
    question: 'Is doing an MBA from Amity worth it?',
    answer: 'Yes, Amity Online provides exclusive placement and career opportunities, industry-relevant curriculum, webinars and workshops with live and recorded expert-led sessions, helping the students to experience an interactive and engaging learning platform.',
  },
  {
    question: 'Does Amity Online MBA provide placement?',
    answer: 'Yes, the students get the opportunity of applying for placement facilities offered by the university. In addition to Amity Online MBA placements, the students can avail different career services like resume building, mock interviews, and career exploration support.',
  },
  {
    question: 'Who is eligible for Amity University Online MBA?',
    answer: 'To apply for the Amity Online MBA course, the candidate must have a bachelor’s degree in any discipline with at least 40% marks. Fresh graduates and working professionals can also apply.',
  },
  {
    question: 'How long is the Amity Online MBA?',
    answer: 'The duration for completing an Amity Online MBA program is 2 years. The students have the opportunity to complete their program at their own pace comfortably.',
  },
    {
    question: 'Does Amity Online offer any kind of scholarships and discounts?',
    answer: 'Yes, Amity Online University offers scholarships and discounts helping the students with a low financial background. This reduces the overall Amity MBA online fees.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our MBA program
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-blue-900 rounded-2xl p-8 text-white h-fit">
            <h3 className="text-2xl font-bold mb-4">Have Questions or Doubts?</h3>
            <p className="text-gray-300 mb-6">
              Get the Answers to All Your Queries
            </p>
            <Button onClick={() => document.getElementById('counselling-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Talk to Counselor
            </Button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-900 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
