import './App.css';
import CounterButton from './counterbutton/CounterButton';
import StyledButton from "./styledbutton/StyledButton"
import ComponentA from './cendolincrement/ComponentA';

function App() {
  return (
    <div className="App">
      <CounterButton />
      <ComponentA />
      <StyledButton />
    </div>
  );
}

export default App;
