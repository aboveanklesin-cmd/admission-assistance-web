import { useState } from 'react';
import { X } from 'lucide-react';

type FacultyMember = {
  name: string;
  designation: string;
  experience: string;
  shortBio: string;
  fullBio: string;
  image: string;
};

const facultyMembers: FacultyMember[] = [
  {
    name: 'Dr. Coral Jasmine Barboza',
    designation: 'Associate Professor',
    experience: '10+ years of experience; PhD in General Management',
    shortBio:
      'Specializes in General, HR, Strategic & Marketing Management.',
    fullBio:
      "Dr. Barboza, a dedicated educator, specializes in General, HR, Strategic, Marketing Management, and Organisational Behaviour at graduate and postgraduate levels. Her research focuses on AI's impact on HR practices, disruptive innovation, digital transformation, leadership, and Smart Cities development.",
    image: '/faculty/coral.jpg',
  },
  {
    name: 'Dr. Rashmi Saxena',
    designation: 'Assistant Professor',
    experience: '14+ years of experience; PhD in Management',
    shortBio:
      'Blends academic theory with corporate insights.',
    fullBio:
      'Dr. Rashmi Saxena, Assistant Professor with 14 years of academic and corporate experience, holds a Ph.D. in Management (Insurance) and an MBA in Marketing and Finance. She encourages critical thinking, participation, and skill-building for future-ready professionals.',
    image: '/faculty/rashmi.jpg',
  },
  {
    name: 'Mona Chaudhary',
    designation: 'Assistant Professor',
    experience: '9+ years of experience; MBA',
    shortBio:
      'Expert in HRM, OB, Labour Laws & Management.',
    fullBio:
      'Ms. Mona Chaudhary has 9+ years of teaching experience. She holds B.Com (Hons), MBA, Diploma in Labour Laws, and HR Analytics certification. She is pursuing a PhD in Management with research on online education in India.',
    image: '/faculty/mona.jpg',
  },
  {
    name: 'Dr. Pragati Sahai',
    designation: 'Assistant Professor',
    experience: '17+ years of experience; PhD in Biotechnology',
    shortBio:
      'Expert in sustainability & organizational ethics.',
    fullBio:
      'Dr. Pragati Sahai has 17 years of teaching and research experience. A founding faculty member of Biotechnology, she has 24 publications in Scopus-indexed journals and expertise in sustainability, ethics, and workplace skills.',
    image: '/faculty/pragati.jpg',
  },
  {
    name: 'Dr. Harshita',
    designation: 'Assistant Professor',
    experience: '3+ years of experience; PhD in SHRM',
    shortBio:
      'Specialist in SHRM, IR & Green HRM.',
    fullBio:
      'Dr. Harshita Singh specializes in SHRM, industrial relations, labor laws, and green HRM. She has published case studies in Richard Ivey and research papers in top journals and won best paper awards at XLRI.',
    image: '/faculty/harshita.jpg',
  },
  {
    name: 'Dr. Maitri Savarn',
    designation: 'Professor',
    experience: '22+ years of experience; PhD in HRM',
    shortBio:
      'Leader in NAAC, NBA & academic governance.',
    fullBio:
      'Dr. Maitri has 22 years of experience and has served as Professor, HoD, and Chair Head. She led NAAC & NBA accreditation, contributed to AICTE projects, won Best Faculty Award, and authored multiple national & international papers.',
    image: '/faculty/maitri.jpg',
  },
];

export function Faculty() {
  const [activeFaculty, setActiveFaculty] = useState<FacultyMember | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our Top-Ranked Faculty
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty) => (
            <div
  key={faculty.name}
  className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:bg-blue-700"
>
  <div className="p-6 transition-all duration-500">
    
    {/* Top Section (Image + Name) */}
    <div className="flex items-start gap-4">
      <img
        src={faculty.image}
        alt={faculty.name}
        className="w-24 h-24 object-cover rounded-2xl transition-all duration-500"
      />

      <div>
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white transition-colors duration-500">
          {faculty.name}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-500">
          {faculty.designation}
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-gray-200 my-6 group-hover:bg-white/40 transition-all duration-500"></div>

    {/* Hover Content */}
    <div className="space-y-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500">
      <p className="text-sm text-blue-100">
        {faculty.experience}
      </p>

      <p className="text-sm text-blue-50">
        {faculty.fullBio.slice(0, 140)}...
      </p>

      <button
        onClick={() => setActiveFaculty(faculty)}
        className="underline text-white font-semibold pt-2"
      >
        Read More
      </button>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeFaculty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden relative">
            <button
              onClick={() => setActiveFaculty(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X />
            </button>

            <div className="grid md:grid-cols-2">
              <img
                src={activeFaculty.image}
                alt={activeFaculty.name}
                className="w-full h-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">
                  {activeFaculty.name}
                </h3>
                <p className="text-blue-700 font-semibold mb-2">
                  {activeFaculty.designation}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {activeFaculty.experience}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {activeFaculty.fullBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
