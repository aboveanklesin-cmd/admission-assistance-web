import { Button } from './Button';

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* Top Announcement Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm font-medium">
          Few Seats Left – Admissions Closing Soon!
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Amity University Online"
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </div>

          {/* CTA Button */}
          <div className="lg:-ml-[2px]">
            <Button
              className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap"
              onClick={() =>
                document
                  .getElementById('counselling-form')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get Free Counselling
            </Button>
          </div>

        </div>
      </header>

    </div>
  );
}
