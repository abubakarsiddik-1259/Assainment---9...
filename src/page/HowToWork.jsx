import React from 'react';

const HowToWork = () => {
    return (
         <div>
      <section class="py-16 bg-gray-400">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <p class="text-gray-800 text-xl mb-12">
            Learn new skills in just 4 easy steps
          </p>

          <div class="grid md:grid-cols-4 gap-8">
            <div class="bg-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div class="text-4xl mb-4 text-blue-500">🔍</div>
              <h3 class="font-semibold text-lg mb-2 text-gray-700">
                1. Browse Courses
              </h3>
              <p class="text-gray-600 text-sm">
                Find hundreds of courses created by expert instructors.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div class="text-4xl mb-4 text-green-500">🎯</div>
              <h3 class="font-semibold text-lg mb-2 text-gray-700">
                2. Choose Your Skill
              </h3>
              <p class="text-gray-600 text-sm">
                Select the topic that fits your passion or goal.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div class="text-4xl mb-4 text-purple-500">🎓</div>
              <h3 class="font-semibold text-lg mb-2 text-gray-700">
                3. Start Learning
              </h3>
              <p class="text-gray-600 text-sm">
                Enroll and learn with interactive lessons and videos.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div class="text-4xl mb-4 text-yellow-500">🏆</div>
              <h3 class="font-semibold text-lg mb-2 text-gray-700">
                4. Get Certified
              </h3>
              <p class="text-gray-600 text-sm">
                Earn a certificate to show your achievement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default HowToWork;