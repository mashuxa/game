export default {
  preset: "ts-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["src/**/*.{js,mjs,ts,tsx}", "!src/**/*.d.ts", "!src/**/*.template.ts", "!src/types/*"],
};
