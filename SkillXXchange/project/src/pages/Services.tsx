import { Upload, Search, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Three simple steps to start exchanging skills
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="text-gray-900" size={36} />
              </div>
              <div className="w-12 h-12 bg-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post a Skill</h3>
              <p className="text-gray-600 text-lg">
                Share your expertise and what services you can offer to the community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-900" size={36} />
              </div>
              <div className="w-12 h-12 bg-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Skill</h3>
              <p className="text-gray-600 text-lg">
                Browse available skills and connect with professionals who can help you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <Repeat className="text-gray-900" size={36} />
              </div>
              <div className="w-12 h-12 bg-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Make the Exchange</h3>
              <p className="text-gray-600 text-lg">
                Complete the skill trade and build lasting professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Start Today!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community and begin exchanging skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/share-skill"
              className="bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition"
            >
              Post a Skill
            </Link>
            <Link
              to="/"
              className="bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded-md text-lg font-semibold transition"
            >
              Browse Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
