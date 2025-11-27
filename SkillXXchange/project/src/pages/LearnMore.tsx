import { Link } from 'react-router-dom';
import { Check, Star, Users, TrendingUp, Shield, Globe } from 'lucide-react';

export default function LearnMore() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose SkillXXchange?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join a thriving community of professionals who are transforming how skills are shared and exchanged
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Payment Required</h3>
                <p className="text-gray-600">
                  Exchange skills directly without worrying about payment or financial transactions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Community</h3>
                <p className="text-gray-600">
                  Connect with talented professionals from around the world and expand your network.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Relationships</h3>
                <p className="text-gray-600">
                  Create meaningful professional relationships that can lead to long-term collaborations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Showcase Your Skills</h3>
                <p className="text-gray-600">
                  Display your expertise to a global audience and build your professional portfolio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Growth</h3>
                <p className="text-gray-600">
                  Learn new skills from experienced professionals and accelerate your personal development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of security and verify professional credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How Members Are Using SkillXXchange
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <div className="inline-block bg-[#FFD700] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Web Designer
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trading Design for Coding</h3>
              <p className="text-gray-600 mb-4">
                "I offer UI/UX design services and receive web development help in return. It's a win-win that saves costs while building amazing projects."
              </p>
              <p className="text-sm font-semibold text-gray-700">— Alex Rivera</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <div className="inline-block bg-[#FFD700] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Developer
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Photography</h3>
              <p className="text-gray-600 mb-4">
                "I needed professional headshots for my portfolio, so I exchanged my coding skills for photography sessions. Now I have amazing photos!"
              </p>
              <p className="text-sm font-semibold text-gray-700">— Jordan Kim</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <div className="inline-block bg-[#FFD700] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Entrepreneur
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Building My Startup</h3>
              <p className="text-gray-600 mb-4">
                "As a startup founder, SkillXXchange helped me get professional services without depleting my budget. I've built great collaborations!"
              </p>
              <p className="text-sm font-semibold text-gray-700">— Morgan Chen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How do I find the right professional?</h3>
              <p className="text-gray-600">
                Browse our skills directory, filter by category, and check out professional profiles and ratings. You can also message professionals directly to discuss your needs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What if we disagree on skill value?</h3>
              <p className="text-gray-600">
                Our platform includes negotiation tools and guidelines to help both parties agree on fair value. We also provide mediation support if needed.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is my information safe?</h3>
              <p className="text-gray-600">
                Yes! We use industry-standard encryption and security protocols to protect your personal information. Your data is never shared without your consent.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How does the verification process work?</h3>
              <p className="text-gray-600">
                Professionals must provide portfolio samples or references. We verify credentials and maintain community ratings to ensure quality and trust.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I rate professionals?</h3>
              <p className="text-gray-600">
                Absolutely! After completing an exchange, both parties can rate each other. This helps maintain community standards and helps others make informed decisions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What happens if someone doesn't complete the exchange?</h3>
              <p className="text-gray-600">
                We have dispute resolution mechanisms in place. You can file a complaint, and our team will investigate and help facilitate a resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of professionals who are already exchanging skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-block bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8 py-4 rounded-md text-lg font-semibold transition"
            >
              Create Account
            </Link>
            <Link
              to="/"
              className="inline-block border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-4 rounded-md text-lg font-semibold transition"
            >
              Explore Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
