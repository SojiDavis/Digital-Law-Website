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
      lowercase.includes("education") ||
      lowercase.includes("studies") ||
      lowercase.includes("school")
    ) {
      this.actionProvider.education();
    } else if (lowercase.includes("legislation") || lowercase.includes("act")) {
      this.actionProvider.act();
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
