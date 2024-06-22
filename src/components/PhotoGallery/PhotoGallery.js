import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const photos = [pic1, pic2, pic3];

  const next = () => {
    setCurrent((current) => (current + 1) % photos.length);
  };

  const previous = () => {
    setCurrent((current) => (current - 1 + photos.length) % photos.length);
  };
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div>
      <button className="sliderButtonPrev" onClick={previous}>
        <ArrowBackIosNewIcon />
      </button>
      <img className="slideShowImg" src={photos[current]} />
      <button className="sliderButtonNext" onClick={next}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default PhotoGallery;
