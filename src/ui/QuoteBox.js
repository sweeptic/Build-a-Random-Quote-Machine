import { getLoadingState } from './../redux/reducers/ui';
import { getSingleQuoteAuthor, getSingleQuoteText } from './../redux/reducers/quote';
import { useDispatch } from 'react-redux';
import { fetchQuote } from './../redux/actions/quote';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const QuoteBox = () => {
  const quoteText = useSelector(state => getSingleQuoteText(state));
  const quoteAuthor = useSelector(state => getSingleQuoteAuthor(state));
  const spinner = useSelector(state => getLoadingState(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote(''));
  }, [dispatch]);

  let contents;

  if (spinner.loading) {
    contents = (
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  } else {
    contents = '';
  }

  return (
    <div id='quote-box' className='col-sm-6 mx-auto border border-dark rounded mt-5'>
      <div>
        <h1 className=' d-inline'>Random Quote Machine </h1>
        {contents}
      </div>

      <div className='card m-4'>
        <span className='card-header' id='author'>
          {quoteAuthor}
        </span>
        <div className='card-body' style={{ minHeight: '13rem' }}>
          <p className='card-text' id='text'>
            {quoteText}
          </p>
        </div>

        <div className='card-footer'>
          <button
            onClick={() => {
              dispatch(fetchQuote(''));
            }}
            className='btn btn-primary m-2'
            id='new-quote'>
            New quote
          </button>
          <a
            className='btn btn-secondary m-2'
            href='https://twitter.com/intent/tweet'
            target='_blank'
            id='tweet-quote'
            rel='noreferrer'>
            Tweet quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
