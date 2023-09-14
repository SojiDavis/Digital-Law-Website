class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi ")) {
      this.actionProvider.greet();
    } else if (
      lowercase.includes("bye") ||
      lowercase.includes("Catch you Later") ||
      lowercase.includes("see you")
    ) {
      this.actionProvider.greet_bye();
    } else if (
      lowercase.includes("thank you") ||
      lowercase.includes("thanks")
    ) {
      this.actionProvider.thank();
    } else if (
      lowercase.includes("criminal") ||
      lowercase.includes("abuse") ||
      lowercase.includes("crime") ||
      lowercase.includes("counterfeiting") ||
      lowercase.includes("cyber") ||
      lowercase.includes("cribery") ||
      lowercase.includes("counterfeiting") ||
      lowercase.includes("theft") ||
      lowercase.includes("murder")
    ) {
      this.actionProvider.criminal();
    } else if (
      lowercase.includes("ccrc") ||
      lowercase.includes("commission") ||
      lowercase.includes("criminal cases")
    ) {
      this.actionProvider.ccrc();
    } else if (lowercase.includes("act")) {
      this.actionProvider.act();
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
