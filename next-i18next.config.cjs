import path from "path";

const nextI18NextConfig = {
  i18n: {
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
  },
  localePath: path.resolve("./src/shared/locales"),
};

export default nextI18NextConfig;
