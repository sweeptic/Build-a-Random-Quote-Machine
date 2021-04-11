import { getSingleQuoteAuthor, getSingleQuoteText } from './../redux/reducers/quote';
import { useDispatch } from 'react-redux';
import { fetchQuote } from './../redux/actions/quote';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const QuoteBox = () => {
  const QuoteText = useSelector(state => getSingleQuoteText(state));
  const QuoteAuthor = useSelector(state => getSingleQuoteAuthor(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote(''));
  }, [dispatch]);

  return (
    <div id='quote-box' className='col-sm-6 mx-auto border border-dark rounded mt-5'>
      <h1 className='mb-5'>Quote generator</h1>

      <div className='card'>
        <span className='card-header' id='author'>
          {QuoteAuthor}
        </span>
        <div className='card-body'>
          <p className='card-text' id='text'>
            {QuoteText}
          </p>
          <button
            onClick={() => {
              dispatch(fetchQuote(''));
            }}
            className='btn btn-primary m-2'
            id='new-quote'>
            new quote
          </button>
          <a
            className='btn btn-secondary m-2'
            href='https://twitter.com/intent/tweet'
            target='_blank'
            id='tweet-quote'
            rel='noreferrer'>
            tweet quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
