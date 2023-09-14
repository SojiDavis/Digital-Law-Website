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
  education = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.gov.uk/government/organisations/department-for-education"
        style={{ color: "white" }}
      >
        Click Here to find more details about education law
      </a>
    );
    this.addMessageToState(message);
  };
  act = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.legislation.gov.uk/ukpga/2011/21"
        style={{ color: "white" }}
      >
        Click Here to find more details about education Act
      </a>
    );
    this.addMessageToState(message);
  };
  rephrase = () => {
    const message = this.createChatBotMessage(
      "Sorry ! I didnt get you.. You can find more details in the practice sections"
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
