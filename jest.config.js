module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  }
};
