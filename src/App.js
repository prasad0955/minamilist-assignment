import { useState } from 'react';
import './App.css';

function App() {
  const [popup, setPopup] = useState(false);
  const closePopup = () => {
    setPopup(false);
  }

  const showPopup = () => {
    setPopup(true);
  }
  return (
    popup ? 
    (
      <div>
        <div className="close-button-container">
          <button onClick={closePopup} className="close-btn">close</button>
        </div>
        <img src=".\images\popup-image.png" alt="" className="popup-image" />
      </div>
    ) : (
    <div className="container">
      <div className="header-container">
        <img src=".\images\Frame1.png" alt="sd" className="img-header" />
        <div className="header-background-container">
          <h1 class="header-text-container">The choice is yours. <br/>Because they don’t have one</h1>
          <button className="quick-btn-element">QUICK VIEW</button>
        </div>
      </div>
      <div className="body-section-container">
        <div className="about-heading-container">
          <img src=".\images\border-design.png" alt="" className="border-design"/>
          <h1 className="about-heading">About</h1>
          <img src=".\images\border-design.png" alt="" className="border-design"/>
        </div>
        <div className="about-heading-container">
          <img src=".\images\sparks.png" alt="" className="sparks-img"/>
          <div className="about-para-container">
            <p>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.</p>
            <h4>The choice is yours. Because they don’t have one</h4>
          </div>
          <img src=".\images\sparks.png" alt="" className="sparks-img"/>
        </div>
        <div className="about-heading-container">
          <img src=".\images\border-design.png" alt="" className="border-design"/>
          <h1 className="about-heading">Our Products</h1>
          <img src=".\images\border-design.png" alt="" className="border-design"/>
        </div>
        <div className="products-container">
          <div className="item-container" onClick={showPopup}>
            <img src=".\images\Beej-Patakha.png" alt="" className="item-img"/>
            <div className="bomb-name-container">
              <h4 className="name-heading">Raju Rassibomb</h4>
              <button className="quick-red-btn-element">QUICK VIEW</button>
            </div>
          </div>
          <div className="item-container" onClick={showPopup}>
            <img src=".\images\Beej-Patakha.png" alt="" className="item-img"/>
            <div className="bomb-name-container">
              <h4 className="name-heading">Ladiyon Rani Chaani</h4>
              <button className="quick-red-btn-element">QUICK VIEW</button>
            </div>
          </div>
        </div>
        <img src=".\images\long-border.png" alt="" className="long-border"/>
      </div>
      <div className="footer-container">
        <img src=".\images\yello-border.png" alt="" className="yellow-border" />
        <div className="footer-body-section">
          <img src=".\images\flower.png" alt="" className="flower" />
          <div className="contact-us-container">
            <h2 className="follow-heading">Follow us on</h2>
            <img src=".\images\logos.png" alt="" className="logos" />
          </div>
          <img src=".\images\flower.png" alt="" className="flower" />
        </div>
        <img src=".\images\yello-border.png" alt="" className="yellow-border" />
      </div>
    </div>
    )
  );
}

export default App;
