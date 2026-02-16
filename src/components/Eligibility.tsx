import { GraduationCap, Briefcase, Globe } from "lucide-react";

export function Eligibility() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= WHO CAN APPLY ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
              Who Can Apply for Amity University <br className="hidden md:block" />
              Online MBA?
            </h2>

            <div className="space-y-10">

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Graduates in any discipline with <b>40% marks</b> in the last
                  qualifying examination. Below 40% marks, a test is conducted
                  and if passed then the student is eligible for Amity Online MBA
                  degree admission.
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Entrepreneurs looking to develop skills to manage critical
                  business projects. Fresh graduates and working professionals
                  can also apply.
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Aspirants or working professionals seeking a global career in
                  the fields of Management, Finance, Marketing, Sales,
                  Operations, Logistics among many more.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/images/campus.jpg"
              alt="Campus"
              className="rounded-3xl object-cover w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]"

            />
          </div>

        </div>

        {/* ================= FEE STRUCTURE ================= */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Amity Online MBA Fee Structure & EMI Options
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Fee Cards */}
            <div className="space-y-8">

              <div className="bg-yellow-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-gray-700 mb-2">Total Program Fee:</div>
                <div className="text-3xl font-bold text-gray-900">
                  INR 1,99,000
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-bl-full" />
              </div>

              <div className="bg-blue-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-gray-700 mb-2">Per Semester Fee:</div>
                <div className="text-3xl font-bold text-gray-900">
                  INR 49,750
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-bl-full" />
              </div>

            </div>

            {/* EMI Card */}
            <div className="bg-green-100 rounded-2xl p-10 flex flex-col justify-center">
              <div className="text-gray-800 mb-2">24 Months</div>
              <div className="text-gray-800 mb-6">Zero-Cost EMI</div>

              <div className="text-4xl font-bold text-gray-900 mb-6">
                INR 8,292
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-full w-fit font-semibold hover:bg-green-700 transition">
                Easy Payment Options
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
