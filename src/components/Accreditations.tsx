import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const accreditations = [
  {
    name: 'UGC-Entitled',
    image: '/accreditations/UGC.jpg',
  },
  {
    name: 'WASC Accreditation (USA)',
    image: '/accreditations/wasct.jpg',
  },
  {
    name: 'WES Recognition',
    image: '/accreditations/SILVER.jpg',
  },
  {
    name: 'QS Ranked Online MBA',
    image: '/accreditations/QS.jpg',
  },
  {
    name: 'QAA (UK) Accreditation',
    image: '/accreditations/QA.jpg',
  },
  {
    name: 'Times Higher Education Ranking',
    image: '/accreditations/Times.jpg',
  },
];

export function Accreditations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Accreditations & Rankings
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {accreditations.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-[#FFF4E8] border border-[#F3D9BF] rounded-2xl p-6 text-center h-full">

                {/* LOGO BOX */}
                <div className="bg-white rounded-xl p-6 flex items-center justify-center mb-6 h-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-20 object-contain"
                  />
                </div>

                {/* LABEL */}
                <div className="text-sm font-medium text-gray-800">
                  {item.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
