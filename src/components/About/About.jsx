import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={()=> setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3>About</h3>
            <h2>About Me</h2>
            <p>
            A dedicated computer science student with a fervent passion for
            frontend development. What truly excites me about this field is the
            opportunity to blend creativity with technology, crafting immersive
            and intuitive user experiences.
             </p>
             <p> Throughout my academic
            journey, I've delved deep into courses focused on web development
            and UI/UX design, honing my skills in HTML, CSS, JavaScript, and
            popular frontend frameworks like React.js. I've also had the
            privilege to work on various projects, where I've gained hands-on
            experience in translating design concepts into functional and
            visually appealing websites and applications. <br /> Beyond coding,
            I'm driven by the prospect of solving real-world problems and making
            a meaningful impact through my work. As I embark on my journey as a
            frontend developer, my goal is to continue learning, growing, and
            contributing to innovative projects that push the boundaries of web
            technology."
            </p>
        </div>
      
    </div>
  );
}

export default About;
