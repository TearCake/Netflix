import "./featured.scss";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import featuredImage from "./featured.png";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
            <option value="documentary">Documentary</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="mystery">Mystery</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
          </select>
        </div>
      )}
      <img width="100%" src={featuredImage} alt="Featured" />
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Inception-wordmark.svg" />
        <span className="desc">Inception is a 2010 science fiction action heist film written and directed by Christopher Nolan, who also produced it with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.</span>
        <div className="button">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <IoMdInformationCircleOutline />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
