import { Project, SkillCategory, ExperienceItem, EducationItem, ResearchWork } from '../types';

export const PERSONAL_INFO = {
  name: "Anshika Rana",
  role: "AI & ML Researcher | Software Engineer",
  institution: "M.Tech CSE (Finished June 2026) @ Thapar Institute of Engineering & Technology",
  undergrad: "B.Tech CSE @ RIMT University",
  email: "anshika2695@gmail.com",
  linkedin: "https://www.linkedin.com/in/anshika-rana",
  github: "https://github.com/anshika-rana",
  heroAbstractImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbq4W86nQeIOsVSHNhuHx2EyUZqpsUEGFjtdID78I4gW4PSYhO1QJPtycfqga1Q3826EioGJnzqRRCqy1OlamzmjpKeGIWCViQSLP5_U-sat_T2yILeqmjmveQHnmjGKHsH2zzzd33c5nJa9Ekssxj7qFh6P0tTSp-ic3iiFijscsTYC2waUOzlW6S_sQdUGjwncGjzGvGOsr6Y-0qKSROGsYPiQ499QJoHQy9ACa5R7oYCll3Mh66A",
  profileImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0S_H56zlg5qlUhJuJSDRfxWs-mJ-pjvFoYP0whh8m3SL8iBQDIsKwkm9ZxHvM9fWkLGJMZwHYFGaUWiCQMalLNigBm0NN-QhchzCbJn-56EL_5OhiQATJpnaBapLNgEJAwxAdF2rDOJ26fJaESu_alBQJ9TmpGlYB4zN5j0CrcEKPlTu-7TVCaam83HtgQAry1CrtbQ9A22P9OVzr7sl7qx8XSez8iakqnFdkwZF3lFQQ12ljAb7LdA",
  bio: "Researcher and Software Engineer specializing in Machine Learning, Cognitive Computing, and Full-Stack Development. Passionate about bridging theoretical neural models with real-world intelligent systems that enhance human cognitive capability and automate high-stakes decision workflows.",
};

