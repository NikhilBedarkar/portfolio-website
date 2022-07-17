import "./intro.css";
import downloadIcon from "../../img/download.png"


const Intro = () => {

const downloadResume=(e) =>{
  console.log("click");
  e.preventDefault();
  window.open("https://drive.google.com/uc?id=1ACz6GIjqjyLOipwWwU5l3NhiqGOo_5eK&export=download", '_blank', 'noopener,noreferrer');
}

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nikhil Bedarkar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Automation Engineer</div>
            </div>
          </div>
          <p className="i-desc">
            I involved in SDLC from software development to deployment in production using modern tools. 
          </p>
        </div>
        <button id="resume" className="i-resumeBtn" onClick={(e)=>downloadResume(e)} ><img src={downloadIcon} alt="" className="i-icon" />Resume</button>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;