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
   * Checks if a the user is using a big screen
   */
  public static isBigScreen(): boolean {
    return MobileHelper.getAspectRatio() > 0.8;
  }
}
