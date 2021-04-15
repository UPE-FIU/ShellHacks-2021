import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left">
        <InfoPanel />
      </div>
      <div className= "right">
        <ImagePanel />
      </div>
    </div>
  );
}

export default App;
