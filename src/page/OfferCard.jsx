import React from "react";

const OfferCart = () => {
  return (
    <div>
      <section className="py-30 bg-gradient-to-r from-purple-700 to-teal-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🎉 limited Time Offer!
          </h2>
          <p className="text-white mb-8">
            {" "}
            Get up to{" "}
            <span className="text-pink-400 font-semibold ">50% OFF </span> on
            all professional skill courses. Lean faster, save more, and build
            your dream career today!
          </p>

          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl shadow-xl p-8 md:flex items-center justify-between">
            <div className="text-left md-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                {" "}
                Upgrade Your Skills Today
              </h3>
              <p class="text-gray-200 mb-4">
                Offer valid till{" "}
                <span class="font-medium text-green-500">January 1, 2026</span>
              </p>
              <div class="flex items-center space-x-3">
                <span class="text-4xl font-bold text-pink-400">50% OFF</span>
              </div>
            </div>
          </div>
          <p class="mt-8 text-sm text-white">
            💡 Hurry up! This offer is available for the first 100 students
            only.
          </p>
            <div className="mt-9 ">
            <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-0">Register Now</button>
        </div>
        </div>
      
      </section>
    </div>
  );
};

export default OfferCart;
