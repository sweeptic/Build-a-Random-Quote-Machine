import React from 'react';

const QuoteBox = () => {
  return (
    <div id='quote-box' className='col-sm-6 my-5'>
      <h1 className='mb-5'>Quote generator</h1>

      <div className='card'>
        <span className='card-header' id='author'>
          author
        </span>

        <div className='card-body'>
          <p className='card-text' id='text'>
            text
          </p>
          <button className='btn btn-primary m-2' id='new-quote'>
            new quote
          </button>
          <a
            className='btn btn-secondary m-2'
            href='https://twitter.com/intent/tweet'
            id='tweet-quote'
          >
            tweet quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
