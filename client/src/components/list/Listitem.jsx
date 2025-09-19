import "./listitem.scss";
import trailer from "./stare.mp4";
import image from "./listitem.jpg";
import { FaPlay } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Listitem({ index, isHovered, onHover }) {
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    if (isHovered) {
      // Start video immediately when hover begins
      setShowVideo(true);
    } else {
      setShowVideo(false);
    }
  }, [isHovered]);

  return (
    <div
      className={`listitem ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <img 
        src={image} 
        alt="" 
        className={isHovered ? 'fade-out' : 'fade-in'}
      />
      
      {showVideo && (
        <video 
          src={trailer} 
          autoPlay 
          loop 
          muted 
          className={isHovered ? 'fade-in' : 'fade-out'}
        />
      )}
      
      {isHovered && (
        <div className="itemInfo">
          <div className="icons">
            <FaPlay />
            <IoIosAdd />
            <AiOutlineLike />
            <AiOutlineDislike />
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+18</span>
            <span>2020</span>
          </div>
          <div className="desc">
            Superheroes are often as popular as celebrities, as influential as
            politicians, and sometimes even as revered as gods.
          </div>
          <div className="genre">Action</div>
        </div>
      )}
    </div>
  );
}