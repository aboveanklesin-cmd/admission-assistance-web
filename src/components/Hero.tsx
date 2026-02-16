import { Badge } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { CounsellingForm } from './CounsellingForm';
import { Button } from './Button';

export function Hero() {
  return (
    <section
      className="
        pt-[130px] 
        sm:pt-[120px] 
        md:pt-[140px] 
        lg:pt-[170px]
        bg-gradient-to-br from-gray-50 to-gray-100 
        py-10 lg:py-16
      "
    >
      <div className="container mx-auto px-4">

        {/* DESKTOP BLUE WRAPPER */}
        <div className="lg:bg-blue-900 lg:rounded-3xl lg:p-12">

          <div className="grid lg:grid-cols-2 gap-8 items-stretch w-full">

            {/* LEFT SIDE */}
            <div
              className="
                bg-blue-900 text-white
                rounded-2xl
                px-6 py-10 sm:px-8 sm:py-12
                flex flex-col justify-center
                lg:bg-transparent lg:rounded-none lg:p-0
              "
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Enhance Your Career with an Online MBA for
                <span className="inline-block mt-3 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg">
                  New-Age Leaders
                </span>
              </h1>

              {/* Countdown */}
              <div className="mb-8">
                <p className="text-sm text-gray-300 mb-3">
                  Admissions Close In:
                </p>

                <div className="flex flex-wrap gap-4">
                  <CountdownTimer />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="w-full sm:w-auto">
                  Start Your Journey
                </Button>

                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Download Brochure
                </Button>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full w-fit">
                <Badge className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  85% Seats Already Filled
                </span>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div id="counselling-form" className="w-full">
              <CounsellingForm />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
