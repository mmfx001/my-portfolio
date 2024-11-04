import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7546720482:AAHGRX4AsnwmnvLVnwkvVXSl9Jn8jc77Ctw';
    const chatId = '5583276966';

    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `New message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      console.log('Response from Telegram:', response.data);
      setName('');
      setEmail('');
      setMessage('');

      alert('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      alert('Error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="py-20 backdrop-blur-md text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mt-[-41px] mb-10">Contact</h2>
        <form className="space-y-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-xl font-medium mt-[-21px] mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-transparent placeholder:text-gray-100 text-white rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-transparent placeholder:text-gray-100 text-white rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 bg-transparent placeholder:text-gray-100 text-white rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-stone-800 shadow-white text-white px-12 py-3 rounded-full font-semibold hover:bg-stone-900 hover:text-white transition duration-300 mx-auto block mb-[-100px]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
