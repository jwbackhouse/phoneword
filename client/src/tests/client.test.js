import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from './test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import Converter from '../components/Converter.js';

describe('Default empty state', () => {
  let input;
  beforeEach(() => {
    render(
      <Converter />, {
        initialState: { words: { data: [] } }
      }
    );
    input = screen.getByTestId('number-input');
  });

  test('Should render default with no words showing', async() => {
    expect(screen.queryByTestId('wordEl')).not.toBeInTheDocument();
  });

  test('Should update input field when numbers clicked', () => {
    fireEvent.click(screen.getByTestId('2'));
    fireEvent.click(screen.getByTestId('5'));
    expect(input.value).toBe('25');
  });

  test('Should only allows numbers to be inputted', () => {
    fireEvent.change(input, { target: { value: 'a!,K#' } });
    expect(input.value).toBe('');
  });

  test('Should delete last number', () => {
    fireEvent.change(input, { target: { value: '567' } });
    expect(input.value).toBe('567')

    fireEvent.click(screen.getByTestId('del'));
    expect(input.value).toBe('56');
  });
});

describe('Words present in state', () => {
  test('Should render existing words in Redux store', async() => {
    const words = { data: ['de', 'df', 'dg'] };
    render(
      <Converter />, {
        initialState: { words }
      }
    );
    const allWordEls = screen.getAllByTestId('wordEl');

    expect(screen.queryByText(words.data[0])).toBeInTheDocument();
    expect(allWordEls.length).toBe(3);
  });
});


describe('Test with mock server requests', () => {
  // Server call mocked
  const server = setupServer(
    rest.get('/convert/23', (req, res, ctx) => {
      return res(ctx.json({ data: [] }));
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Should clear input field on form submission', async() => {
    const onSubmit = jest.fn();
    render(
      <Converter onSubmit={onSubmit} />, {
        initialState: { words: { data: [] } }
      }
    );
    const input = screen.getByTestId('number-input');
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');

    await setTimeout(() => {}, 500);
    fireEvent.click(screen.getByTestId('submit'));
    expect(input.value).toBe('');
  });
})