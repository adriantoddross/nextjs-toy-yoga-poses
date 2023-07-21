import nextJest from "next/jest.js";
import type { JestConfigWithTsJest } from "ts-jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const createJestConfig = nextJest({
  // nextJest sets configures Jest for us under the hood
  // https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler
});

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

 // @ts-ignore
export default createJestConfig(jestConfig);
