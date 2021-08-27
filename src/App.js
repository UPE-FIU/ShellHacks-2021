import InfoPanel from './Components/InfoPanel/infoPanel'
import ImagePanel from './Components/ImagePanel/imagePanel'
import SponsorPanel from './Components/SponsorPanel/sponsorPanel';
import PartnerPanel from './Components/PartnerPanel/partnerPanel';
import OrganizerPanel from './Components/OrganizerPanel/organizerPanel';
import FAQPanel from './Components/FAQPanel/FAQPanel';
import SchedulePanel from './Components/SchedulePanel/schedulePanel';
import './App.css';
import AboutPanel from './Components/AboutPanel/aboutPanel';
import CoHostPanel from './Components/CoHostPanel/coHostPanel';


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
      <section className="infoSection">
        {/* <SchedulePanel /> */}
          <SponsorPanel />
        {/* <PartnerPanel /> */}
      </section>
    </div>
  );
}

export default App;
