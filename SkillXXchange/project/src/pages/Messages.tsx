import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Messages() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const personName = searchParams.get('person') || 'Professional';
  const personSkill = searchParams.get('skill') || 'Skill';

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'other',
      text: 'Hi! I am interested in your services. Can we discuss the details?',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      sender: 'you',
      text: 'Of course! I would be happy to discuss. What skills are you looking to exchange?',
      timestamp: new Date(Date.now() - 1800000),
    },
  ]);

  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'you' as const,
        text: messageInput,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white shadow-lg flex flex-col h-screen">
        <div className="bg-gradient-to-r from-[#00BFA5] to-[#00897B] text-white p-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:opacity-80 transition"
          >
            <ArrowLeft size={24} className="mr-3" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{personName}</h1>
            <p className="text-sm text-gray-200">Offers: {personSkill}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'you' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.sender === 'you'
                    ? 'bg-[#00BFA5] text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="text-sm md:text-base">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.sender === 'you' ? 'text-gray-100' : 'text-gray-600'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#00BFA5] hover:bg-[#00A890] text-white p-3 rounded-lg transition flex-shrink-0"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
