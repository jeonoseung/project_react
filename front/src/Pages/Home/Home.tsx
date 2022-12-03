import React, {CSSProperties} from "react";
import {useState,useEffect} from "react";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import TechStackEx from "./components/TechStackEx";

function Home(){
    /** 우측 설명을 표시하기 위한 index */
    const [CurrentIndex,setCurrentIndex] = useState(0);
    useEffect(()=>{
        console.log(CurrentIndex)
    },[CurrentIndex])
    return(
        <div>
            <main className='h-100-screen p4'>
                <div className='p2 text-start'>
                    <AboutMe />
                </div>
                <div className='grid grid-10 gap4 p2'>
                    <TechStack index={CurrentIndex} setIndex={setCurrentIndex}/>
                    <TechStackEx index={CurrentIndex}/>
                </div>
            </main>
        </div>
    )
}
export default Home;