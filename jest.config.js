module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.stories\\.[tj]sx?$": "@storybook/addon-storyshots/injectFileName",
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  }
};
