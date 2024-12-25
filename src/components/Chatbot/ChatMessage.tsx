import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`flex items-start gap-2 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20">
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`max-w-[80%] rounded-xl ${isBot ? 'bg-gray-800' : 'bg-indigo-500/20'} p-3`}>
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;