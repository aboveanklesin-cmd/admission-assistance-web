import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <>
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">PREMIER</div>
                  <div className="text-xs text-gray-400">BUSINESS SCHOOL</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Transforming careers through world-class online MBA education
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Faculty</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Alumni</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Brochure</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Fee Structure</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>123 Business District, Mumbai, India - 400001</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 1800-123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>admissions@premiermba.edu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="text-center text-sm text-gray-400">
              <p className="mb-2">
                © 2026 Premier Business School. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-500 transition-colors">Terms & Conditions</a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-500 transition-colors">Refund Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-yellow-500 transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-4 z-40">
        <div className="container mx-auto flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Accept Cookies
          </button>
        </div>
      </div>
    </>
  );
}
