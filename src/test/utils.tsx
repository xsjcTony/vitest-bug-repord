import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach } from 'vitest';
import type { RenderOptions } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';


afterEach(() => void cleanup());


// wrap provider(s) here if needed (NEEDED FOR ALL TESTS)
const AllProviders = ({ children }: PropsWithChildren): JSX.Element => <>{children}</>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: AllProviders, ...options })
});


export {
  customRender as render,
};
