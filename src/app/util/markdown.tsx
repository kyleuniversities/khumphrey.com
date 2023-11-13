import { ifThen } from '../../common/util/conditional';

const TEXT_BREAK_LENGTH = 26;

/**
 * Utility class for reformatting card markdown links on mobile
 */
export class CardMarkdownReformatter {
  // Instance Fields
  private text: string;
  private lines: string[];
  private reformattedLines: string[];
  private line: string;
  private isLink: boolean;

  /**
   * New Instance Method
   */
  public static newInstance(): CardMarkdownReformatter {
    return new CardMarkdownReformatter();
  }

  /**
   * Constructor Method
   */
  private constructor() {
    this.text = '';
    this.lines = [];
    this.reformattedLines = [];
    this.line = '';
    this.isLink = false;
  }

  /**
   * Main Instance Method
   */
  public reformat(text: string): string {
    this.reset(text);
    this.forEachLine((line: string) => {
      this.resetLine(line);
      this.checkIfIsLink();
      ifThen(this.isLink, () => this.processLinkLine());
      ifThen(!this.isLink, () => this.processNonLinkLine());
    });
    console.log('\n\n\n');
    return this.reformattedLines.join('\n'); //text; // reformattedLines.join('\n');
  }

  /**
   * Major Methods
   */
  private checkIfIsLink(): void {
    let isLink =
      this.line.length > 1 &&
      this.line.charAt(0) === '[' &&
      this.line.charAt(this.line.length - 2) === ')';
    this.isLink = isLink;
    console.log(this.isLink);
    console.log(' ' + this.line.length);
    console.log(' ' + this.line.charAt(0));
    console.log(' ' + this.line.charAt(this.line.length - 1));
  }

  private processLinkLine(): void {
    const restIndex = this.line.indexOf(']');
    const rest = this.line.substring(restIndex);
    const firstText = this.line.substring(0, restIndex);
    const linkLines = [];
    for (let i = 0; i < firstText.length; i += TEXT_BREAK_LENGTH) {
      const start = i;
      const upTo = start + TEXT_BREAK_LENGTH;
      linkLines.push(firstText.substring(start, upTo));
    }
    this.pushRestText(linkLines, rest);
    this.reformattedLines.push(linkLines.join('-'));
  }

  private processNonLinkLine(): void {
    this.reformattedLines.push(this.line);
  }

  /**
   * Minor Methods
   */
  private pushRestText(linkLines: string[], rest: string): void {
    let lastIndex = linkLines.length - 1;
    let lastLine = linkLines[lastIndex];
    linkLines[lastIndex] = lastLine + rest;
  }

  /**
   * Iteration Methods
   */
  private forEachLine(action: (text: string) => void): void {
    for (let i = 0; i < this.lines.length; i++) {
      console.log('LINE: ' + i);
      action(this.lines[i]);
    }
  }

  /**
   * Initializations Methods
   */
  private resetLine(line: string): void {
    this.line = line;
  }

  private reset(text: string): void {
    this.text = text;
    this.lines = text.split('\n');
    this.reformattedLines = [];
  }
}

/*
public reformat(text: string): string {
    const reformattedLines: string[] = [];
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isLink =
        line.length > 1 &&
        line.charAt(0) == '[' &&
        line.charAt(line.length - 1) == ')';
      if (isLink) {
      }
      if (!isLink) {
      }
    }
    return text; // reformattedLines.join('\n');
  }
**/
