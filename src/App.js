import './App.css';
import image1 from "./media/image1.jpeg";
import image2 from "./media/image2.jpeg";
import image3 from "./media/image3.jpeg";
import image4 from "./media/image4.jpeg";
import image5 from "./media/image5.jpeg";
import IconTwitter from './media/TwitterIcon'
import { compareAsc, format } from 'date-fns'

const setDate=()=>{
  const dates=format(new Date(2014, 1, 11), 'dd.MM.yyyy')
  const hours = new Date().getHours()+':'+new Date().getMinutes()
  return dates+" "+hours
}


function App() {
  return (
    <>
      <div className = "header">
        <div className='logo-search'>
          <div className='logo' style={{marginLeft:'30px', marginTop:"15px"}} >
            <IconTwitter/>
          </div>
          <div className="search"> <input style={{marginLeft:'30px',marginTop:"15px", marginBottom: "15px", borderRadius:"20px", width: "200px", height:"20px"}} /></div>
        </div>
        <div className = "currentDate" style={{marginRight:'30px',}}>
          <p>{setDate()}</p>
        </div>
      </div>

      <div class = "images" >
        <img src= {image1} />
        <img src= {image2} />
        <img src= {image3} />
        <img src= {image4} />
        <img src= {image5} />

        <h3 id="first-txt" class = "image_txt"> HEY</h3>
        <h3 id="second-txt" class = "image_txt"> LET'S</h3>
        <h3 id="third-txt" class = "image_txt"> GIVE</h3>
        <h3 id="fourth-txt" class = "image_txt">ALL</h3>
        <h3 id="fifth-txt" class = "image_txt"> YOU CAN</h3>
        
        
     
      </div>
      
    </>
  );
}

export default App;
