import React, { useState, useRef, useEffect } from 'react';

const questions = [
  "Welcome to Parlor Banquet. We are here to help you.",
  "Please provide your name.",
  "Please provide your phone number.",
  "Please provide your email.",
  "What do you want to require?",
  "What is your group size?",
  "We have 3 venues for you. Can you visit the property?",
  "Thank you! We've saved your request and will get back to you soon."
];

const Chatbot = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [waitingForReply, setWaitingForReply] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [initialMessageSent, setInitialMessageSent] = useState(false);
  const [chatboxClosedManually, setChatboxClosedManually] = useState(false);
  const [error, setError] = useState('');
  const chatboxRef = useRef(null);

  const toggleChatbox = () => {
    setShowChatbox(prev => !prev);
    setChatboxClosedManually(!showChatbox);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let valid = true;
    let errorMessage = '';

    // Validate input based on the current question index
    if (questionIndex === 2) {
      if (!/^\d{8,15}$/.test(inputValue.trim())) {
        valid = false;
        errorMessage = 'Please enter a valid phone number (8 to 15 digits).';
      }
    } else if (questionIndex === 3) {
      if (!inputValue.includes('@')) {
        valid = false;
        errorMessage = 'Please enter a valid email.';
      }
    }

    if (!valid) {
      setError(errorMessage);
      return;
    }

    setError('');

    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    const newMessage = { 
      text: inputValue, 
      time, 
      type: 'sent' 
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    setWaitingForReply(false);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsChatEnded(true);
      processChatHistory();
    }
  };

  useEffect(() => {
    if (showChatbox && !initialMessageSent) {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
      setMessages([{ text: questions[0], time, type: 'received' }]);
      setInitialMessageSent(true);
      setWaitingForReply(true);
    }
  }, [showChatbox, initialMessageSent]);

  useEffect(() => {
    if (showChatbox && !waitingForReply && !isChatEnded && questionIndex > 0) {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
      setMessages(prevMessages => [
        ...prevMessages,
        { text: questions[questionIndex], time, type: 'received' }
      ]);
      setWaitingForReply(true);
    }
  }, [showChatbox, questionIndex, waitingForReply, isChatEnded]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const processChatHistory = () => {
    // Process chat data here
  };

  return (
    <div className="chatbox-wrapper">
      {showChatbox && (
        <div className="chatbox-message-wrapper">
          <div className="chatbox-message-header">
            <div className="chatbox-message-profile">
              <img 
                src="/assets/images/chat.png" 
                alt="Profile" 
                className="chatbox-message-image"
              />
              <div>
                <h5 className="chatbox-message-name">Parlor Banquet</h5>
                <p className="chatbox-message-status">Expert Help for Your Event Needs</p>
              </div>
            </div>
          </div>
          <div className="chatbox-message-content" ref={chatboxRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chatbox-message-item ${msg.type}`}>
                <span className="chatbox-message-item-text">{msg.text}</span>
                <span className="chatbox-message-item-time">{msg.time}</span>
              </div>
            ))}
            {error && (
              <div className="chatbox-message-item received">
                <span className="chatbox-message-item-text">{error}</span>
              </div>
            )}
          </div>
          <div className="chatbox-message-bottom">
            <form className="chatbox-message-form" onSubmit={handleSubmit}>
              {questionIndex === 2 && (
                <input 
                  type="tel" 
                  placeholder="Enter phone number" 
                  value={inputValue}
                  onChange={handleInputChange}
                  maxLength="15"
                />
              )}
              {questionIndex !== 2 && (
                <textarea 
                  rows="1" 
                  placeholder="Type message..." 
                  className="chatbox-message-input"
                  value={inputValue}
                  onChange={handleInputChange}
                  disabled={isChatEnded}
                ></textarea>
              )}
              <button type="submit" className="chatbox-message-submit" disabled={isChatEnded}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="chatbox-toggle" onClick={toggleChatbox}>
        <i className={`fas ${showChatbox ? 'fa-times' : 'fa-comments'}`}></i>
      </div>
    </div>
  );
};

export default Chatbot;
