import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);

    // let clicked = ()=>{
    //     console.log("clicked");
    // };

    let toggleLike = ()=>{
       setIsLiked(!isLiked);
        //let newVal = !isLiked;
      //console.log("toggle");
    }

    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked?(<i className="fa-solid fa-heart"></i>):
                    (<i className="fa-regular fa-heart"></i>)
                }
                {/* <i className="fa-regular fa-heart"></i> */}
            </p>
        </div>
    );
}