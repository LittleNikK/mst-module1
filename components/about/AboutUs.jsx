import React from "react";

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "High-performance ecosystem that is fast",
  },
  {
    title: "Secure Transactions",
    desc: "Advanced cryptography ensuring safety",
  },
  {
    title: "Developer Friendly",
    desc: "Tools for building dApps easily",
  },
  {
    title: "Decentralized Ecosystem",
    desc: "Supports DeFi, NFTs, smart contracts",
  },
];

const stats = [
  { value: "500K+", label: "Active Wallets" },
  { value: "100K+", label: "Smart Contracts" },
  { value: "300+", label: "dApps Built" },
  { value: "$2B+", label: "Transactions" },
];

const team = [
  { name: "John Doe", role: "Founder & CEO" },
  { name: "Jane Smith", role: "Blockchain Engineer" },
  { name: "Alex Kumar", role: "Product Lead" },
  { name: "Sarah Lee", role: "Marketing Manager" },
  { name: "Lisa Wong", role: "UI/UX Designer" },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-white via-red-50 to-pink-100 text-gray-800">

      {/* HERO */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="text-red-600">MST Blockchain</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Building the future of decentralized technology with speed, security, and scalability.
            </p>

            <p className="mt-4 text-gray-500 max-w-md">
              MST Blockchain is a next-generation Web3 infrastructure platform designed to empower developers, businesses and users worldwide.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-xl shadow hover:bg-red-600 transition">
                Get Started
              </button>
              <button className="border border-red-400 text-red-500 px-6 py-3 rounded-xl hover:bg-red-50 transition">
                Explore Docs
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="h-72 bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl shadow-inner"></div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-10 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Our <span className="text-red-600">Mission</span> & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["Mission", "Vision"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-red-600">Our {item}</h3>
              <p className="text-gray-600 mt-2">
                {item === "Mission"
                  ? "To create a decentralized ecosystem that is fast, secure, and accessible for everyone."
                  : "To become a global leader in blockchain innovation, powering the next generation of digital economies."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 md:px-10 py-10 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">
          What <span className="text-red-600">We Do</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-10 py-10 text-center">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-red-600">{item.value}</h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-10 py-10 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Our <span className="text-red-600">Team</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 md:px-10 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose <span className="text-red-600">MST</span>
        </h2>

        <ul className="space-y-3 text-gray-600 text-center md:text-left">
          {[
            "Lightning-fast transactions",
            "Low gas fees",
            "Enterprise-grade security",
            "Growing ecosystem",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-green-500">✔</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16 text-center">
        <div className="bg-red-500 text-white p-10 rounded-3xl max-w-4xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold">Join the Future of Blockchain</h2>
          <p className="mt-3 text-red-100">
            Be part of the decentralized revolution.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-red-500 px-6 py-2 rounded-xl hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-2 rounded-xl hover:bg-red-400 transition">
              Explore Docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;