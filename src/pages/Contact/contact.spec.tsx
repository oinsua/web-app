import {render, screen} from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import Contact from '.';
import { Provider } from 'react-redux';
import { setupStore } from 'app/redux/store';

describe('Contact', () => {

  beforeEach(() => {
    render(
        <Provider store={setupStore()}>
            <Contact />
        </Provider>,
        {wrapper: BrowserRouter}
    )
  });

  test('Contact', () => {
    expect(screen.getByText(/Pepe/)).toBeInTheDocument();
  })

});