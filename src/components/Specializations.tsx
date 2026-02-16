import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const specializations = [
    {
    title: 'Business Analytics',
    jobs: '73,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/analytics.jpg',
  },
  {
    title: 'Data Science',
    jobs: '70,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/datascience.jpg',
  },
  {
    title: 'Digital Entrepreneurship',
    jobs: '1,00,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/DigitalEntrepreneurship.jpg',
  },
  {
    title: 'Digital Marketing Management',
    jobs: '1,00,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/DigitalMarketingManagement.jpg',
  },
  {
    title: 'Entrepreneurship and Leadership',
    jobs: '1,50,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/EntrepreneurshipandLeadership.jpg',
  },
  {
    title: 'Finance and Accounting Management',
    jobs: '50,000+ Jobs available',
    duration: '24 months',
    fee: '₹2,50,000',
    image: '/images/finance.jpg',
  },
  {
    title: 'Global Finance Market',
    jobs: '50,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/GlobalFinanceMarket.jpg',
  },
  {
    title: 'Hospitality and Healthcare Management',
    jobs: '10,000+ Jobs available',
    duration: '24 months',
    fee: '₹2,99,000',
    image: '/images/HospitalityManagement.jpg',
  },
  {
    title: 'Human Resource Management',
    jobs: '1,20,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/hr.jpg',
  },
  {
    title: 'Human Recourse Analytics',
    jobs: '12,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/HumanResourcesAnalytics.jpg',
  },
  {
    title: 'Information Technology Management',
    jobs: '40,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/it.jpg',
  },
  {
    title: 'Insurance Management',
    jobs: '50,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/InsuranceManagement.jpg',
  },
  {
    title: 'International Finance (ACCA)',
    jobs: '2,00,000+ Jobs available',
    duration: '24 months',
    fee: '₹2,99,000',
    image: '/images/InternationalFinance(ACCA).jpg',
  },
  {
    title: 'Marketing & Sales Management',
    jobs: '45,000+ Jobs available',
    duration: '24 months',
    fee: '₹2,50,000',
    image: '/images/marketing.jpg',
  },
  {
    title: 'International Business Management',
    jobs: '1,20,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/InternationalBusinessManagement.jpg',
  },
  {
    title: 'Production and Operations Management',
    jobs: '70,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/operations.jpg',
  },
  {
    title: 'Retail Management',
    jobs: '20,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/retail.jpg',
  },
  {
    title: 'General Management',
    jobs: '1,50,000+ Jobs available',
    duration: '24 months',
    fee: '₹1,99,000',
    image: '/images/generalmanagement.jpg',
  },

];

export function Specializations() {
  return (
    <section className="py-20 bg-[#EFF6FF]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-xl"></span>
            <h2 className="text-4xl font-bold text-blue-900 mt-4 leading-snug">
              Gain Industry-Relevant Skills with
              <br />
              In-Demand Specializations
            </h2>
          </div>

          {/* SLIDER */}
          <div className="lg:col-span-2 overflow-hidden">
  <Swiper
    className="w-full"
    modules={[Autoplay, Navigation]}
    spaceBetween={24}
    loop
    navigation
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 1.5 },
      768: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3 },
    }}
  >

              {specializations.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full">

                    {/* IMAGE */}
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-yellow-400 text-sm font-semibold px-3 py-1 rounded-full">
                        {item.jobs}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <div className="flex items-center text-sm text-gray-600 gap-3">
                        <span>● {item.duration}</span>
                        <span>● {item.fee}</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}
