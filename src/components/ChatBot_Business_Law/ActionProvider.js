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

  business = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.gov.uk/guidance/business-regulation-guidance-and-tools"
        style={{ color: "white" }}
      >
        Click Here to find more details about Business law
      </a>
    );
    this.addMessageToState(message);
  };
  form = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/31676/11-1399-guide-legal-forms-for-business.pdf"
        style={{ color: "white" }}
      >
        Click Here to find more details about legal forms for business rule
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
