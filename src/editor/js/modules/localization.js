export class Localization {
  static getUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const shortLang = userLang.split('-')[0];

    return shortLang;
  }
}