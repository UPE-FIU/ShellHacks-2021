import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import SponsorPanel from './Components/SponsorPanel/sponsorPanel';
import './App.css';
import MobileImagePanel from './Components/MobileImagePanel/mobileImagePanel';

function App() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <InfoPanel />
        </div>
        <div className= "right">
          <ImagePanel />
        </div>
      </div>
      <div className="supporter">
        <SponsorPanel />
      </div>
      <div className="mobileImage">
        <MobileImagePanel />
      </div>
    </div>
  );
}

export default App;
