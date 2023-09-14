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
  act = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.legislation.gov.uk/ukpga/Geo5/15-16/20/contents"
        style={{ color: "white" }}
      >
        Click Here to find more details about Property Act
      </a>
    );
    this.addMessageToState(message);
  };
  real = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.gov.uk/browse/housing-local-services/buying-owning-property"
        style={{ color: "white" }}
      >
        click here to find More details about Real Estate Law
      </a>
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
