import './Vote.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { useState} from 'react';

function Likes(){
    const [likes, setLikes] = useState(0);

    return(
        <>
        <button className="corazon" onClick={()=>setLikes(likes+1)}><IoMdHeartEmpty /></button>
                        <p className="nroLikes">{likes} Likes</p>
        </>
    )
}
export default Likes;