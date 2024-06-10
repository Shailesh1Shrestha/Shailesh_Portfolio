import "./Photography.css"
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo15.jpg";
import photo3 from  "../../assets/photo2.jpg" ;
import photo4 from  "../../assets/photo3.jpg" ;
import photo5 from  "../../assets/photo4.jpg" ;
import photo6 from  "../../assets/photo10.jpg" ;
import photo7 from  "../../assets/photo6.jpg" ;
import photo8 from  "../../assets/photo10.jpg" ;
import photo9 from  "../../assets/photo7.jpg" ;
import photo10 from  "../../assets/photo11.jpg" ;
import photo11 from  "../../assets/photo12.jpg" ;
import photo12 from  "../../assets/photo9.jpg" ;
import photo13 from  "../../assets/photo13.jpg" ;
import photo14 from  "../../assets/photo14.jpg" ;
import photo15 from  "../../assets/photo5.jpg" ;
import photo16 from  "../../assets/photo16.jpg";
import { useEffect } from "react";


const Photography = () => {

    useEffect(()=>{
        document.addEventListener('DOMContentLoaded', function() {
            const dots = document.querySelectorAll('#dots a');
            const images = document.querySelectorAll('#img-boxes img');
        
            dots.forEach(dot => {
                dot.addEventListener('click', function(event) {
                    event.preventDefault();
                    const target = this.getAttribute('href').substring(1);
        
                    images.forEach(img => {
                        if (img.id === target) {
                            img.style.opacity = 1;
                            img.style.zIndex = 5;
                        } else {
                            img.style.opacity = 0;
                            img.style.zIndex = 1;
                        }
                    });
                });
            });
        });
        
    }, [])

  return (

    <>
    <div id="photography">
      
        <div id="wrapper">
          <div id="img-area">
            <img src={photo1} alt="" />
            <div id="img-boxes">
              <img src={photo1} alt="" id="box1" />
              <img src={photo2} alt="" id="box2" />
              <img src={photo3} alt="" id="box3" />
              <img src={photo4} alt="" id="box4" />
              <img src={photo5} alt="" id="box5" />
              <img src={photo6} alt="" id="box6" />
              <img src={photo7} alt="" id="box7" />
              <img src={photo8} alt="" id="box8" />
              <img src={photo9} alt="" id="box9" />
              <img src={photo10} alt="" id="box10" />
              <img src={photo11} alt="" id="box11" />
              <img src={photo12} alt="" id="box12" />
              <img src={photo13} alt="" id="box13" />
              <img src={photo14} alt="" id="box14" />
              <img src={photo15} alt="" id="box15" />
              <img src={photo16} alt="" id="box16" />
            </div>
          </div>
          <div id="dots">
            <a href="#box1">1</a>
            <a href="#box2">2</a>
            <a href="#box3">3</a>
            <a href="#box4">4</a>
            <a href="#box5">5</a>
            <a href="#box6">6</a>
            <a href="#box7">7</a>
            <a href="#box8">8</a>
            <a href="#box9">9</a>
            <a href="#box10">10</a>
            <a href="#box11">11</a>
            <a href="#box12">12</a>
            <a href="#box13">13</a>
            <a href="#box14">14</a>
            <a href="#box15">15</a>
            <a href="#box16">16</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography;
