import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, debug };
