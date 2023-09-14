// import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Legal Assistance",
  initialMessages: [
    createChatBotMessage(
      `Greetings! How can I assist you with your legal inquiry?`
    ),
  ],
};

export default config;
