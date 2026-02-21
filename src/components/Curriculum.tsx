import { useState } from "react";

type YearKey = "year1" | "year2";

interface Semester {
  title: string;
  courses: string[];
}

const curriculumData: Record<YearKey, Semester[]> = {
  year1: [
    {
      title: "Semester I",
      courses: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication",
        "Accounting for Managers",
        "Marketing Management",
      ],
    },
    {
      title: "Semester II",
      courses: [
        "Legal Aspects of Business",
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Conflict Resolution and Management",
      ],
    },
  ],
  year2: [
    {
      title: "Semester III",
      courses: [
        "Strategic Management",
        "Minor Project",
        "Professional Ethics",
        "Specialization Elective 1",
        "Specialization Elective 2",
        "Specialization Elective 3",
        "Specialization Elective 4",
      ],
    },
    {
      title: "Semester IV",
      courses: [
        "Major Project",
        "Management in Action: Social Economic and Ethical Issues",
        "Digital Marketing",
        "Specialization Elective 1",
        "Specialization Elective 2",
      ],
    },
  ],
};

export function Curriculum() {
  const [activeYear, setActiveYear] = useState<YearKey>("year1");

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            Amity Online MBA Degree Curriculum
          </h2>
          <p className="text-gray-300">Gain In-Demand Business Skills</p>
        </div>

        {/* Year Toggle */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveYear("year1")}
            className={`px-8 py-3 rounded-full font-semibold border transition-all
              ${
                activeYear === "year1"
                  ? "bg-white text-blue-900"
                  : "border-white text-white hover:bg-white/10"
              }`}
          >
            Year 1
          </button>

          <button
            onClick={() => setActiveYear("year2")}
            className={`px-8 py-3 rounded-full font-semibold border transition-all
              ${
                activeYear === "year2"
                  ? "bg-white text-blue-900"
                  : "border-white text-white hover:bg-white/10"
              }`}
          >
            Year 2
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Semesters */}
          <div className="space-y-8">
            {curriculumData[activeYear].map((semester) => (
              <div
                key={semester.title}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <span
                  className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-6
                    ${
                      semester.title.includes("I") ||
                      semester.title.includes("III")
                        ? "bg-blue-500"
                        : "bg-pink-500"
                    }`}
                >
                  {semester.title}
                </span>

                <ul className="space-y-3">
                  {semester.courses.map((course) => (
                    <li key={course} className="flex gap-2 text-gray-700">
                      <span className="mt-1">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT: Certificate */}
          <div className="flex justify-center lg:sticky lg:top-32">
            <div className="bg-white p-4 rounded-xl shadow-2xl mt-10 lg:mt-0">
              <img
                src="/images/MBA Certificate.jpg"
                alt="Amity MBA Certificate"
                className="w-full max-w-[580px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
