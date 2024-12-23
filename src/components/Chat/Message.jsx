import React from 'react';
import { User, Bot } from 'lucide-react';

const Message = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[80%]`}>
        {/* Avatar */}
        <div className={`flex items-start ${isUser ? 'ml-2' : 'mr-2'}`}>
          <div className={`p-2 rounded-full ${isUser ? 'bg-blue-100' : 'bg-gray-100'}`}>
            {isUser ? (
              <User className="w-5 h-5 text-blue-600" />
            ) : (
              <Bot className="w-5 h-5 text-gray-600" />
            )}
          </div>
        </div>

        {/* Message Bubble */}
        <div
          className={`px-4 py-2 rounded-lg ${
            isUser 
              ? 'bg-blue-500 text-white rounded-br-none' 
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;