/**
 * Restructure. ISP
 * separate Send Message from SMSService to implement ISP principle.
 */
export abstract class ISendable {
  abstract sendMessage(): string;
}
