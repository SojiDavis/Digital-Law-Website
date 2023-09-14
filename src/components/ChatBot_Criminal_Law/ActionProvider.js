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

  criminal = () => {
    const message = this.createChatBotMessage(
      <a
        href=" courthttps://www.gov.uk/browse/justice#:~:text=Crime%2C%20justice%20and%20the%20law%20%2D%20GOV.UK"
        style={{ color: "white" }}
      >
        Click Here to find more details Criminal Law
      </a>
    );
    this.addMessageToState(message);
  };
  ccrc = () => {
    const message = this.createChatBotMessage(
      <a href="https://ccrc.gov.uk/" style={{ color: "white" }}>
        Click Here to find more details about Criminal Cases Review Commission
      </a>
    );
    this.addMessageToState(message);
  };
  act = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.legislation.gov.uk/ukpga/1967/58/contents"
        style={{ color: "white" }}
      >
        Click Here to find more details about Criminal Cases Review Commission
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
