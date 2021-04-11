import { DevTools } from './DevTool';
import './App.css';
import QuoteBox from './QuoteBox';

export const App = () => {
  return (
    <div className='App'>
      <QuoteBox id='quote-box' />
      <DevTools />
    </div>
  );
};
