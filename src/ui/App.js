// import { DevTools } from './DevTool';
import './App.css';
import QuoteBox from './QuoteBox';

export const App = () => {
  return (
    <div className='vh-100 d-flex align-items-center'>
      <div className='container App mb-5'>
        <QuoteBox id='quote-box' />
        {/* <DevTools /> */}
      </div>
    </div>
  );
};
