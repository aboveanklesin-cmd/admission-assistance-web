export function HiringPartners() {
  const partners = [
    { name: 'Urban Company', logo: '/logos/urban-company.png' },
    { name: 'Flipkart', logo: '/logos/flipkart.png' },
    { name: 'BigBasket', logo: '/logos/bigbasket.png' },
    { name: 'Tech Mahindra', logo: '/logos/tech-mahindra.png' },
    { name: 'HDFC Bank', logo: '/logos/hdfc.png' },
    { name: 'Zomato', logo: '/logos/zomato.png' },
    { name: 'Swiggy', logo: '/logos/swiggy.png' },
  ];

  // duplicate list for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-10">
          Employees From Leading Organizations Trust Amity For Lifelong Learning
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-partner-scroll gap-16">
            {scrollingPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style>
        {`
          @keyframes partner-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-partner-scroll {
            animation: partner-scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
