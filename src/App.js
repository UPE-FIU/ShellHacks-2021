import './App.css';
import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import SponsorPanel from './Components/SponsorPanel/sponsorPanel';
import OrganizerPanel from './Components/OrganizerPanel/organizerPanel';
import FAQPanel from './Components/FAQPanel/FAQPanel';
import AboutPanel from './Components/AboutPanel/aboutPanel';
import CoHostPanel from './Components/CoHostPanel/coHostPanel';
import FooterPanel from './Components/FooterPanel/footerPanel';

function App() {
  return (
    <div>
      <div className="pageHero">
        <InfoPanel />
        <ImagePanel />
        <AboutPanel />
      </div>
      <div className="sandBackground">
        <FAQPanel />
        <OrganizerPanel />
        <CoHostPanel />
      </div>
      <div className="blueBackground">
        <SponsorPanel />
        <FooterPanel />
      </div>
    </div>
  );
}

export default App;
