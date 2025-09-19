import  './watch.scss'
import { IoArrowBackOutline } from "react-icons/io5";
import video from '../../components/list/stare.mp4';

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <IoArrowBackOutline />
            Home
        </div>
        <video className='video' autoPlay progress controls src={video} />
    </div>
  )
}
