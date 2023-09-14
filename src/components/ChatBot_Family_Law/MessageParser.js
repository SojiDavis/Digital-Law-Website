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
      lowercase.includes("family") ||
      lowercase.includes("husband") ||
      lowercase.includes("wife") ||
      lowercase.includes("divorce")
    ) {
      this.actionProvider.family();
    } else if (lowercase.includes("child") || lowercase.includes("children")) {
      this.actionProvider.child();
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
