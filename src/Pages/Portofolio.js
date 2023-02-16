import React from 'react';
import Menu from '../Menu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sac1 from '../sac1.jpg';
import sac2 from '../sac2.jpg';
import sac3 from '../sac3.jpg';
import sac4 from '../sac4.jpg';
import sac5 from '../sac5.jpg';
import sac6 from '../sac6.jpg';
import sac7 from '../sac7.jpg';
import sac8 from '../sac8.jpg';
import sac9 from '../sac9.jpg';
import sac10 from '../sac10.jpg';
const Portofolio = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <Menu/>
            <h1>Portofolio</h1>
            <Carousel responsive={responsive}>
            <div><img src={sac1} className="App-sac1 " alt="sac1" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac2} className="App-sac2 " alt="sac2" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac3} className="App-sac3 " alt="sac3" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac4} className="App-sac4 " alt="sac4" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac5} className="App-sac5 " alt="sac5" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac6} className="App-sac6 " alt="sac6" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac7} className="App-sac7 " alt="sac7" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac8} className="App-sac8 " alt="sac8" height={"300 px"} width={"300 px"}/></div>
            <div><img src={sac9} className="App-sac9 " alt="sac9" height={"300 px"} width={"300 px"} /></div>
            <div><img src={sac10} className="App-sac10 " alt="sac10" height={"300 px"} width={"300 px"} /></div>
        </Carousel>;
        </div>
    );
};

export default Portofolio;