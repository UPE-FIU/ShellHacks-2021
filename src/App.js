import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import SponsorPanel from './Components/SponsorPanel/sponsorPanel';
import MobileImagePanel from './Components/MobileImagePanel/mobileImagePanel';
import PartnerPanel from './Components/PartnerPanel/partnerPanel';
import './App.css';


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
      <div className="sponsor">
        <SponsorPanel />
      </div>
      <div className="partner">
        <PartnerPanel />
      </div>
      <div className="mobileImage">
        <MobileImagePanel />
      </div>
    </div>
  );
}

export default App;
