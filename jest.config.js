module.exports = {
  transform: {'\\.(js|jsx)?$': `babel-jest`},
  collectCoverageFrom: [`src/components/**/*.{js, jsx}`],
  moduleFileExtensions: [`js`, `jsx`, `json`, `node`],
  moduleNameMapper: {
    "@pages(.*)$": `<rootDir>/src/components/pages/$1`,
    "@partials(.*)$": `<rootDir>/src/components/partials/$1`,
    "@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "@store(.*)$": `<rootDir>/src/store/$1`,
    "@api(.*)$": `<rootDir>/src/api/$1`,
    "@utils(.*)$": `<rootDir>/src/utils/utils.js`,
    "@constants(.*)$": `<rootDir>/src/utils/constants.js`,
  },
  testPathIgnorePatterns: [`/node_modules/`, `/public/`],
  setupFilesAfterEnv: [`<rootDir>/src/setupTests.js`],
};
