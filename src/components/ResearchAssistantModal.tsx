import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, RESEARCH_WORK, SKILL_CATEGORIES } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface ResearchAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchAssistantModal: React.FC<ResearchAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am Anshika's AI Research Assistant. You can ask me about her M.Tech research work at Thapar Institute (finished June 2026), cognitive load metrics (CMI-P, TI, NTI), AI document verification, React Native mobile apps, or technical skills. How can I assist your review today?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetQuestions = [
    "What research work did Anshika do on Cognitive Load?",
    "Tell me about the AI Document Verification work",
    "What is Anshika's core tech stack?",
    "What experience did she gain at Deftsoft?"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = query.toLowerCase();

      if (lower.includes('cmi') || lower.includes('cognitive') || lower.includes('ti') || lower.includes('load')) {
        reply = `**Cognitive Workload Quantification & CMI-P Model**:
- Anshika designed the **Cognitive Model Index - Processing (CMI-P)** mathematical model to quantify working memory saturation during computational workflows.
- Decomposed latency into **Task-relevant Interference (TI)** and **Non-task-relevant Interference (NTI)**.
- Formulated the algorithm: \`CMI-P = (0.65 * TI + 0.35 * NTI) * (1.0 + variance_penalty)\`.
- Conducted empirical simulations across 1,200+ trials in Python/NumPy, observing a 0.942 R² correlation with workload indicators.`;
      } else if (lower.includes('document') || lower.includes('verification') || lower.includes('fraud') || lower.includes('vision')) {
        reply = `**Multimodal Document Intelligence Work**:
- Developed real-time edge detection and Laplacian sharpness variance filtering using **OpenCV** to flag blurry and tampered credentials.
- Integrated **Gemini AI** and OCR parsing for automated layout analysis and MRZ checksum validation.
- Built a Streamlit workbench capable of sub-second (~850ms) analysis across 35+ credential layouts.`;
      } else if (lower.includes('tech stack') || lower.includes('skill') || lower.includes('languages') || lower.includes('tools')) {
        reply = `**Anshika's Core Technical Arsenal**:
- **Languages:** Python (Advanced/Async), JavaScript, TypeScript, C++, Java, SQL
- **AI & ML:** Cognitive Modeling, PyTorch, TensorFlow, Scikit-Learn, OpenCV, Gemini AI
- **Data:** NumPy, Pandas, SciPy, Matplotlib
- **Web & Mobile:** React Native, React.js, Streamlit, Node.js, Express, Tailwind CSS`;
      } else if (lower.includes('deftsoft') || lower.includes('intern') || lower.includes('experience') || lower.includes('work')) {
        reply = `At **Deftsoft Pvt. Ltd.** (2023), Anshika served as a **React Native Intern**:
- Engineered cross-platform mobile interfaces and state pipelines with TypeScript & Redux.
- Optimized list rendering and virtualization, reducing frame drops by over 35%.
- Integrated RESTful APIs with real-time synchronization.`;
      } else if (lower.includes('thapar') || lower.includes('education') || lower.includes('degree') || lower.includes('rimt')) {
        reply = `**Academic Background**:
- **M.Tech in CSE (Finished June 2026):** Thapar Institute of Engineering and Technology, specializing in Machine Learning & Cognitive Computing.
- **B.Tech in CSE:** RIMT University, First Class Honors with focus on Algorithms & Software Architecture.`;
      } else {
        reply = `Anshika is an AI/ML Researcher & Software Engineer who completed her M.Tech at Thapar Institute in June 2026. She specializes in cognitive computing algorithms, deep computer vision systems, and performant React Native applications. You can reach out directly to her via **anshika2695@gmail.com** or through LinkedIn!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: 'Just now'
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div
      id="assistant-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050505]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="assistant-modal-container"
        className="glass-card w-full max-w-2xl h-[650px] max-h-[90vh] rounded-3xl border border-[#00dbe9]/30 bg-[#0e0e0e] shadow-[0_0_50px_rgba(0,219,233,0.2)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#131313]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#00dbe9]/10 border border-[#00dbe9]/30 text-[#00dbe9]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#e5e2e1]">
                Anshika Research Assistant
              </h3>
              <p className="text-[11px] font-mono text-[#00dbe9] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe9] animate-pulse"></span>
                Online // Laboratory Knowledge Engine
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#b9cacb] hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-[#00dbe9] text-black font-bold'
                    : 'bg-[#1c1b1b] text-[#00dbe9] border border-white/10'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#00dbe9] text-[#002022] font-medium rounded-tr-none'
                    : 'bg-[#181818] text-[#e5e2e1] border border-white/10 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#00dbe9]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Synthesizing response...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Preset Quick Prompts */}
        <div className="px-5 py-2 border-t border-white/5 bg-[#131313]/50 flex gap-2 overflow-x-auto no-scrollbar">
          {presetQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#00dbe9]/15 border border-white/10 hover:border-[#00dbe9]/40 text-[11px] font-mono text-[#b9cacb] hover:text-[#dbfcff] whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 border-t border-white/10 bg-[#131313]/90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about research methodology, CMI-P, publications, or stack..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#1c1b1b] border border-white/10 text-xs font-mono text-white placeholder-[#849495] focus:outline-none focus:border-[#00dbe9]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-full primary-btn cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
