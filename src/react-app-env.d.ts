/// <reference types="react-scripts" />
import { expect } from '@jest/globals';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'expect' {
  interface AsymmetricMatchers {}
  interface Matchers<R = void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}
