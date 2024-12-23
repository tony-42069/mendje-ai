import React, { useState } from 'react';
import { Send, Brain, Sparkles, Network } from 'lucide-react';
import Message from './Message';
import { getAIResponse } from '/src/services/ai.js';
import { translations } from '../../translations/al';

const ChatBox = () => {
  const [messages, setMessages] = useState([{
    text: translations.welcomeMessage,
    isUser: false
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get AI response
      const response = await getAIResponse(input);
      const aiMessage = { text: response, isUser: false };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage = { 
        text: translations.generalError, 
        isUser: false 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Background container with coastline image
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: "url('/images/albania-coast.jpg')",
           backgroundColor: "rgba(0, 0, 0, 0.5)",
           backgroundBlendMode: "overlay"
         }}>
      {/* Centered chat container */}
      <div className="container mx-auto h-screen px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-2xl h-[600px] flex flex-col rounded-xl overflow-hidden bg-black bg-opacity-75 backdrop-blur-sm shadow-2xl">
          {/* Modern Header with Brain Theme */}
          <div className="bg-red-600 text-white px-6 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Brain className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold tracking-wide flex items-center">
                    MendjeAI
                    <Sparkles className="w-5 h-5 ml-2 opacity-75 animate-pulse" />
                  </h1>
                  <p className="text-sm mt-1 opacity-90 font-medium flex items-center">
                    <Network className="w-4 h-4 mr-2 animate-spin-slow" />
                    {translations.appDescription}
                  </p>
                </div>
              </div>
              {/* Neural animation pattern */}
              <div className="opacity-20 hidden md:block">
                <div className="w-16 h-16 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 relative">
  {/* Brain Watermark */}
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
    <Brain className="w-64 h-64 text-white" />
  </div>
  
  {messages.map((msg, idx) => (
    <Message key={idx} message={msg.text} isUser={msg.isUser} />
  ))}
  {isLoading && (
    <div className="flex justify-start">
      <div className="bg-red-600 bg-opacity-20 rounded-lg px-4 py-2">
        <div className="animate-pulse flex space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  )}
</div>

          {/* Input Form */}
          <div className="border-t border-gray-700 bg-gray-800 bg-opacity-50 p-4">
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-4 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={translations.inputPlaceholder}
                  className="flex-1 bg-gray-900 text-white border-2 border-gray-700 rounded-lg 
                           px-4 py-3 focus:outline-none focus:border-red-500 
                           placeholder-gray-400 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg
                           hover:bg-red-700 disabled:bg-gray-600 
                           disabled:cursor-not-allowed transition-all duration-200
                           transform hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;