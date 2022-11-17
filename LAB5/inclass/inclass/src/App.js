import './App.css';
import Header from './components/header';
import SwipeButtons from './components/SwipeButtons';
// import DatingCards from './components/DatingCard';


function App() {
  return (
    <div className="App">
      <Header/>
      <SwipeButtons></SwipeButtons>
      {/* <DatingCards></DatingCards> */}
    </div>
  );
}

export default App;
