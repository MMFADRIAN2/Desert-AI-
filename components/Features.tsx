
import React from 'react';

const featureList = [
  {
    title: "Inbound Voice AI",
    description: "Our agents answer calls in your specific brand voice, handling inquiries 24/7 without needing a lunch break.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
    ),
    color: "bg-desert-100 text-desert-600"
  },
  {
    title: "Calendar Auto-Sync",
    description: "Instantly books appointments into Google, Outlook, or your CRM based on real-time availability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    ),
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Smart SMS Follow-up",
    description: "Every call triggers an automated SMS summary and next steps to the customer to ensure zero drop-off.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
    ),
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "CRM Integration",
    description: "Automatically logs call transcripts, contact details, and intent directly into Salesforce, HubSpot, or GoHighLevel.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
    ),
    color: "bg-green-100 text-green-600"
  }
];

export const Features: React.FC = () => {
  return (
    <div className="pb-24 pt-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-desert-500 font-bold text-xs uppercase tracking-widest mb-4 block">Engineered for Efficiency</span>
          <h2 className="text-4xl md:text-5xl font-bold text-onyx-950 mb-6 italic-not">Modernize Your Front Office</h2>
          <p className="text-lg text-gray-600">
            Desert Ai provides a suite of intelligent tools designed to bridge the gap between human expertise and automated speed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-desert-100 bg-desert-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-onyx-950 mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
