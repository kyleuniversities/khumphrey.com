/**
 * Helper class for Mobile support
 */
export class MobileHelper {
  /**
   * Private constructor to prevent instantiation
   */
  private constructor() {}

  /**
   * Checks if a the user is using a mobile browser
   */
  public static isMobile(): boolean {
    const widthHeightRatio = (window.innerWidth * 1.0) / window.innerHeight;
    return widthHeightRatio < 0.8;
  }
}
