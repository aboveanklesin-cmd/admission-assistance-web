import { Clock, CreditCard, BookOpen } from 'lucide-react';

export function ProgramOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
              Excel Your Career with India&apos;s Top UGC-Entitled Online MBA Program
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed space-y-4">
              <span className="block">
                Amity Online MBA course is a 2-year online program, helping the learners to gain
                advanced business and management skills.
              </span>
              <span className="block">
                Learn from industry experts, engage in real-world case studies, and put theory into
                practice through internships and projects.
              </span>
              <span className="block">
                Gain industry-relevant skills with in-demand specializations and thrive in the modern
                business world.
              </span>
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#FFF4EA] rounded-2xl shadow-lg p-8">
            
            {/* TOP ROW */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-semibold text-gray-900">
                Admission Open
              </span>

              <span className="text-gray-400">|</span>

              <div className="flex items-center gap-2 text-green-600 font-medium">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                95% <span className="text-gray-600 font-normal">of Seats Filled</span>
              </div>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              
              {/* Course Credits */}
              <div className="px-4 py-4 text-center">
                <BookOpen className="w-6 h-6 mx-auto text-gray-500 mb-2" />
                <p className="text-gray-600 text-sm">Course Credits</p>
                <p className="font-bold text-lg text-gray-900">102 units</p>
              </div>

              {/* Duration */}
              <div className="px-4 py-4 text-center">
                <Clock className="w-6 h-6 mx-auto text-gray-500 mb-2" />
                <p className="text-gray-600 text-sm">Course Duration</p>
                <p className="font-bold text-lg text-gray-900">
                  24 months · 4 sem
                </p>
              </div>

              {/* Payment */}
              <div className="px-4 py-4 text-center">
                <CreditCard className="w-6 h-6 mx-auto text-gray-500 mb-2" />
                <p className="text-gray-600 text-sm">Flexible Payment</p>
                <p className="font-bold text-lg text-gray-900">24 months</p>
                <p className="text-sm text-gray-500">Zero-Cost EMI Available</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
