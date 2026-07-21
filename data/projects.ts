export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  stack: string[];
  // TODO: point these at the exact repo for each project once they're public
  repoUrl: string;
  demoUrl?: string;
  metric: { label: string; value: string };
};

export const projects: Project[] = [
  {
    id: "blog-generation-service",
    title: "Blog Generation Service",
    tagline: "FastAPI Backend",
    description:
      "A modular FastAPI backend with dual pipelines — topic-to-content and multilingual routing.",
    points: [
      "Generates 600–800-word content in under 3 seconds.",
      "Pydantic validation and end-to-end tracing for 100% API observability, reflecting production-grade practices.",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "LangGraph", "LangChain", "Groq API", "LangSmith"],
    repoUrl: "https://github.com/khushaan18/agentic-ai-blog-generation",
    metric: { label: "gen time", value: "<3s" },
  },
  {
    id: "multi-service-conversational-system",
    title: "Multi-Service Conversational System",
    tagline: "Agentic Architecture",
    description:
      "A 3-pipeline multi-service architecture with conditional routing and autonomous API integration.",
    points: [
      "Tavily-powered autonomous API integration cut processing time by 70%.",
      "Streamlit UI with streamed responses, reducing latency from minutes to under 30 seconds.",
    ],
    stack: ["Python", "LangGraph", "LangChain", "Groq API", "Tavily", "Streamlit"],
    repoUrl: "https://github.com/khushaan18/Agentic-AI-Chatbot",
    metric: { label: "latency cut", value: "70%" },
  },
  {
    id: "rag-conversational-qa",
    title: "RAG-based Conversational Q&A System",
    tagline: "Retrieval Pipeline",
    description:
      "A dual vector store (FAISS + ChromaDB) retrieval pipeline built for precision at low latency.",
    points: [
      "500+ chunks indexed with 90%+ retrieval precision and sub-800ms responses.",
      "Multi-turn memory and a zero-setup Streamlit UI via LangChain LCEL.",
    ],
    stack: ["Python", "LangChain", "LCEL", "FAISS", "ChromaDB", "Groq API", "Hugging Face Embeddings", "Streamlit"],
    repoUrl: "https://github.com/khushaan18/Conversational-RAG-with-PDF-Upload",
    metric: { label: "precision", value: "90%+" },
  },
];
