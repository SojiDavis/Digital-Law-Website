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
      lowercase.includes("accident") ||
      lowercase.includes("injury") ||
      lowercase.includes("slips") ||
      lowercase.includes("trips") ||
      lowercase.includes("falls")
    ) {
      this.actionProvider.injury();
    } else if (lowercase.includes("compensation")) {
      this.actionProvider.compensation();
    } else if (lowercase.includes("claim")) {
      this.actionProvider.claim();
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
