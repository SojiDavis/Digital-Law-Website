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
  injury = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority"
        style={{ color: "white" }}
      >
        Click Here to find more details
      </a>
    );
    this.addMessageToState(message);
  };
  compensation = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://www.lawcom.gov.uk/project/personal-injury-compensation/"
        style={{ color: "white" }}
      >
        click here to find More details about compensation
      </a>
    );
    this.addMessageToState(message);
  };
  claim = () => {
    const message = this.createChatBotMessage(
      <a
        href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1054619/5-steps-using-online-official-injury-claim-service.pdf"
        style={{ color: "white" }}
      >
        click here to find More details about claim
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
