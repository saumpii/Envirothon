import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import './video.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40
  }
};
const links = ["https://youtu.be/RSgXcFdHxFI","https://youtu.be/9uVdi-3AqRE","https://youtu.be/imEz-zamAOA", "https://youtu.be/CtMOHzds3F8","https://youtu.be/9yrP1CZN3Ds","https://youtu.be/Hof0Sss2138","https://youtu.be/ADLbFF5G7yk","https://youtu.be/cDUs6BEIZLU","https://youtu.be/1vSCmFEodPU"];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
    partialVisibile ={true}
    deviceType={deviceType}
    itemClass="image-item"
    responsive={responsive}
    showDots={true}
    >
      {links.map(urls=> {
        return (
         
          <div className="player-wrapper">
          <ReactPlayer
            
            url={urls}
            className="react-player"
            width="100%"
            height="100%"
          />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Simple;