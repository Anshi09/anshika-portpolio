import React, { useState } from 'react';
import { Project } from '../types';
import { X, Play, Code, BarChart3, CheckCircle2, Shield, AlertTriangle, RefreshCw, Copy, Check, Smartphone, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'architecture'>('demo');
  const [copiedCode, setCopiedCode] = useState(false);

  // Cognitive Calculator State
  const [baselineRt, setBaselineRt] = useState<number>(320);
  const [taskRt, setTaskRt] = useState<number>(540);
  const [nonTaskRt, setNonTaskRt] = useState<number>(410);
  const [varianceFactor, setVarianceFactor] = useState<number>(0.18);

  // Document Verification Demo State
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(0);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifiedResult, setVerifiedResult] = useState<boolean>(true);

  // EventSync Mobile Demo State
  const [eventTab, setEventTab] = useState<'sessions' | 'tickets' | 'networking'>('sessions');
  const [isRsvpd, setIsRsvpd] = useState<boolean>(false);

  // Frendii Social Demo State
  const [frendiiLikes, setFrendiiLikes] = useState<Record<number, number>>({ 1: 42, 2: 128, 3: 89 });
  const [hasLiked, setHasLiked] = useState<Record<number, boolean>>({});

  // Calculations for Cognitive Load
  const ti = Math.max(0, taskRt - baselineRt);
  const nti = Math.max(0, nonTaskRt - baselineRt);
  const cmiP = Math.round((0.65 * ti + 0.35 * nti) * (1.0 + varianceFactor));
  const loadStatus = cmiP > 190 ? 'High Saturation' : cmiP > 110 ? 'Moderate Load' : 'Optimal Capacity';
  const statusColor = cmiP > 190 ? '#ffb4ab' : cmiP > 110 ? '#dbfcff' : '#00dbe9';

  const sampleDocs = [
    {
      id: 'doc-1',
      title: 'Valid International Passport',
      type: 'Passport (ICAO 9303)',
      issuer: 'Republic of Tech',
      holder: 'Anshika Rana',
      status: 'GENUINE',
      confidence: 99.4,
      laplacian: 184.2,
      mrzMatch: 'PASSED (Checksums Valid)',
      tamperRisk: 'Minimal (< 0.6%)',
      fields: { 'Document #': 'K8920147X', 'DOB': '1998-05-14', 'Expiry': '2030-10-12', 'Sex': 'F' }
    },
    {
      id: 'doc-2',
      title: 'Altered Digital Driver License',
      type: 'National ID / License',
      issuer: 'State Transport Authority',
      holder: 'Johnathan Doe (Altered)',
      status: 'TAMPER_DETECTED',
      confidence: 42.1,
      laplacian: 68.4,
      mrzMatch: 'FAILED (Font Inconsistency in MRZ line 2)',
      tamperRisk: 'High (Compression Artifacts Detected)',
      fields: { 'Document #': 'DL-8829-MOD', 'DOB': '1990-01-01', 'Expiry': '2028-04-19', 'Tamper Flags': '3 Artifacts' }
    }
  ];

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const runDocVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedResult(true);
    }, 800);
  };

  const toggleFrendiiLike = (id: number) => {
    setHasLiked(prev => {
      const current = !!prev[id];
      const next = !current;
      setFrendiiLikes(l => ({ ...l, [id]: l[id] + (next ? 1 : -1) }));
      return { ...prev, [id]: next };
    });
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050505]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/15 bg-[#0e0e0e] shadow-[0_0_50px_rgba(0,219,233,0.15)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#131313]/90">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#00dbe9]/10 text-[#00dbe9] border border-[#00dbe9]/30">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-[#e5e2e1]">{project.title}</h3>
              <p className="text-xs font-mono text-[#00dbe9]">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#b9cacb] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/5 bg-[#131313]/40">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-[#1c1b1b] text-[#dbfcff] border-t border-x border-white/10'
                : 'text-[#849495] hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-[#00dbe9]" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-[#1c1b1b] text-[#dbfcff] border-t border-x border-white/10'
                : 'text-[#849495] hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#00dbe9]" />
            <span>Metrics & Tech Stack</span>
          </button>

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#1c1b1b] text-[#dbfcff] border-t border-x border-white/10'
                  : 'text-[#849495] hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-[#00dbe9]" />
              <span>Pipeline Code ({project.codeSnippet.title})</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: DEMO */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {/* DEMO 1: Cognitive Load Calculator */}
              {project.demoType === 'cognitive-calculator' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-[#131313] border border-white/10">
                    <h4 className="font-display text-base font-semibold text-[#dbfcff] mb-1">
                      Real-Time Cognitive Load & CMI-P Model Simulator
                    </h4>
                    <p className="text-xs text-[#b9cacb]">
                      Adjust experimental parameters from trial reaction times to compute Task-relevant Interference (TI), Non-task-relevant Interference (NTI), and the resulting Cognitive Model Index (CMI-P).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Controls */}
                    <div className="md:col-span-2 space-y-4 p-5 rounded-2xl bg-[#131313] border border-white/5">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-[#b9cacb]">Baseline Reaction Time (ms)</span>
                          <span className="text-[#00dbe9] font-bold">{baselineRt} ms</span>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="500"
                          value={baselineRt}
                          onChange={(e) => setBaselineRt(Number(e.target.value))}
                          className="w-full accent-[#00dbe9]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-[#b9cacb]">Dual-Task Active Reaction Time (ms)</span>
                          <span className="text-[#00dbe9] font-bold">{taskRt} ms</span>
                        </div>
                        <input
                          type="range"
                          min="300"
                          max="900"
                          value={taskRt}
                          onChange={(e) => setTaskRt(Number(e.target.value))}
                          className="w-full accent-[#00dbe9]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-[#b9cacb]">Non-Task Background Stimulus RT (ms)</span>
                          <span className="text-[#00dbe9] font-bold">{nonTaskRt} ms</span>
                        </div>
                        <input
                          type="range"
                          min="250"
                          max="700"
                          value={nonTaskRt}
                          onChange={(e) => setNonTaskRt(Number(e.target.value))}
                          className="w-full accent-[#00dbe9]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-[#b9cacb]">Neural Variance Coefficient</span>
                          <span className="text-[#00dbe9] font-bold">{varianceFactor.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min="0.05"
                          max="0.50"
                          step="0.01"
                          value={varianceFactor}
                          onChange={(e) => setVarianceFactor(Number(e.target.value))}
                          className="w-full accent-[#00dbe9]"
                        />
                      </div>
                    </div>

                    {/* Calculated Output Card */}
                    <div className="p-5 rounded-2xl bg-[#1c1b1b] border border-[#00dbe9]/30 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="text-xs font-mono text-[#849495] uppercase">Computed Output</div>
                        <div className="text-center py-2">
                          <div className="text-3xl font-display font-bold text-[#dbfcff]">{cmiP}</div>
                          <div className="text-xs font-mono mt-1" style={{ color: statusColor }}>
                            {loadStatus}
                          </div>
                        </div>

                        <div className="space-y-2 text-xs font-mono pt-2 border-t border-white/10">
                          <div className="flex justify-between">
                            <span className="text-[#849495]">Task Interference (TI):</span>
                            <span className="text-[#e5e2e1]">{ti} ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#849495]">Non-Task Interf. (NTI):</span>
                            <span className="text-[#e5e2e1]">{nti} ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#849495]">Load Factor:</span>
                            <span className="text-[#00dbe9]">{(cmiP / 300 * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Visual Bar */}
                      <div className="w-full bg-[#050505] rounded-full h-2 overflow-hidden mt-4">
                        <div
                          className="h-full bg-gradient-to-r from-[#00dbe9] to-[#006970] transition-all duration-300"
                          style={{ width: `${Math.min(100, (cmiP / 300) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 2: AI Document Verification Inspector */}
              {project.demoType === 'doc-verification' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#131313] border border-white/10">
                    <div>
                      <h4 className="font-display text-base font-semibold text-[#dbfcff]">
                        Automated Multimodal Document Verification Engine
                      </h4>
                      <p className="text-xs text-[#b9cacb]">
                        Select a sample document and run OpenCV Laplacian sharpness and Gemini Multimodal validation.
                      </p>
                    </div>
                    <button
                      onClick={runDocVerification}
                      disabled={isVerifying}
                      className="primary-btn px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
                      <span>{isVerifying ? 'Analyzing...' : 'Re-verify'}</span>
                    </button>
                  </div>

                  {/* Sample Document Selector */}
                  <div className="grid grid-cols-2 gap-3">
                    {sampleDocs.map((doc, idx) => (
                      <button
                        key={doc.id}
                        onClick={() => setSelectedDocIndex(idx)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedDocIndex === idx
                            ? 'bg-[#1c1b1b] border-[#00dbe9] shadow-[0_0_15px_rgba(0,219,233,0.2)]'
                            : 'bg-[#131313] border-white/5 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono font-bold text-[#e5e2e1]">{doc.title}</span>
                          {doc.status === 'GENUINE' ? (
                            <Shield className="w-4 h-4 text-[#00dbe9]" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-[#ffb4ab]" />
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-[#849495]">{doc.type}</span>
                      </button>
                    ))}
                  </div>

                  {/* Verification Results Panel */}
                  <div className="p-5 rounded-2xl bg-[#131313] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            sampleDocs[selectedDocIndex].status === 'GENUINE' ? 'bg-[#00dbe9]' : 'bg-[#ffb4ab]'
                          }`}
                        />
                        <span className="font-mono text-sm font-bold text-[#e5e2e1]">
                          Verdict: {sampleDocs[selectedDocIndex].status}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#00dbe9]">
                        Confidence: {sampleDocs[selectedDocIndex].confidence}%
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                      <div className="space-y-2">
                        <div className="text-[#849495]">OCR Extracted Fields:</div>
                        {Object.entries(sampleDocs[selectedDocIndex].fields).map(([key, val]) => (
                          <div key={key} className="flex justify-between p-2 rounded bg-[#1c1b1b]">
                            <span className="text-[#849495]">{key}:</span>
                            <span className="text-[#dbfcff] font-semibold">{val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="text-[#849495]">Tamper & Computer Vision Analysis:</div>
                        <div className="p-2 rounded bg-[#1c1b1b] flex justify-between">
                          <span className="text-[#849495]">Laplacian Variance:</span>
                          <span className="text-[#dbfcff]">{sampleDocs[selectedDocIndex].laplacian}</span>
                        </div>
                        <div className="p-2 rounded bg-[#1c1b1b] flex justify-between">
                          <span className="text-[#849495]">MRZ Status:</span>
                          <span className="text-[#00dbe9]">{sampleDocs[selectedDocIndex].mrzMatch}</span>
                        </div>
                        <div className="p-2 rounded bg-[#1c1b1b] flex justify-between">
                          <span className="text-[#849495]">Tamper Risk:</span>
                          <span className={sampleDocs[selectedDocIndex].status === 'GENUINE' ? 'text-[#00dbe9]' : 'text-[#ffb4ab]'}>
                            {sampleDocs[selectedDocIndex].tamperRisk}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 3: EventSync Mobile App Preview */}
              {project.demoType === 'mobile-eventsync' && (
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-xs font-mono text-[#849495] text-center">
                    Simulated React Native Interface // 60 FPS Event Engine
                  </p>

                  <div className="w-full max-w-sm rounded-[32px] border-4 border-white/20 bg-[#000000] p-4 shadow-2xl space-y-4">
                    {/* Phone Status Bar */}
                    <div className="flex justify-between text-[10px] font-mono text-[#849495] px-2">
                      <span>09:41</span>
                      <span>5G // 100%</span>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div>
                        <div className="text-[10px] font-mono text-[#00dbe9]">TECH SUMMIT 2024</div>
                        <div className="text-sm font-bold text-white">EventSync Live</div>
                      </div>
                      <button
                        onClick={() => setIsRsvpd(!isRsvpd)}
                        className={`text-[10px] font-mono px-3 py-1 rounded-full border transition-all ${
                          isRsvpd ? 'bg-[#00dbe9] text-black font-bold' : 'bg-white/10 text-white border-white/20'
                        }`}
                      >
                        {isRsvpd ? '✓ RSVP Registered' : '+ Quick RSVP'}
                      </button>
                    </div>

                    {/* App Subtabs */}
                    <div className="grid grid-cols-3 gap-1 bg-[#1a1a1a] p-1 rounded-xl text-[11px] font-mono text-center">
                      <button
                        onClick={() => setEventTab('sessions')}
                        className={`py-1.5 rounded-lg ${eventTab === 'sessions' ? 'bg-[#2a2a2a] text-[#dbfcff]' : 'text-[#849495]'}`}
                      >
                        Agenda
                      </button>
                      <button
                        onClick={() => setEventTab('tickets')}
                        className={`py-1.5 rounded-lg ${eventTab === 'tickets' ? 'bg-[#2a2a2a] text-[#dbfcff]' : 'text-[#849495]'}`}
                      >
                        Pass
                      </button>
                      <button
                        onClick={() => setEventTab('networking')}
                        className={`py-1.5 rounded-lg ${eventTab === 'networking' ? 'bg-[#2a2a2a] text-[#dbfcff]' : 'text-[#849495]'}`}
                      >
                        Feed
                      </button>
                    </div>

                    {/* Active Screen Content */}
                    <div className="h-52 overflow-y-auto space-y-2 pr-1">
                      {eventTab === 'sessions' && (
                        <>
                          <div className="p-3 rounded-xl bg-[#141414] border border-white/5">
                            <div className="text-[10px] font-mono text-[#00dbe9]">10:00 AM - HALL A</div>
                            <div className="text-xs font-bold text-white">Opening Keynote: Next-Gen AI</div>
                            <div className="text-[10px] text-[#849495]">Dr. R. Sharma • 450 Attendees</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#141414] border border-white/5">
                            <div className="text-[10px] font-mono text-[#00dbe9]">11:30 AM - WORKSHOP 2</div>
                            <div className="text-xs font-bold text-white">Cognitive Load Modeling in Practice</div>
                            <div className="text-[10px] text-[#849495]">Anshika Rana • Hands-on Lab</div>
                          </div>
                        </>
                      )}

                      {eventTab === 'tickets' && (
                        <div className="p-4 rounded-xl bg-[#141414] border border-white/10 text-center space-y-2">
                          <div className="text-xs font-bold text-white">VIP ACCESS PASS</div>
                          <div className="w-24 h-24 mx-auto bg-white p-2 rounded-lg flex items-center justify-center text-black font-mono text-[9px] font-bold">
                            [QR CODE // SYNC]
                          </div>
                          <div className="text-[10px] font-mono text-[#00dbe9]">TICKET #ES-2024-9982</div>
                        </div>
                      )}

                      {eventTab === 'networking' && (
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-[#141414] border border-white/5 text-xs text-[#b9cacb]">
                            <span className="font-bold text-white">@alex_ai:</span> Excited to attend the Cognitive Load workshop today!
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#141414] border border-white/5 text-xs text-[#b9cacb]">
                            <span className="font-bold text-white">@priya_ml:</span> The React Native frontend is super snappy.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 4: Frendii Social App */}
              {project.demoType === 'mobile-frendii' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#131313] border border-white/10">
                    <h4 className="font-display text-base font-semibold text-[#dbfcff]">
                      Frendii Community & Interactive Feed Client
                    </h4>
                    <p className="text-xs text-[#b9cacb]">
                      Real-time interactive social network feed with instant optimistic feedback, community channels, and multimedia support.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        id: 1,
                        author: 'Anshika Rana',
                        role: 'AI Researcher',
                        time: '2h ago',
                        content: 'Finished testing our new dual-task latency pipeline! Working memory interference is dropped by 18% with adaptive pacing.',
                        tag: '#CognitiveAI'
                      },
                      {
                        id: 2,
                        author: 'Thapar ML Lab',
                        role: 'Research Community',
                        time: '4h ago',
                        content: 'New pre-print released on automated document fraud detection with multimodal Gemini AI models!',
                        tag: '#Research'
                      }
                    ].map((post) => (
                      <div key={post.id} className="p-4 rounded-2xl bg-[#131313] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">{post.author}</div>
                            <div className="text-[10px] font-mono text-[#849495]">{post.role} • {post.time}</div>
                          </div>
                          <span className="text-[10px] font-mono text-[#00dbe9]">{post.tag}</span>
                        </div>
                        <p className="text-xs text-[#b9cacb] leading-relaxed">{post.content}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <button
                            onClick={() => toggleFrendiiLike(post.id)}
                            className={`text-xs font-mono flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                              hasLiked[post.id] ? 'bg-[#00dbe9]/20 text-[#dbfcff] font-bold' : 'text-[#849495] hover:text-white'
                            }`}
                          >
                            <span>⚡</span>
                            <span>{frendiiLikes[post.id]} Likes</span>
                          </button>
                          <span className="text-[10px] font-mono text-[#849495]">Share</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & METRICS */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-[#849495] uppercase mb-3">Core Performance Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics?.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#131313] border border-white/10 text-center">
                      <div className="text-lg sm:text-xl font-display font-bold text-[#dbfcff]">{m.value}</div>
                      <div className="text-[10px] font-mono text-[#849495] mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono text-[#849495] uppercase mb-3">Key Architectural Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#131313] border border-white/5 text-xs text-[#b9cacb]">
                      <CheckCircle2 className="w-4 h-4 text-[#00dbe9] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono text-[#849495] uppercase mb-3">Technologies Employed</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#1c1b1b] border border-white/10 text-xs font-mono text-[#dbfcff]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CODE SNIPPET */}
          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#00dbe9]">
                  {project.codeSnippet.title} ({project.codeSnippet.language})
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-[#e5e2e1] flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-[#00dbe9]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-[#080808] border border-white/10 text-xs font-mono text-[#dbfcff] overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#131313]/90 flex items-center justify-between">
          <span className="text-xs font-mono text-[#849495]">
            Laboratory-Grade Precision // Anshika Rana
          </span>
          <button
            onClick={onClose}
            className="primary-btn px-5 py-2 rounded-xl text-xs font-medium cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
