/**
 * Helper class for Mobile support
 */
export class MobileHelper {
  /**
   * Private constructor to prevent instantiation
   */
  private constructor() {}

  /**
   * Gets the aspect ratio of the browser
   */
  public static getAspectRatio(): number {
    return (window.innerWidth * 1.0) / window.innerHeight;
  }

  /**
   * Gets the browser height
   */
  public static getBrowserHeight(): number {
    return window.innerHeight;
  }

  /**
   * Gets the browser width
   */
  public static getBrowserWidth(): number {
    return window.innerWidth;
  }

  /**
   * Checks if a the user is using a big screen
   */
  public static isBigScreen(): boolean {
    return MobileHelper.getAspectRatio() > 0.8;
  }
}
