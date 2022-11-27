import React, {HTMLAttributes} from "react";
import {useRef,useState,useEffect} from "react";

interface images{
    id:number
    style:{
        backgroundImage:string;
        backgroundPosition:string;
        height:string;
        zIndex:number;
    }
}

function Home(){
    const [current,setcurrent] = useState(0);
    const [start,setstart] = useState(false);
    const Images_test = [
        {id:1, style:{backgroundImage : 'url(img/spring/spring1.jpg)', backgroundPosition:'center', height:"100%", opacity:1}},
        {id:2, style:{backgroundImage : 'url(img/spring/spring2.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:3, style:{backgroundImage : 'url(img/spring/spring3.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:4, style:{backgroundImage : 'url(img/spring/spring4.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:5, style:{backgroundImage : 'url(img/spring/spring5.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:6, style:{backgroundImage : 'url(img/spring/spring6.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:7, style:{backgroundImage : 'url(img/spring/spring7.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:8, style:{backgroundImage : 'url(img/spring/spring8.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:9, style:{backgroundImage : 'url(img/spring/spring9.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
        {id:10, style:{backgroundImage : 'url(img/spring/spring10.jpg)', backgroundPosition:'center', height:"100%", opacity:0}},
    ]
    const [Images,setImages]:any = useState([])
    const FrontImage = async (e:React.MouseEvent<HTMLElement>)=>{
        Images_test[current].style.opacity = 0;
        if(current-1 < 0) {Images_test[Images_test.length-1].style.opacity = 1;}
        else {Images_test[current-1].style.opacity = 1;}
        setImages(Images_test)
        if(current <= 0) setcurrent(Images_test.length-1)
        else {setcurrent(current-1)}
    }
    const NextImage = async (e:React.MouseEvent<HTMLElement>)=>{
        Images_test[current].style.opacity = 0;
        if(current+1 > Images_test.length-1) {Images_test[0].style.opacity = 1;}
        else {Images_test[current+1].style.opacity = 1;}
        setImages(Images_test)
        if(current == Images_test.length-1) {setcurrent(0)}
        else {setcurrent(current+1)}
    }
    const test:any = {
        position:'relative',
        height:'70vh'
    }
    useEffect(()=>{
        setImages(Images_test)
    },[])
    return(
        <div>
            <main className='h-100-screen'>
                <div style={test}>
                    {Images.map((item:images)=>(
                        <div className='image_test' key={item.id} style={item.style}>

                        </div>
                    ))}
                </div>
                <button className='button' onClick={FrontImage}>이전</button>
                <button className='button' onClick={NextImage}>다음</button>
                <div className="grid gap4">
                    <div className="border">A</div>
                    <div className="border">B</div>
                    <div className="border">C</div>
                    <div className="border">D</div>
                    <div className="border">E</div>
                    <div className="border">F</div>
                    <div className="border">G</div>
                    <div className="border">H</div>
                    <div className="border">I</div>
                </div>
            </main>
        </div>
    )
}
export default Home;