import React, { useState, useRef, useEffect } from 'react';

// Define questions array
const questions = [
  "Welcome to Parlor Banquet! How can we assist you today?",
  "May I have your name, please?",
  "Could you please provide your phone number?",
  "What is your email address?",
  "What type of event are you planning?",
  "How many guests are you expecting?",
  "We have some beautiful venues available. Would you like to schedule a visit?",
  "Thank you! We’ve received your request and will get back to you shortly."
];

const Chatbot = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [waitingForReply, setWaitingForReply] = useState(false);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [initialMessageSent, setInitialMessageSent] = useState(false);
  const [error, setError] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(false); // Add state to disable input
  const chatboxRef = useRef(null);

  const generateTokenNumber = () => {
    // Generate a 4-digit token number
    const token = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    return 'TOKEN-' + token;
  };

  const [tokenNumber] = useState(generateTokenNumber());

  const logInteraction = (type, content) => {
    // // console.log(`[${type}]`, content);
  };

  const updateMessagesAndLog = (newMessage, type) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
    logInteraction(type, newMessage.text);
  };

  const toggleChatbox = () => {
    setShowChatbox(prev => !prev);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const validateInput = (index, value) => {
    if (index === 2 && !/^\d{8,15}$/.test(value.trim())) {
      return 'Please enter a valid phone number.';
    } else if (index === 3 && !/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value.trim())) {
      return 'Please enter a valid email.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateInput(questionIndex, inputValue);
    if (errorMessage) {
      setError(errorMessage);
      scrollToBottom(); // Scroll to make error visible
      return;
    }

    setError('');
    setIsInputDisabled(true); // Disable input after sending

    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    const newMessage = { text: inputValue, time, type: 'sent' };

    updateMessagesAndLog(newMessage, 'User Response');

    const currentQuestion = questions[questionIndex];

    // Prepare data for the API
    const dataToSend = {
      token_number: tokenNumber,
      question: currentQuestion,
      answer: inputValue
    };

    // // console.log('Data being sent to API:', dataToSend);

    // Send the data to the API
    try {
      const response = await fetch('https://www.hum.ujn.mybluehostin.me/new_clinet/parlorapi/chatbot_parlor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      // console.log('API Response:', result);

      if (result.success) {
        // console.log('Data sent successfully.');
      } else {
        // console.error('Failed to send data:', result.message);
      }
    } catch (error) {
      // console.error('Error sending data to the API:', error);
    }

    // Handle moving to the next question
    if (questionIndex < questions.length - 1) {
      const nextQuestionIndex = questionIndex + 1;

      // Show typing indicator and delay before showing the next question
      setWaitingForReply(true); // Show typing indicator

      setTimeout(() => {
        if (nextQuestionIndex < questions.length) {
          const nextQuestion = { text: questions[nextQuestionIndex], time: `${new Date().getHours()}:${new Date().getMinutes()}`, type: 'received' };
          updateMessagesAndLog(nextQuestion, 'Current Question');
          setQuestionIndex(nextQuestionIndex);
        } else {
          setIsChatEnded(true); // Last question answered, chat ends
        }
        setWaitingForReply(false); // Hide typing indicator
        setIsInputDisabled(false); // Re-enable input after bot replies
      }, 1500);
    }

    setInputValue(''); // Clear input immediately after sending
  };

  // Scroll to the bottom of chatbox
  const scrollToBottom = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (showChatbox && !initialMessageSent) {
      if (questionIndex === 0) {
        const initialMessage = { text: questions[0], time: `${new Date().getHours()}:${new Date().getMinutes()}`, type: 'received' };
        updateMessagesAndLog(initialMessage, 'Current Question');
        setInitialMessageSent(true);
      }

      setWaitingForReply(false); // No typing indicator needed for the initial message
    }
  }, [showChatbox, initialMessageSent, questionIndex]);

  // Auto-scroll to the bottom whenever a new message is added, typing indicator is shown, or error is displayed
  useEffect(() => {
    scrollToBottom();
  }, [messages, waitingForReply, error]);

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
            {waitingForReply && (
              <div className="chatbox-message-item received">
                <span className="chatbox-message-item-text">Typing...</span>
              </div>
            )}
            {error && (
              <div className="chatbox-message-item received">
                <span className="chatbox-message-item-text error">{error}</span>
              </div>
            )}
          </div>
          <div className="chatbox-message-bottom">
            <form className="chatbox-message-form" onSubmit={handleSubmit}>
              <textarea 
                rows="1" 
                placeholder="Type message..." 
                className="chatbox-message-input"
                value={inputValue}
                onChange={handleInputChange}
                disabled={isInputDisabled || isChatEnded} // Disable input if waiting for reply or chat ends
              ></textarea>
              <button 
                type="submit" 
                className="chatbox-message-submit"
                disabled={isInputDisabled || isChatEnded} // Disable button if waiting for reply or chat ends
              >
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
