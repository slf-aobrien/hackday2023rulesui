import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { describe, it} from 'vitest';

import App from './App';

describe('App', () => {
    it('renders App component', () => {
      render(<App />);
  
      screen.debug();
    });
  });