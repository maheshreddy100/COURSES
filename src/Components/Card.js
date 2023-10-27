import React, { useState } from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";


const Card = (props) => {
    let course = props.course;
    let likedCourses =  props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    function clickHandler() {
        //if liked courses id already linked//
      if(likedCourses.includes(course.id)) {
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id ));
        toast.warning("Like Removed");
      }
      else {
        if(likedCourses.length === 0) {
            setLikedCourses([course.id]);
        }
        else {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
      }

    }

    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
            <div className='relative'>
                <img src={course.image.url}/>
            <div className="w-[40px] h-[40px] rounded-full absolute
             bg-white right-2 bottom-3 grid place-items-center">
                <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ? 
                    (<FcLike fontSize="1.8rem"/>) : 
                    (<FcLikePlaceholder fontSize="1.8rem"/>)
                }
                </button>
            </div>
            </div>
            <div>
                <p className='text-white font-bold text-center text-lg '>{course.title}</p>
                <p className="mt-2 text-white mx-2 my-2 ">
                    {
                        course.description.length> 100 ?
                        (course.description.substr(0,100)) + "...." :
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;

