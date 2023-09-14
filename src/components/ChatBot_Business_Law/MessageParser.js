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
      lowercase.includes("business") ||
      lowercase.includes("company") ||
      lowercase.includes("adr") ||
      lowercase.includes("antecedent") ||
      lowercase.includes("arbitration") ||
      lowercase.includes("mortgage") ||
      lowercase.includes("conciliatory") ||
      lowercase.includes("director") ||
      lowercase.includes("fixed") ||
      lowercase.includes("licence") ||
      lowercase.includes("partnership") ||
      lowercase.includes("share") ||
      lowercase.includes("administered") ||
      lowercase.includes("counterftraded") ||
      lowercase.includes("contract") ||
      lowercase.includes("dismissal")
    ) {
      this.actionProvider.business();
    } else if (lowercase.includes("Guidence") || lowercase.includes("form")) {
      this.actionProvider.form();
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
    } else {
      this.actionProvider.rephrase();
    }
  }
}

export default MessageParser;
