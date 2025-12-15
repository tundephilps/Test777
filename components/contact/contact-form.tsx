"use client";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#081a26] my-6">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#480001] to-red-950 rounded-xl lg:p-8 p-2 border border-red-800/50 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-white text-3xl font-bold mb-3">
                  Contact Information
                </h2>
                <p className="text-red-200 text-sm mb-8">
                  If you have any questions, feel free to get in touch with us.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <FaPhone className="text-white text-sm" />
                    </div>
                    <span className="text-white">709-886-7507</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-white text-sm" />
                    </div>
                    <span className="text-white">support At Canada277.com</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaFacebook className="text-white text-lg" />
                </button>
                <button className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors">
                  <FaXTwitter className="text-white text-lg" />
                </button>
                <button className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaTelegram className="text-white text-lg" />
                </button>
                <button className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FaDiscord className="text-white text-lg" />
                </button>
                <button className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                  <FaReddit className="text-white text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#081a26] backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Fast Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50 text-white outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50 text-white outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50 text-white outline-none focus:border-red-600/50 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50 text-white outline-none focus:border-red-600/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700/50 text-white outline-none focus:border-red-600/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
