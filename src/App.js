import backgroundImage from './economiccommitee-background-min.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={backgroundImage} className="background-img" alt="logo" />
          <a
            className="btn"
            href="./Final-Report-to-PLO.pdf"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
