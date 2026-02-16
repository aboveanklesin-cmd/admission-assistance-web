import { useEffect, useRef, useState } from "react";
import { Play, Star } from "lucide-react";

type Testimonial = {
  name: string;
  batch: string;
  video: string;
};

const testimonials: Testimonial[] = [
  { name: "Ruchir Verma", batch: "BBA, Jul’22", video: "/videos/ruchir.mp4" },
  { name: "Priyanka Shreshtha", batch: "BBA, Jul’24", video: "/videos/priyanka.mp4" },
  { name: "Abhik Ganguly", batch: "MBA, Jan’21", video: "/videos/abhik.mp4" },
  { name: "Ridima Rai", batch: "BBA, Jul’24", video: "/videos/ridhima.mp4" },
  { name: "Tanya Luthra", batch: "BBA, Jul’24", video: "/videos/tanya.mp4" },
  { name: "Shalu Sharma", batch: "BBA, Jul’24", video: "/videos/shalu.mp4" },
  { name: "Anushka Pathak", batch: "BBA, Jul’24", video: "/videos/anushka.mp4" },
];

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  /* AUTO SLIDER */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      // STOP auto scroll if video is playing
      if (playingIndex !== null) return;

      const isMobile = window.innerWidth < 768;

      const cardWidth = isMobile
        ? slider.clientWidth
        : slider.clientWidth / 4;

      index++;
      if (index >= testimonials.length) {
        index = 0;
      }

      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [playingIndex]);

  /* HANDLE PLAY */
  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
      }
    });

    video.play();
    setPlayingIndex(index);
  };

  /* HANDLE PAUSE */
  const handlePause = () => {
    setPlayingIndex(null);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Honest Reviews by Amity Online Learners
        </h2>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="
                snap-center
                flex-shrink-0
                w-full
                md:w-[calc(50%-12px)]
                lg:w-[calc(25%-18px)]
              "
            >
              <div className="bg-gray-50 rounded-3xl p-4 shadow-md">

                {/* VIDEO */}
                <div className="relative rounded-2xl overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.video}
                    className="w-full h-[420px] object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    onPause={handlePause}
                    onEnded={handlePause}
                  />

                  {/* CENTER PLAY BUTTON */}
                  {playingIndex !== index && (
                    <div
                      onClick={() => handlePlay(index)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-8 h-8 text-blue-700 ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">{item.batch}</p>

                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
