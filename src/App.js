import './App.css';
import Play from './Components/Play';
import Wheel from './Components/Wheel';

// luckywheel animation with Greensock  ---------------------------------

function App() {
  return (
    <div class="container">
      <div class="row">
        <Wheel></Wheel>
      </div>
      <div>
        <Play></Play>
      </div>
    </div>
  );
}

export default App;
