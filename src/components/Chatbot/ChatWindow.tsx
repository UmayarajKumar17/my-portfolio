import React, { useState } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm an AI assistant. How can I help you learn more about my portfolio?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);

    // Simulate AI response
    setTimeout(() => {
      const response = "Thanks for your message! I'm a demo chatbot. In the real implementation, this would connect to an AI service to provide meaningful responses about the portfolio.";
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all hover:bg-indigo-700"
      >
        <MessageSquare />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-96 rounded-xl bg-gray-900 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-800 p-4">
            <h3 className="text-lg font-semibold">Portfolio Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} />
            ))}
          </div>

          <div className="border-t border-gray-800 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSend}
                className="rounded-lg bg-indigo-600 p-2 text-white transition-colors hover:bg-indigo-700"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;