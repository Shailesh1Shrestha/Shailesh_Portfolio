import "./Project.css"
import project1 from "../../assets/Project5.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project4.png";
import project_logo from "../../assets/live.png";

const Project = () => {
  return (
    <div className="projects">
        <div className="project">
            <img src={project1} alt="" />
            <div className="caption">
                <a target="_blank" href="https://shailesh1shrestha.github.io/CollegeWebsite/">
                <img src={project_logo} alt="" />
                <p>College Website</p>
                </a>
            </div>
        </div>
        <div className="project">
            <img src={project2} alt="" />
            <div className="caption">
                <a target="_blank" href="https://shailesh1shrestha.github.io/ShoesShop/">
                <img src={project_logo} alt="" />
                <p>Shoes Shop</p>
                </a>
            </div>
        </div>
        <div className="project">
            <img src={project3} alt="" />
            <div className="caption">
                <a target="_blank" href="https://shailesh1shrestha.github.io/Image-Gallery/">
                <img src={project_logo} alt="" />
                <p>Photos Gallery</p>
                </a>
            </div>
        </div>
      
    </div>
  );
}

export default Project;
