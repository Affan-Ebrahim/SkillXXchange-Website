import { Target, Eye, Users, Lightbulb, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SkillXXchange</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building a world where your skills are your currency
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="text-[#00BFA5] mr-3" size={40} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize access to skills and services by creating a global community where professionals can exchange their expertise without monetary barriers. We're building a world where your skills are your currency and every exchange creates lasting connections.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="text-[#00BFA5] mr-3" size={40} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the world's leading skill barter platform, fostering a global ecosystem where talent transcends geographical and economic boundaries. We envision a future where everyone can access the skills they need through the power of collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together to achieve extraordinary results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and embrace new ideas to improve our platform.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making skill exchange accessible to everyone, regardless of location or background.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#00BFA5] rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start exchanging skills with talented professionals today
          </p>
          <Link
            to="/learn-more"
            className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition"
          >
            Learn more
          </Link>
        </div>
      </section>
    </div>
  );
}
