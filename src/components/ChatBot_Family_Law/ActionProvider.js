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
      <a
        href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/462915/guide-to-family-law-courts.pdf"
        style={{ color: "white" }}
      >
        Click Here to find more details about Family court
      </a>
    );
    this.addMessageToState(message);
  };
  child = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.gov.uk/government/publications/guide-for-separated-parents-children-and-the-family-courts-cb7/guide-for-separated-parents-children-and-the-family-courts-cb7"
        style={{ color: "white" }}
      >
        click here to find More details about seperated parental Guid
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
