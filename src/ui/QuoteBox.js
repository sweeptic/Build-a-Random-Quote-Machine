import React from 'react';

const QuoteBox = () => {
  return (
    <div id='quote-box'>
      <span id='text'>text</span>
      <span id='author'>author</span>
      <button id='new-quote'>new quote</button>

      <a href='https://twitter.com/intent/tweet' id='tweet-quote'>
        tweet quote
      </a>
    </div>
  );
};

export default QuoteBox;
