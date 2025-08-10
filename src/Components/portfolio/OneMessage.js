// components/MessageDisplay.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('/data.json'); // from public folder
        setMessages(res.data);
      } catch (err) {
        console.error('Failed to fetch messages:', err);
      }
    };

    fetchMessages();
  }, []);

  const handleNextMessage = () => {
    if (currentIndex < messages.length) {
      setCurrentMessage(messages[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Message Viewer</h2>

      {currentMessage ? (
        <div className="mb-4 p-3 border rounded shadow">
          <p>{currentMessage.message}</p>
        </div>
      ) : (
        <p className="mb-4 text-gray-500">Click the button to see messages</p>
      )}

      <button
        onClick={handleNextMessage}
        // disabled={currentIndex >= messages.length}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Show Next Message
      </button>

      {/* {currentIndex >= messages.length && (
        <p className="mt-3 text-green-600">No more messages!</p>
      )} */}
    </div>
  );
};

export default MessageDisplay;