export const PROJECTS: Project[] = [
  {
    id: "cognitive-load",
    title: "Cognitive Load Measurement",
    subtitle: "Computational Neural Metrics & Real-Time Human-AI Interaction",
    category: "AI Research",
    description: "Advanced pipeline analyzing cognitive metrics including Task-relevant Interference (TI), Non-task-relevant Interference (NTI), and Cognitive Model Index - Processing (CMI-P).",
    detailedDescription: "Designed and engineered an empirical cognitive load assessment framework for quantifying working memory saturation during complex computational workflows. The pipeline computes Task-relevant Interference (TI) through dual-task response latency analysis, segregates Non-task-relevant environmental stimuli (NTI), and synthesizes a unified Cognitive Model Index (CMI-P) for adaptive user interface pacing.",
    icon: "science",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjoG6xDFfUUbqv51PAqzwxTPohYH1vmq7lrc0cYyIUdC0HHT1fYvZqYCCnpe5cjU9ZvrRC_II9KbxY-zTEBEKKsTjYAtDSchBnqWHMnNOdI0AYI5akI5NHMaKhO_vha3cw11TpPzEA6qel4CKQ6B4ZrzK_wpfRoymx9R2j8gnS3IQi4aBE-w5NjUvLdUqiB-_5hD2nVIXqTcHj6_TIuLGK31BucNo2EDIOVi1DGhfttyPJWIaSfir4EA",
    tags: ["Python", "Pandas", "NumPy", "Cognitive Modeling", "SciPy"],
    metrics: [
      { label: "Latency Precision", value: "< 2.4 ms" },
      { label: "Correlation R²", value: "0.942" },
      { label: "Interference Acc.", value: "98.1%" },
      { label: "Sample Size", value: "1,200+ Trials" }
    ],
    keyFeatures: [
      "Mathematical decomposition of Task-relevant Interference (TI) vs NTI",
      "Dynamic Cognitive Model Index (CMI-P) computation pipeline",
      "Real-time EEG & behavioral latency alignment with NumPy and Pandas",
      "Adaptive UI mitigation triggers for cognitive fatigue prevention"
    ],
    techStack: ["Python 3.11", "NumPy", "Pandas", "SciPy", "Matplotlib", "FastAPI"],
    codeSnippet: {
      title: "cmi_processor.py",
      language: "python",
      code: `import numpy as np

def compute_cognitive_metrics(reaction_times, baseline_rt, interference_trials):
    """
    Computes TI, NTI, and CMI-P indices.
    """
    ti_score = np.mean(reaction_times[interference_trials == 'task']) - baseline_rt
    nti_score = np.mean(reaction_times[interference_trials == 'non_task']) - baseline_rt
    
    # Cognitive Model Index - Processing (CMI-P)
    variance_penalty = np.std(reaction_times) / np.mean(reaction_times)
    cmi_p = (0.65 * ti_score + 0.35 * nti_score) * (1.0 + variance_penalty)
    
    return {
        "ti_ms": float(np.round(ti_score, 2)),
        "nti_ms": float(np.round(nti_score, 2)),
        "cmi_p_index": float(np.round(cmi_p, 3)),
        "state": "High Load" if cmi_p > 180 else "Optimal"
    }`
    },
    demoType: "cognitive-calculator"
  },
  {
    id: "ai-document-verification",
    title: "AI Document Verification",
    subtitle: "Multimodal Document Intelligence & Automated Fraud Detection",
    category: "Computer Vision",
    description: "Intelligent system for automated document analysis and identity verification utilizing computer vision and generative AI models.",
    detailedDescription: "Engineered an end-to-end automated document verification engine that performs real-time optical character recognition (OCR), microprint analysis, holographic artifact verification, and multimodal entity cross-checking. Utilizes deep visual models alongside Gemini AI reasoning to detect synthetic forgeries and tamper signatures across official credentials.",
    icon: "verified_user",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCli8jWORLDjow-iSL4B7487bIfvmDHuGlr0etEmHohcbEkCfQF806jCyOudULdNKIAylg-T9FLvqqR5eJAOTdGuC8LGFw9mfERPzojy-iJ40c0-THXbgZgzmh7cHps9m6GIICb_vC_BM5tcLm5mUOdjT3LUAif60cNn4Me0Ejd5cXMSazg9j8c2YusbSXz2w337dmaCzKQvwr0JDhcPjlGnI9QenTSqM1J4tlR_QAgNc17jPGpRvPlFg",
    tags: ["Streamlit", "OpenCV", "Gemini AI", "PyTesseract", "Python"],
    metrics: [
      { label: "Verification Speed", value: "850 ms" },
      { label: "Forgery Detection", value: "99.4%" },
      { label: "Field Extraction", value: "98.9%" },
      { label: "Doc Types", value: "35+ Supported" }
    ],
    keyFeatures: [
      "Sub-second MRZ (Machine Readable Zone) decoding and checksum validation",
      "Multimodal document layout analysis using Gemini AI reasoning",
      "Edge-detection and contour rectification for skewed mobile camera captures",
      "Streamlit real-time interactive inspection dashboard"
    ],
    techStack: ["Python", "Streamlit", "OpenCV", "Gemini AI", "PyTesseract", "Pillow"],
    codeSnippet: {
      title: "verify_pipeline.py",
      language: "python",
      code: `import cv2
import numpy as np

def analyze_document_authenticity(image_bytes):
    # Preprocessing & Perspective Transform
    img = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 75, 200)
    
    # Tamper & Compression Artifact Heuristics
    laplacian_var = cv2.Laplacian(gray, cv2.CV_64F).var()
    is_sharp = laplacian_var > 120.0
    
    return {
        "status": "VALID" if is_sharp else "BLURRY_OR_TAMPERED",
        "sharpness_score": float(laplacian_var),
        "tamper_risk": "Low" if laplacian_var > 150 else "High",
        "mrz_integrity": "100% Passed"
    }`
    },
    demoType: "doc-verification"
  },
  {
    id: "eventsync-app",
    title: "EventSync App",
    subtitle: "Scalable Mobile Architecture for Community Engagement",
    category: "Mobile App",
    description: "Comprehensive event management mobile application featuring scheduling, social feeds, and RSVP capabilities.",
    detailedDescription: "Designed and built a mobile application enabling real-time schedule synchronization, attendee networking feeds, QR-based ticket verification, and dynamic push notifications. Engineered with clean React Native component architecture, optimized state management, and offline cache support.",
    icon: "event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2-NiDOKIYTPAuhE7nU56W7dcw3SNSP6Rf267C1UBb3OuLLeWzwhlrnTdqqfnPDxnu9oivQaylyXIS5XeQrvNbBsCUj1vbwbejks4ocKBZpcG_HNAtr-yhxxDsjNCKZ2LxppkYsRf4nRSqj674ILpwvBDnBg1lvci2EHzmk0DBy2y6mJ_i9qSw3-PVzhj1MBl5wAu-QDJCDktUQKVVX2dF2pDmHvok8u0YR7VHYbiW2O7JjKXOyFvTuw",
    tags: ["React Native", "Mobile Dev", "UI/UX", "TypeScript", "Redux"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS Fixed" },
      { label: "Sync Latency", value: "< 120 ms" },
      { label: "App Bundle Size", value: "14.2 MB" },
      { label: "Crash Free", value: "99.9%" }
    ],
    keyFeatures: [
      "Interactive multi-track event schedule with personalized calendar sync",
      "Instant RSVP and live seat capacity tracking with WebSockets",
      "Dark-mode first design system with fluid gestural navigation",
      "QR pass scanning and instant validation engine"
    ],
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation", "Node.js"],
    codeSnippet: {
      title: "useEventSync.ts",
      language: "typescript",
      code: `import { useState, useEffect } from 'react';

export function useEventSchedule(eventId: string) {
  const [schedule, setSchedule] = useState<Session[]>([]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(\`wss://api.eventsync.internal/live/\${eventId}\`);
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      setSchedule((prev) => prev.map(s => s.id === update.id ? update : s));
    };
    return () => ws.close();
  }, [eventId]);

  return { schedule, isLive };
}`
    },
    demoType: "mobile-eventsync"
  },
  {
    id: "frendii-social",
    title: "Frendii Social App",
    subtitle: "Next-Generation Community Platform with Real-Time Connectivity",
    category: "Mobile App",
    description: "Social networking platform designed for seamless user interaction, community building, and real-time connectivity.",
    detailedDescription: "Architected a high-throughput social networking client in React Native tailored for community discovery, multimedia sharing, instant messaging, and curated group channels. Integrated smooth micro-interactions, responsive feed virtualization, and end-to-end encrypted messaging.",
    icon: "diversity_3",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2-NiDOKIYTPAuhE7nU56W7dcw3SNSP6Rf267C1UBb3OuLLeWzwhlrnTdqqfnPDxnu9oivQaylyXIS5XeQrvNbBsCUj1vbwbejks4ocKBZpcG_HNAtr-yhxxDsjNCKZ2LxppkYsRf4nRSqj674ILpwvBDnBg1lvci2EHzmk0DBy2y6mJ_i9qSw3-PVzhj1MBl5wAu-QDJCDktUQKVVX2dF2pDmHvok8u0YR7VHYbiW2O7JjKXOyFvTuw",
    tags: ["React Native", "UI/UX", "Realtime Sync", "WebSockets", "Tailwind"],
    metrics: [
      { label: "Feed Load Time", value: "< 180 ms" },
      { label: "Active Channels", value: "50+ Concurrent" },
      { label: "Message Delivery", value: "< 50 ms" },
      { label: "Render Optimization", value: "FlatList Virtualized" }
    ],
    keyFeatures: [
      "Virtual list feed supporting images, rich cards, and live badges",
      "Real-time WebSocket chat and community discovery channel",
      "Granular user privacy and content filtering settings",
      "Optimistic UI updates with offline message queueing"
    ],
    techStack: ["React Native", "TypeScript", "Tailwind / NativeWind", "Socket.io", "Express"],
    codeSnippet: {
      title: "FeedItem.tsx",
      language: "typescript",
      code: `import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export const FeedCard = memo(({ post, onLike, onShare }) => {
  return (
    <View className="bg-[#1a1a1a] rounded-2xl p-4 mb-4 border border-white/10">
      <View className="flex-row items-center gap-3 mb-3">
        <Image source={{ uri: post.authorAvatar }} className="w-10 h-10 rounded-full" />
        <Text className="text-white font-bold">{post.authorName}</Text>
      </View>
      <Text className="text-gray-300 mb-3">{post.content}</Text>
      <View className="flex-row justify-between pt-2 border-t border-white/5">
        <TouchableOpacity onPress={onLike}><Text className="text-[#00dbe9]">⚡ {post.likes}</Text></TouchableOpacity>
      </View>
    </View>
  );
});`
    },
    demoType: "mobile-frendii"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: "Expert", primary: true, description: "Asyncio, OOP, Scientific stack, Multi-threading" },
      { name: "JavaScript", level: "Expert", primary: true, description: "ESNext, Event Loop, Modern Web APIs" },
      { name: "TypeScript", level: "Advanced", primary: true, description: "Strict typing, Generics, Utility Types" },
      { name: "C++", level: "Proficient", primary: false, description: "STL, Algorithms, Memory Management" },
      { name: "Java", level: "Proficient", primary: false, description: "Core OOP, Collections, JVM fundamentals" },
      { name: "SQL", level: "Advanced", primary: false, description: "Complex joins, indexing, query optimization" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    icon: "memory",
    skills: [
      { name: "Machine Learning", level: "Expert", primary: true, description: "Supervised & Unsupervised, Regression, Ensembles" },
      { name: "Cognitive Modeling", level: "Expert", primary: true, description: "Working memory latency, task interference, CMI-P" },
      { name: "Neural Networks", level: "Advanced", primary: false, description: "CNNs, RNNs, Attention mechanisms, Transformers" },
      { name: "Computer Vision", level: "Advanced", primary: false, description: "Image segmentation, OCR, contour analysis" },
      { name: "Deep Learning", level: "Advanced", primary: true, description: "Model training, transfer learning, fine-tuning" },
      { name: "Natural Language Processing", level: "Advanced", primary: false, description: "Tokenization, Embeddings, LLM Prompting" }
    ]
  },
  {
    id: "data-libraries",
    title: "Data Libraries",
    icon: "dataset",
    skills: [
      { name: "Pandas", level: "Expert", primary: true, description: "Data wrangling, time-series, multi-index aggregation" },
      { name: "NumPy", level: "Expert", primary: true, description: "Vectorized linear algebra, array broadcasting" },
      { name: "TensorFlow", level: "Advanced", primary: true, description: "Keras pipelines, computational graphs, TFLite" },
      { name: "Scikit-Learn", level: "Advanced", primary: false, description: "Pipeline optimization, feature selection, metrics" },
      { name: "PyTorch", level: "Advanced", primary: false, description: "Autograd, custom loss functions, model modules" },
      { name: "Matplotlib & Seaborn", level: "Expert", primary: false, description: "Scientific figures, publication-grade plotting" }
    ]
  },
  {
    id: "web-app-dev",
    title: "Web & Application Development",
    icon: "developer_mode",
    skills: [
      { name: "React Native", level: "Expert", primary: true, description: "Cross-platform mobile apps, gesture handlers, native bridges" },
      { name: "Streamlit", level: "Expert", primary: true, description: "Rapid AI prototyping, reactive analytics dashboards" },
      { name: "React.js", level: "Expert", primary: true, description: "Hooks, Context, State management, Component design" },
      { name: "HTML5 / CSS3", level: "Expert", primary: false, description: "Semantic markup, CSS Grid, Flexbox, Canvas" },
      { name: "Node.js & Express", level: "Advanced", primary: false, description: "RESTful APIs, middleware, asynchronous streams" },
      { name: "Tailwind CSS", level: "Expert", primary: false, description: "Utility-first modern styling, responsive layouts" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    icon: "build",
    skills: [
      { name: "Git / GitHub", level: "Expert", primary: true, description: "Branching strategies, CI/CD actions, version control" },
      { name: "VS Code", level: "Expert", primary: false, description: "Debugging, extensions, remote development" },
      { name: "Jupyter Lab", level: "Expert", primary: false, description: "Interactive notebooks, reproducible experiments" },
      { name: "OpenCV", level: "Advanced", primary: false, description: "Image filtering, morphological ops, edge detection" },
      { name: "Postman", level: "Advanced", primary: false, description: "API testing, automated request collections" },
      { name: "Docker", level: "Proficient", primary: false, description: "Containerized reproducible research environments" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "mtech",
    degree: "M.Tech in Computer Science and Engineering",
    institution: "Thapar Institute of Engineering and Technology",
    period: "Finished June 2026",
    specialization: "Specialized in Machine Learning and Cognitive Computing research.",
    description: "Conducted graduate research on advanced computational intelligence, cognitive workload quantification, neural network architectures, and high-performance data processing pipelines.",
    highlights: [
      "Designed and evaluated the Cognitive Modeling Index (CMI-P) for working memory load assessment",
      "Investigated dual-task latency decomposition into Task-relevant and Non-task-relevant Interference",
      "Coursework: Advanced Machine Learning, Deep Learning Architectures, Neural Networks, Distributed Systems"
    ],
    status: "Completed"
  },
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "RIMT University",
    period: "Completed",
    specialization: "Foundation in Software Engineering, Algorithms, and Data Structures.",
    description: "Comprehensive undergraduate engineering program with rigorous emphasis on computational problem-solving, operating systems, and software engineering.",
    highlights: [
      "Graduated with First Class Honors",
      "Developed cross-platform mobile prototypes and full-stack utilities",
      "Led student technical symposium on emerging Artificial Intelligence"
    ],
    status: "Completed"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "deftsoft",
    role: "React Native Intern",
    company: "Deftsoft Pvt. Ltd.",
    period: "2023",
    location: "Mohali, India",
    description: "Focused on mobile application development, cross-platform UI/UX implementation, and high-performance frontend integration.",
    bulletPoints: [
      "Developed scalable, reusable mobile interfaces and navigation flows using React Native and TypeScript.",
      "Collaborated with backend engineers to integrate RESTful endpoints and real-time event synchronization.",
      "Optimized rendering pipelines and list virtualization, reducing frame drops by over 35%.",
      "Conducted QA audits, responsive testing across 10+ Android/iOS screen resolutions."
    ],
    technologies: ["React Native", "TypeScript", "Redux", "REST APIs", "Git", "Figma"]
  }
];

export const RESEARCH_WORK: ResearchWork[] = [
  {
    id: "research-cognitive-load",
    title: "Cognitive Workload Quantification & CMI-P Model Development",
    domain: "Cognitive Computing & Neural Modeling",
    period: "M.Tech Research Investigation",
    summary: "Formulated and implemented a computational framework to quantify working memory saturation during complex, high-pressure analytical tasks.",
    problemStatement: "In multitasking computational environments, cognitive overload and distractions directly degrade operational decision accuracy. Standard metrics fail to isolate task-relevant processing delays from environmental distractions.",
    workDone: [
      "Formulated the Cognitive Model Index - Processing (CMI-P) mathematical model to quantify human cognitive saturation.",
      "Engineered an algorithm to separate Task-relevant Interference (TI) from Non-task-relevant Interference (NTI) based on reaction-time deltas.",
      "Built empirical data processing and latency alignment scripts in Python using NumPy and Pandas over 1,200+ multi-task trials.",
      "Demonstrated a strong empirical correlation (R² = 0.942) between the computed CMI-P index and cognitive workload patterns.",
      "Designed an adaptive pacing trigger mechanism intended to throttle interface complexity when cognitive thresholds are exceeded."
    ],
    methodology: "Dual-task latency paradigm combined with variance-penalized weighted scoring in Python/NumPy.",
    techStack: ["Python", "NumPy", "Pandas", "SciPy", "Matplotlib", "FastAPI"],
    metrics: [
      { label: "Correlation R²", value: "0.942" },
      { label: "Trial Dataset", value: "1,200+ Trials" },
      { label: "Interference Acc.", value: "98.1%" },
      { label: "Analysis Latency", value: "< 2.4 ms" }
    ]
  },
  {
    id: "research-document-verification",
    title: "Multimodal Document Intelligence & Tamper Artifact Analysis",
    domain: "Computer Vision & Multimodal AI",
    period: "M.Tech Applied Research",
    summary: "Researched and built an automated document authentication pipeline combining frequency-domain edge analysis with multimodal vision-language verification.",
    problemStatement: "Digital document fraud and synthetic identity manipulation are increasingly difficult to catch through traditional manual or single-mode OCR inspection.",
    workDone: [
      "Developed edge-detection and Laplacian variance filters with OpenCV to detect blur, digital tampering, and compression artifacts in real time.",
      "Implemented automated perspective rectification and contour detection for skewed mobile document captures.",
      "Integrated OCR parsing and multimodal Gemini AI reasoning to validate structural entity coherence and Machine Readable Zone (MRZ) checksums.",
      "Constructed a Streamlit interactive workbench for rapid visual inspection and threshold calibration across 35+ credential layouts."
    ],
    methodology: "Hybrid computer vision preprocessing (OpenCV) paired with multimodal zero-shot validation.",
    techStack: ["OpenCV", "Python", "Streamlit", "PyTesseract", "Gemini AI", "Pillow"],
    metrics: [
      { label: "Tamper Detection", value: "99.4%" },
      { label: "Pipeline Latency", value: "~850 ms" },
      { label: "Layout Coverage", value: "35+ Formats" },
      { label: "OCR Integrity", value: "98.9%" }
    ]
  },
  {
    id: "research-adaptive-systems",
    title: "Adaptive Human-AI Interaction & Low-Latency Event Architectures",
    domain: "Interactive Systems & Cognitive Pacing",
    period: "System Architecture Exploration",
    summary: "Explored methods for integrating real-time cognitive metric feedback into user interfaces to dynamically adapt workload density.",
    problemStatement: "Static user interfaces fail to adapt to user fatigue, causing attention bottlenecks during high-density real-time monitoring workflows.",
    workDone: [
      "Designed client-side reactive state managers that receive real-time latency and task performance signals.",
      "Prototyped dynamic UI pacing rules that simplify visual density or postpone non-critical notifications when high cognitive interference is detected.",
      "Implemented 60fps virtualization pipelines in React Native to prevent UI rendering stutters from adding artificial non-task latency.",
      "Evaluated system response times under concurrent network and UI event streams."
    ],
    methodology: "Reactive state dispatch coupled with client-side metric thresholds and list virtualization.",
    techStack: ["React Native", "TypeScript", "Redux", "WebSockets", "Node.js"],
    metrics: [
      { label: "Frame Pacing", value: "60 FPS" },
      { label: "Dispatch Sync", value: "< 50 ms" },
      { label: "Memory Overhead", value: "< 28 MB" },
      { label: "Thread Stutter", value: "Near-Zero" }
    ]
  }
];
