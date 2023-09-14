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
      lowercase.includes("real") ||
      lowercase.includes("estate") ||
      lowercase.includes("devisor") ||
      lowercase.includes("fixture") ||
      lowercase.includes("freehold") ||
      lowercase.includes("mortgager") ||
      lowercase.includes("tenure") ||
      lowercase.includes("fixture") ||
      lowercase.includes("devisee")
    ) {
      this.actionProvider.real();
    } else if (lowercase.includes("legislation") || lowercase.includes("act")) {
      this.actionProvider.act();
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
