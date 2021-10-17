/**
 * Restructure. ISP
 * separate Print Message from SMSService to implement ISP principle.
 */
export abstract class IPrintable {
  abstract printMessage(): void;
}
