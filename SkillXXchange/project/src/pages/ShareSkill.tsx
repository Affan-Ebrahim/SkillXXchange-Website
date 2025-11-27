import { useState } from 'react';

export default function ShareSkill() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    skills: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Skill shared:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Share Your Skill</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tell the community about a skill you'd like to trade
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Skill Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                placeholder="Professional Design Logo"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                <option value="design">Design</option>
                <option value="coding">Coding</option>
                <option value="tutoring">Tutoring</option>
                <option value="photography">Photography</option>
                <option value="writing">Writing</option>
                <option value="marketing">Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent resize-none"
                placeholder="Describe your skill..."
                required
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                Skills & Tools
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                placeholder="Photoshop, Branding"
                required
              />
              <p className="text-sm text-gray-500 mt-2">Separate multiple skills with commas</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 py-4 rounded-md text-lg font-semibold transition"
            >
              Share Skill
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
