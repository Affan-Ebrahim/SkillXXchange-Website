import { Link, useNavigate } from 'react-router-dom';
import { Palette, Code, BookOpen, Camera } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleContactClick = (name: string, skill: string) => {
    navigate(`/messages?person=${encodeURIComponent(name)}&skill=${encodeURIComponent(skill)}`);
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trade skills, not money. Connect with talented professionals worldwide.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Connect with Talented Professionals world wide and exchange your skills for the services you need.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8 py-4 rounded-md text-lg font-semibold transition"
            >
              Join now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Professional Website Design
                  </h3>
                  <p className="text-gray-600 mb-3">
                    I create modern, responsive websites using Figma and implement them with clean code. Specializing in UI/UX design for small businesses.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Chen</p>
                      <p className="text-sm text-gray-500">Design</p>
                    </div>
                    <button
                      onClick={() => handleContactClick('Sarah Chen', 'Professional Website Design')}
                      className="bg-[#00BFA5] hover:bg-[#00A890] text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Full Stack Web Development
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Experienced developer offering React, Node.js, and database development. Can build complete web applications from scratch.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Marcus Johnson</p>
                      <p className="text-sm text-gray-500">Coding</p>
                    </div>
                    <button
                      onClick={() => handleContactClick('Marcus Johnson', 'Full Stack Web Development')}
                      className="bg-[#00BFA5] hover:bg-[#00A890] text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/share-skill"
              className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8 py-3 rounded-md font-semibold transition"
            >
              + Share your Skill
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Design</h3>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Coding</h3>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Tutoring</h3>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Photography</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
