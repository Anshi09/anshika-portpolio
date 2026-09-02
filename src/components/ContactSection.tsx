import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Copy, Check, Send, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaborationType: 'Research Collaboration'
  });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mt-28 md:mt-40 mb-24">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-18 text-center border border-white/10 glow-hover transition-all duration-700 relative overflow-hidden flex flex-col items-center justify-center min-h-[480px]">
        {/* Radial Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00dbe9]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#00dbe9] mb-6 relative z-10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OPEN FOR OPPORTUNITIES</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-6 relative z-10 text-[#e5e2e1] max-w-3xl leading-tight">
          Let's build something <span className="text-[#dbfcff] italic">intelligent</span>.
        </h2>

        <p className="text-[#b9cacb] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 font-normal leading-relaxed">
          Currently open for research collaborations, engineering roles, and innovative projects in AI/ML & Cognitive Computing.
        </p>

        {/* Action Link Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mb-8">
          <a
            id="contact-email-cta-btn"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="primary-btn px-7 py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="secondary-btn px-6 py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#00dbe9]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          <a
            id="contact-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn px-6 py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-[#00dbe9]" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={() => setShowForm(!showForm)}
            className="secondary-btn px-6 py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#00dbe9]" />
            <span>{showForm ? 'Hide Inquiry Form' : 'Send Direct Inquiry'}</span>
          </button>
        </div>

        {/* Interactive Inquiry Form */}
        {showForm && (
          <div className="w-full max-w-xl text-left bg-[#131313] p-6 sm:p-8 rounded-3xl border border-white/10 relative z-10 animate-in fade-in duration-300 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00dbe9]/10 border border-[#00dbe9]/30 text-[#00dbe9] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#e5e2e1]">Inquiry Received</h4>
                <p className="text-xs text-[#b9cacb]">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Anshika will review your message regarding <strong className="text-[#00dbe9]">{formData.collaborationType}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '', collaborationType: 'Research Collaboration' });
                  }}
                  className="secondary-btn px-5 py-2 rounded-xl text-xs font-mono mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="font-display text-lg font-bold text-[#e5e2e1] flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#00dbe9]" />
                  <span>Direct Research & Collaboration Inquiry</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#849495] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#00dbe9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#849495] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#00dbe9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#849495] mb-1">Inquiry Category</label>
                  <select
                    value={formData.collaborationType}
                    onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#00dbe9]"
                  >
                    <option value="Research Collaboration">Research Collaboration (Cognitive AI / Vision)</option>
                    <option value="Engineering Role">Full-Stack / ML Engineering Opportunity</option>
                    <option value="Consulting / Advisory">Technical Consultation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#849495] mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your research project, role opening, or technical inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1b1b] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#00dbe9] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full primary-btn py-3 rounded-xl font-medium text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
