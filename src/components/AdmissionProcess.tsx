import { FileText, ClipboardCheck, CreditCard, Send, Award } from 'lucide-react';
import { Button } from './Button';

const steps = [
  {
    icon: FileText,
    title: 'Select your program',
    description: 'Choose the program that suits your goals.',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete your application',
    description: 'Fill out your application with all the necessary information.',
  },
  {
    icon: CreditCard,
    title: 'Fee Payment',
    description: 'Make your program payment securely & easily.',
  },
  {
    icon: Send,
    title: 'Submit & register',
    description: 'Submit your application and complete your registration.',
  },
  {
    icon: Award,
    title: 'Await your enrollment',
    description: 'Wait for your enrollment details and guidance.',
  },
];

export function AdmissionProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Admission Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step-by-Step Application Procedure for Amity Online MBA
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gray-300">
              <div
                className="absolute top-0 left-0 h-full bg-blue-900 w-0 transition-all duration-1000"
                style={{ width: '100%' }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 relative z-10 border-4 border-blue-900">
                    <step.icon className="w-12 h-12 text-blue-900" />
                  </div>
                  <div className="bg-blue-900 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() =>
              document
                .getElementById('counselling-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="text-lg px-8 py-4"
          >
            Get Free Counselling
          </Button>
        </div>
      </div>
    </section>
  );
}
