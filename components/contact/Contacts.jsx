import React from "react";
import { Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    text: "support@mstblockchain.com",
  },
  {
    icon: <Phone size={18} />,
    text: "+91 89832 74544",
  },
];

const faqs = [
  {
    q: "What is MST Blockchain?",
    a: "MST Blockchain is India’s 1st Layer-1 blockchain, a secure and decentralized platform designed to facilitate fast, transparent, and reliable digital transactions, making blockchain technology accessible for individuals and businesses.",
  },
  {
    q: "Is MST Blockchain secure?",
    a: "Yes, MST Blockchain uses advanced cryptographic security and decentralized architecture to ensure safety and transparency.",
  },
  {
    q: "How do I create a wallet?",
    a: "You can create a wallet using MST-supported wallet apps or browser extensions like MetaMask and connect to MST network.",
  },
];

const Contacts = () => {
  return (
    <div className="bg-gradient-to-br from-white via-red-50 to-pink-100 text-gray-800">
      
      {/* HERO */}
      <section className="text-center px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact Information
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Have questions or need assistance? We're here to help! Reach out to our
          dedicated support team for personalized solutions. Your feedback
          matters, and we’re just a message away—contact us today!
        </p>
      </section>

      {/* CONTACT + ADDRESS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        
        {/* CONTACT */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-xl font-semibold text-red-600 mb-5">
            Contact Us
          </h2>

          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4 mb-4 hover:shadow-md transition"
            >
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                {item.icon}
              </div>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ADDRESS */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-xl font-semibold text-red-600 mb-5">
            Find Us
          </h2>

          <p className="font-semibold text-lg">
            M/s. Masterstroke Technosoft Private Limited.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Kohinoor World Tower, unit no. 403, Tower 3, 4th floor old pune -
            mumbai highway, opposite ranka jewellers, pimpri, pune, India pin:
            411018
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Got Questions? We’ve Got{" "}
          <span className="text-red-600">Answers</span>.
        </h2>

        <div className="space-y-5">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="bg-white p-5 rounded-xl shadow cursor-pointer group hover:shadow-md transition"
            >
              <summary className="font-semibold text-lg cursor-pointer">
                {item.q}
              </summary>
              <p className="text-gray-600 mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contacts;