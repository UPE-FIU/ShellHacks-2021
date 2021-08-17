import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import SponsorPanel from './Components/SponsorPanel/sponsorPanel';
import MobileImagePanel from './Components/MobileImagePanel/mobileImagePanel';
import PartnerPanel from './Components/PartnerPanel/partnerPanel';
import './App.css';
import OrganizerPanel from './Components/OrganizerPanel/organizerPanel';


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
      <div className="companyInfoContainer">
        <div className="companyInfoPanel">
          <OrganizerPanel />
        </div>
        <div className="companyInfoPanel">
          <SponsorPanel />
        </div>
        {/* <div className="companyInfoPanel">
          <PartnerPanel />
        </div> */}
      </div>
      <div className="mobileImage">
        <MobileImagePanel />
      </div>
    </div>
  );
}

export default App;
