export class MobileHelper {
  private constructor() {}

  public static isMobile(): boolean {
    const widthHeightRatio = (window.innerWidth * 1.0) / window.innerHeight;
    return widthHeightRatio < 0.8;
  }
}
