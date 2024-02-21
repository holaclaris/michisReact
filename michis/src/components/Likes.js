import './Vote.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { useState} from 'react';

function Likes(){
    const [likes, setLikes] = useState(Math.floor(Math.random() * 1000));

    return(
        <>
        <button className="corazon" onClick={()=>setLikes(likes+1)}><IoMdHeartEmpty /></button>
                        <p className="nroLikes">{likes} likes</p>
        </>
    )
}
export default Likes;