import "./Skills.css";
import 'boxicons';
import 'boxicons/css/boxicons.min.css';


const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="skills-left" id="skills">
          <h1 className="heading">Technical Skills</h1>
          <div className="technical-bars">
            <div className="bar">
              <i style={{color: "#c95d2e"}} className="bx bxl-html5"></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{color: "#147bbc"}} className="bx bxl-css3"></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{color:"#b0bc1e"}} className="bx bxl-javascript"></i>
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="progress-line javascript">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{color: "#69bcbc"}} className="bx bxl-react"></i>
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{color: "#7952b3"}} className="bx bxl-bootstrap"></i>
              <div className="info">
                <span>Bootstrap</span>
              </div>
              <div className="progress-line bootstrap">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{color: "#38BDF8"}} className="bx bxl-tailwind-css"></i>
              <div className="info">
                <span>Tailwind.css</span>
              </div>
              <div className="progress-line tailwind">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-right">
          <h1 className="heading">Professional skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox=" 0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">90%</div>
              <div className="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox=" 0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">75%</div>
              <div className="text">Communicaton</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox=" 0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">75%</div>
              <div className="text">Problem Solving</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox=" 0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">85%</div>
              <div className="text">Teamwork</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
