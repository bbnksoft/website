// Chatbot.tsx
import React, { useCallback, useEffect, useRef, useState, memo } from "react";
import "./Chatbot.css";

type Sender = "user" | "bot";

type Message = {
  id: number;
  sender: Sender;
  text: string;
  time: string;
};

/* ================================
   BOT LOGIC (REALISTIC RESPONSES)
================================ */
const generateBotReply = (input: string): string => {
  const msg = input.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hello 👋 Welcome to VertixSoft Tech. How can I help you today?";
  }

  if (msg.includes("service")) {
    return "We provide mobile app development, web applications, UI/UX design, and ongoing support. Which service are you looking for?";
  }

  if (msg.includes("portfolio") || msg.includes("work")) {
    return "We’ve delivered products across navigation, weather platforms, and business apps. Would you like to build something similar?";
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("budget")) {
    return "Pricing depends on features, timeline, and platform. Share a brief idea and I’ll guide you on the best approach.";
  }

  if (msg.includes("contact") || msg.includes("email")) {
    return "You can reach us through the contact form below or email us at info@vertixsofttech.com. Our team usually responds within 24 hours.";
  }

  return "Thanks for the details 👍 Would you like me to connect you with our team through the contact form?";
};

/* ================================
   INITIAL MESSAGE
================================ */
const initialMessage: Message = {
  id: 1,
  sender: "bot",
  text: "Hi, I’m VertiBot 🤖 — your project assistant. Ask me about our services, pricing, or how we work.",
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  /* Initial bot greeting */
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([initialMessage]);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  /* Auto scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = useCallback(() => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: generateBotReply(userMsg.text),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 800);
  }, [input]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open chat"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div>
              <div className="chatbot-title">VertixSoft Tech Assistant</div>
              <div className="chatbot-subtitle">Project & Support Chat</div>
            </div>
            <button onClick={() => setOpen(false)} className="chatbot-close">✕</button>
          </div>

          {/* Body */}
          <div className="chatbot-body">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chat-row ${msg.sender === "user" ? "user" : "bot"}`}
              >
                <div className="chat-bubble">
                  <p>{msg.text}</p>
                  <span className="chat-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat-row bot">
                <div className="chat-bubble typing">
                  VertiBot is typing<span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Chatbot);
