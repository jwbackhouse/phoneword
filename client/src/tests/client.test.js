import React from 'react';
import { rest } from 'msw';
import store from '../store/store.js';
import { setWords, setWordsError } from '../actions/words.js';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from './test-utils.js';
import '@testing-library/jest-dom/extend-expect';
import Converter from '../components/Converter.js';


// Basic Redux functionality testing
describe('Basic Redux internals testing', () => {
  // Include Thunk here for future-proofing
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };

  const create = () => {
    store.getState = jest.fn(() => ({}));
    store.dispatch = jest.fn();

    const next = jest.fn();

    const invoke = action => thunk(store)(next)(action);

    return { store, next, invoke };
  };

  test('Should pass through a non-function action', () => {
    const { next, invoke } = create();
    const action = { type: 'SET_WORDS' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action)
  });

  test('Should generate SET_WORDS action object', () => {
    const result = ['de', 'df', 'dg'];
    const expectedObj = {
      type: 'SET_WORDS',
      payload: ['de', 'df', 'dg']
    };
    expect(setWords(result)).toEqual(expectedObj);
  });

  test('Should generate SET_WORDS_ERROR action object', () => {
    const expectedObj = { type: 'SET_WORDS_ERROR' };
    expect(setWordsError()).toEqual(expectedObj);
  });
});

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

  test('Should clear input field on input submission', async() => {
    render(
      <Converter />, {
        initialState: { words: { data: [] } }
      }
    );
    const input = screen.getByTestId('number-input');
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');

    fireEvent.click(screen.getByTestId('submit'));
    await setTimeout(() => {}, 500);
    expect(input.value).toBe('');
  });
});
