class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    // const { NlpManager } = require("node-nlp");
    const message = this.createChatBotMessage("Hello,How can I help you ?");
    this.addMessageToState(message);
  };

  greet_bye = () => {
    const message = this.createChatBotMessage("See you Soon!");
    this.addMessageToState(message);
  };
  thank = () => {
    const message = this.createChatBotMessage("You Are Welcome");
    this.addMessageToState(message);
  };
  family = () => {
    const message = this.createChatBotMessage(
      "please navigate to family law page from practices for more details"
    );
    this.addMessageToState(message);
  };
  injury = () => {
    const message = this.createChatBotMessage(
      "please navigate to Injury law page from practices for more details"
    );
    this.addMessageToState(message);
  };
  criminal = () => {
    const message = this.createChatBotMessage(
      "please navigate to criminal law page from practices for more details"
    );
    this.addMessageToState(message);
  };
  business = () => {
    const message = this.createChatBotMessage(
      "please navigate to business law page from practices for more details"
    );
    this.addMessageToState(message);
  };
  education = () => {
    const message = this.createChatBotMessage(
      "please navigate to education law page from practices for more details"
    );
    this.addMessageToState(message);
  };
  real = () => {
    const message = this.createChatBotMessage(
      "please navigate to real estate law page from practices for more details more details"
    );
    this.addMessageToState(message);
  };
  rephrase = () => {
    const message = this.createChatBotMessage(
      "Sorry ! I didnt get you..  For additional information, please refer to the practice sections or reach out to us through the contact form on the contact page. "
    );
    this.addMessageToState(message);
  };
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
