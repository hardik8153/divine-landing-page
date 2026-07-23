// Keeps public assets working when the app is hosted under a subpath (for
// example, https://username.github.io/divine-landing-page/).
export const assetUrl = (fileName) =>
  `${import.meta.env.BASE_URL}assets/${fileName}`;
