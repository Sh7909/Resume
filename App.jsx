import "./App.css";

function App() {
  const scrollhire = () => {
    window.scrollBy({
      top: 2500,
      left: 0,
      behavior: "smooth",
    });
  };
  const hireme=()=>{
     window.scrollBy({
      top: 1300,
      left: 0,
      behavior: "smooth",
    });
  }
   const showprojects=()=>{
     window.scrollBy({
      top: 2000,
      left: 0,
      behavior: "smooth",
    });
  }
    const showcontact=()=>{
     window.scrollBy({
      top: 2800,
      left: 0,
      behavior: "smooth",
    });
  }
  const showmore=()=>{
    const projectlist=document.querySelector('.projectlist');
    const showmoretxt=document.querySelector('.showmoretxt');
    const showmore=document.querySelector('.showmore');
    const downarrow=document.querySelector('#downarrow');
    const uparrow=document.querySelector('#uparrow');
    const myprojects=document.querySelector('.myprojects');
    showmore.style.top="90%";
    showmoretxt.innerText="Show Less";
    projectlist.style.height="54rem";
    downarrow.style.display="none";
    uparrow.style.display="block";
    myprojects.style.height="66rem";
  }
   const showless=()=>{
    const projectlist=document.querySelector('.projectlist');
    const showmoretxt=document.querySelector('.showmoretxt');
    const showmore=document.querySelector('.showmore');
    const downarrow=document.querySelector('#downarrow');
    const uparrow=document.querySelector('#uparrow');
    const myprojects=document.querySelector('.myprojects');
    showmore.style.top="";
    showmoretxt.innerText="Show more";
    projectlist.style.height="";
    downarrow.style.display="block";
    uparrow.style.display="none";
    myprojects.style.height="";
  }
  return (
    <>
      <section>
        <div className="header">
          <div className="Name">Shubham Gupta</div>
          <div className="Fields">
            <div className="active">Home</div>
            <div className="Projects" onClick={showprojects}>Projects</div>
            <div className="Contact" onClick={showcontact}>Contact</div>
          </div>
          <div className="Hireme" onClick={scrollhire}>
            <div className="txt">HIRE ME</div>
            <div className="material-symbols-outlined container1">
              south_east
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section>
        <div className="container2">
          <div className="container3">
            <div className="container4">
              <div className="txt1">
                <p>FULL-STACK WEB DEVELOPER</p>
              </div>
              <br />
              <br />
              <div className="txt2">
                <p style={{ marginTop: 0 }}>SHUBHAM GUPTA</p>
              </div>
            </div>
            <div className="container5"></div>
          </div>
          <div className="container6">
            <div className="circle1">
              <div className="circle3">
                <div className="circle4">
                  <div className="circle5">
                    <div className="download">
                      <a
                        href="/download/Resume.pdf"
                        download
                        style={{ color: "white" }}
                      >
                        <span className="material-symbols-outlined downloadicon">
                          download
                        </span>
                      </a>
                      <p className="txt3">DOWNLOAD CV</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="circle2">
                <img src="/images/Photo.jpg" alt="pic" className="pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="Aboutsection">
          <div className="About">
            <div className="about1">
              <img src="/images/image.jpg" alt="coding" className="codingimg" />
            </div>
            <div className="about2">
              <div className="about3">
                About me
                <div className="material-symbols-outlined arrow1">
                  south_east
                </div>
              </div>
              <div className="about4">
                <div className="descdiv">
                  <p>
                    Hi,My name is Shubham Gupta.I have completed my Graduation
                    from PIET(Panipat Institue of Engineering and Technology) in
                    2016 with 75%. I have Completed my Full Stack Web
                    Development Course from Skill Academy.
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "6rem",
                    fontWeight: "bold",
                    marginTop: 0,
                    color: "white",
                  }}
                >
                  12
                </p>
                <div className="txt4">Projects Completed</div>

                <div className="projects">
                  <div className="Hireme" onClick={hireme}>
                    <div className="txt">HIRE ME</div>
                    <div className="material-symbols-outlined container1">
                      south_east
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section>
        <div className="Myskills">
          <div className="container7">
            <p
              style={{
                fontSize: "7rem",
                marginTop: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              My Skills
            </p>
            <div className="material-symbols-outlined arrow2">south_east</div>
          </div>
          <div className="showskilllist">
            <hr style={{ width: "36rem", marginLeft: "27rem" }} />
            <br />
            <div className="skills">
              <div className="styling_div">
                <div className="icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "4.1rem", marginLeft: "2.3rem" }}
                  >
                    html
                  </span>
                </div>
              </div>
              <div className="styling_div">
                <div className="icon">
                  <img src="/images/css.png" alt="css image" />
                  <div className="txtstyling">CSS</div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <hr style={{ width: "23rem", marginRight: "21rem" }} />

            <div className="skills">
              <div className="styling_div">
                <div className="icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "4.1rem", marginLeft: "2.3rem" }}
                  >
                    javascript
                  </span>
                </div>
              </div>
              <div className="styling_div">
                <div className="icon">
                  <img src="/images/nodejs.png" alt="nodejs image" />
                  <div className="txtstyling">NodeJS</div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <hr style={{ width: "23rem", marginRight: "21rem" }} />
            <div className="skills">
              <div className="styling_div">
                <div className="icon" style={{ marginLeft: "9rem" }}>
                  <img src="/images/react.png" alt="react image" />
                  <div className="txtstyling">React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="myprojects">
          <div className="txt5">
            <div style={{ marginTop: "1rem", marginLeft: "28rem" }}>
              My Projects
            </div>
            <div className="material-symbols-outlined arrow3">south_east</div>
          </div>
          <br />
          <br />
          <div className="projectlist">
            <ul>
              <li>
                Quiz App{" "}
                <a href="https://github.com/Sh7909/Quiz-App" target="_blank">
                  (https://github.com/Sh7909/Quiz-App)
                </a>
              </li>
              <br />
              <li>
                LinkedIn Page
                <a href="https://github.com/Sh7909/Static-Linkedin-web-page" target="_blank">
                  (https://github.com/Sh7909/Static-Linkedin-web-page)
                </a>
              </li>
              <br />
              <li>
                YouTube Music
                <a href="https://github.com/Sh7909/YouTube-Clone" target="_blank">
                  (https://github.com/Sh7909/YouTube-Clone)
                </a>
              </li>
              <br />
              <li>
                Styles Conference
                <a href="https://github.com/Sh7909/Styles-Conference" target="_blank">
                  (https://github.com/Sh7909/Styles-Conference)
                </a>
              </li>
              <br />
              <li>
                Age Calculator App
                <a href="https://github.com/Sh7909/Age-Calculator-App" target="_blank">
                  (https://github.com/Sh7909/Age-Calculator-App)
                </a>
              </li>
              <br />
              <li>
                TODO List App
                <a href="https://github.com/Sh7909/TODO-List-App" target="_blank">
                  (https://github.com/Sh7909/TODO-List-App)
                </a>
              </li>
               <br />
              <li>
                Drum Kit
                <a href="https://github.com/Sh7909/Drum-Kit" target="_blank">
                  (https://github.com/Sh7909/Drum-Kit)
                </a>
              </li>
               <br />
              <li>
                StopWatch App
                <a href="https://github.com/Sh7909/StopWatch-App" target="_blank">
                  (https://github.com/Sh7909/StopWatch-App)
                </a>
              </li>
               <br />
              <li>
                SignUp Form
                <a href="https://github.com/Sh7909/SignUp-Form" target="_blank">
                  (https://github.com/Sh7909/SignUp-Form)
                </a>
              </li>
              <br />
              <li>
                Digital Clock App
                <a href="https://github.com/Sh7909/Digital-Clock-App" target="_blank">
                  (https://github.com/Sh7909/Digital-Clock-App)
                </a>
              </li>
              <br />
              <li>
                Quora Clone
                <a href="https://github.com/Sh7909/Quora_Clone" target="_blank">
                  (https://github.com/Sh7909/Quora_Clone)
                </a>
              </li>
               <br />
              <li>
               Capstone Project
                <a href="https://github.com/Sh7909/Capstone_Project" target="_blank">
                  (https://github.com/Sh7909/Capstone_Project)
                </a>
              </li>
              <div className="showmore" >
                <div className="txt6">
                  <p className="showmoretxt" onClick={showmore}>
                    Show more
                  </p>
                  <span className="material-symbols-outlined" id="downarrow" onClick={showmore}>
                    keyboard_arrow_down
                  </span>
                   <span className="material-symbols-outlined" id="uparrow" onClick={showless}>
                    keyboard_arrow_up
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </section>

      <section>
        <div className="container8">
          <div className="txt5" style={{marginTop:0}}>
            <div style={{ marginLeft: "13rem",marginTop:"2rem" }}>
              Hire me
            </div>
          </div>
          <div style={{fontSize:"3rem",fontFamily:"sans-serif",marginTop:"2rem",marginLeft:"13rem"}}>
              Services
            </div>
            <div style={{display:"flex"}}>
            <div className="box1">
            <div className="box2">
              <p>Website Development</p>
            </div>
              </div>

              <div className="box1">
            <div className="box2">
              <p>Frontend Development</p>
            </div>
              </div>

              <div className="box1">
            <div className="box2">
              <p>Backend Development</p>
            </div>
              </div>
            </div>
            <br />
            <div style={{fontSize:"3rem",fontFamily:"sans-serif",marginTop:"2rem",marginLeft:"13rem"}}>
              Budget in USD
            </div>
            <div style={{display:"flex"}}>
            <div className="box1">
            <div className="box2" style={{marginTop:"1.5rem"}}>
              <p>300$-400$</p>
            </div>
              </div>
              </div>
              <div style={{fontSize:"3rem",fontFamily:"sans-serif",marginTop:"2rem",marginLeft:"13rem"}}>
              Personal Details
            </div>
            <br />
            <div className="details">
              <div>First Name:</div>
              <div>Shubham</div>
            </div>
            <br />
            <div className="details" style={{width:"69rem"}}>
              <div>Last Name:</div>
              <div>Gupta</div>
            </div>
<br />
            <div className="details">
              <div>Email:</div>
              <div>shubhamgupta.4568@gmail.com</div>
            </div>
            <br />
            <div className="details">
              <div>Contact:</div>
              <div>+91-8307280275</div>
            </div>
                        <br />

        </div>
      </section>
    </>
  );
}
export default App;
