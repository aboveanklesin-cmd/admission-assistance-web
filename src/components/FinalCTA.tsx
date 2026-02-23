import { useState } from "react";
import { Link } from "react-router-dom";
import girlImage from "/career-woman.png";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    mobile: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const phoneRegex = /^[6-9]\d{9}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneRegex.test(formData.mobile)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    if (!formData.consent) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRjb9qvXQdu1ahQCpLCuRp1VQ-ItR6OIh52FOkoiNmiTsA5F0ryonbZVVQFno4WzQL/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            course: formData.specialization,
            phone: formData.mobile,
          }),
        }
      );

      if (response.ok) {
        // ✅ FIRE META LEAD EVENT
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }

        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          specialization: "",
          mobile: "",
          consent: false,
        });
        setPhoneError("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white overflow-hidden">
      {/* HEADER */}
      <div className="container mx-auto px-6 pt-12 pb-6 lg:pl-32">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Advance Your Career
        </h2>
        <p className="text-gray-600 max-w-md">
          Fill in your information and our counselling team will contact you shortly.
        </p>
      </div>

      {/* BLUE SECTION */}
      <div className="bg-[#142E5C] relative">
        <div className="container mx-auto px-6 relative">
          {/* FORM */}
          <div className="relative z-10 max-w-xl py-16 lg:ml-20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-11 px-4 rounded-md bg-gray-200 w-full outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-11 px-4 rounded-md bg-gray-200 w-full outline-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  value={formData.specialization}
                  onChange={(e) =>
                    setFormData({ ...formData, specialization: e.target.value })
                  }
                  className="h-11 px-4 rounded-md bg-gray-200 w-full outline-none"
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Operations">Operations</option>
                  <option value="IT Management">IT Management</option>
                  <option value="Business Analytics">Business Analytics</option>
                </select>

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setFormData({ ...formData, mobile: value });

                      if (value.length === 10 && !phoneRegex.test(value)) {
                        setPhoneError("Enter valid Indian mobile number");
                      } else {
                        setPhoneError("");
                      }
                    }
                  }}
                  className={`h-11 px-4 rounded-md bg-gray-200 w-full outline-none ${
                    phoneError ? "border border-red-500" : ""
                  }`}
                  required
                />
              </div>

              {phoneError && (
                <p className="text-red-400 text-sm">{phoneError}</p>
              )}

              <div className="flex items-start gap-2 text-white text-sm leading-tight">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mt-1 accent-yellow-400"
                  required
                />
                <p>
                  I agree to receive calls, WhatsApp messages & emails from
                  Admission Assistance and its authorized partners regarding
                  admission guidance. I also agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline text-yellow-300 hover:text-yellow-400"
                  >
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || formData.mobile.length !== 10}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-2 rounded-full disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="hidden lg:block absolute -bottom-6 right-[16%] z-20">
            <img
              src={girlImage}
              alt="Career Counsellor"
              className="h-[500px] max-h-[90%] object-contain"
            />
          </div>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🎉 Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Our team will contact you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-30 pb-16">
        <div className="bg-gray-100 rounded-3xl p-8 max-w-5xl mx-auto mt-8 lg:-mt-28 shadow-md">
          <p className="text-sm text-gray-600 mb-4">
            admissionassistance.com operates as an independent marketing and
            lead generation service. We are not the official website of any
            university or institution.
          </p>

          <p className="text-sm text-gray-600 mb-4">
            All logos and trademarks belong to their respective owners and are
            used for informational purposes only. Students are advised to verify
            all details from official university websites before taking admission.
          </p>

          <p className="text-xs text-center text-gray-700">
            © 2026 Admission Assistance |{" "}
            <Link to="/disclaimer" className="underline hover:text-gray-900">
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link to="/terms-and-conditions" className="underline hover:text-gray-900">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link to="/privacy-policy" className="underline hover:text-gray-900">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
