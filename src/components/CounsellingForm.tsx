import { CheckCircle2 } from 'lucide-react';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';
import { useState } from 'react';

const specializations = [
  { value: '', label: 'Select Specialization' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Operations Management', label: 'Operations Management' },
  { value: 'IT Management', label: 'IT Management' },
  { value: 'Business Analytics', label: 'Business Analytics' },
];

export function CounsellingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialization: '',
    mobile: '',
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
      await fetch(
        "https://script.google.com/macros/s/AKfycbwRjb9qvXQdu1ahQCpLCuRp1VQ-ItR6OIh52FOkoiNmiTsA5F0ryonbZVVQFno4WzQL/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            course: formData.specialization,
            phone: formData.mobile,
          }),
        }
      );

      // ✅ FIRE META LEAD EVENT
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      setSuccess(true);

      setFormData({
        fullName: '',
        email: '',
        specialization: '',
        mobile: '',
        consent: false,
      });

      setPhoneError("");

    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Free Career Counselling
        </h3>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Flexible EMI Options Available</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Interactive Learning Material</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Placement Assistance</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <Select
            options={specializations}
            value={formData.specialization}
            onChange={(e) =>
              setFormData({ ...formData, specialization: e.target.value })
            }
            required
          />

          <Input
            type="tel"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");

              if (value.length <= 10) {
                setFormData({ ...formData, mobile: value });

                if (value.length === 10 && !phoneRegex.test(value)) {
                  setPhoneError("Enter a valid Indian mobile number");
                } else {
                  setPhoneError("");
                }
              }
            }}
            className={phoneError ? "border-red-500" : ""}
            required
          />

          {phoneError && (
            <p className="text-red-500 text-sm">{phoneError}</p>
          )}

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className="mt-1"
              required
            />
            <label htmlFor="consent" className="text-xs text-gray-600">
              I agree to receive calls, WhatsApp & emails regarding admission assistance.
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || formData.mobile.length !== 10}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🎉 Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for submitting the form. Our team will contact you shortly.
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
    </>
  );
}
