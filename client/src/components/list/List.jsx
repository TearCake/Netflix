import "./list.scss";
import Listitem from "./Listitem";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState, useRef } from "react";

export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);

    const listRef = useRef();
    
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && slideNumber < 3) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <FaRegArrowAltCircleLeft 
                    className="sliderArrow left" 
                    onClick={() => handleClick("left")} 
                    style={{ display: !isMoved && "none" }} 
                />
                <div className="container" ref={listRef}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <Listitem 
                            key={index}
                            index={index}
                            isHovered={hoveredItem === index}
                            onHover={setHoveredItem}
                        />
                    ))}
                </div>
                <FaRegArrowAltCircleRight 
                    className="sliderArrow right" 
                    onClick={() => handleClick("right")} 
                />
            </div>
        </div>
    )
}