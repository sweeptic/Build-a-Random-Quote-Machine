import {  getSingleQuoteAuthor, getSingleQuoteText } from './../redux/reducers/quote';
import { connect } from 'react-redux';
import { fetchQuote } from './../redux/actions/quote';
import React from 'react';

const QuoteBox = ({fetchQuote, getSingleQuoteText, getSingleQuoteAuthor}) => {

  React.useEffect(() => {
    fetchQuote('');
  }, [fetchQuote]);


  return (
    <div id='quote-box' className='col-sm-6 mx-auto'>

      <h1 className='mb-5'>Quote generator</h1>

      <div className='card'>
        <span className='card-header' id='author'>{getSingleQuoteAuthor}</span>
        <div className='card-body'>
          <p className='card-text' id='text'>{getSingleQuoteText}</p>
          <button onClick={() => { fetchQuote(''); }} className='btn btn-primary m-2' id='new-quote'>new quote</button>
          <a className='btn btn-secondary m-2'  href='https://twitter.com/intent/tweet' target="_blank"  id='tweet-quote'>tweet quote</a>
        </div>
      </div>


    </div>
  );
};

const mapStateToProps = (state) => {
  return { 
    getSingleQuoteText: getSingleQuoteText(state),
    getSingleQuoteAuthor: getSingleQuoteAuthor(state) }
}

export default connect(mapStateToProps, { fetchQuote })(QuoteBox);
