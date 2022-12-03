import React, {useEffect, useRef, useState} from "react";
import {CSSProperties} from "react";


function ImagesConversion(){
    interface ImageSet{
        id:number
        style:CSSProperties
    }
    interface ImagesSet extends Array<ImageSet>{}
    const StateDiv = useRef(null);
    const NextButton = useRef<HTMLButtonElement>(null);
    const [current,setcurrent] = useState(0);
    const [isStart,setisStart] = useState<boolean>(false);
    const Images_arr = [
        {id:1, style:{backgroundImage : 'url(img/spring/spring1.jpg)', opacity:1}},
        {id:2, style:{backgroundImage : 'url(img/spring/spring2.jpg)', opacity:0}},
        {id:3, style:{backgroundImage : 'url(img/spring/spring3.jpg)', opacity:0}},
        {id:4, style:{backgroundImage : 'url(img/spring/spring4.jpg)', opacity:0}},
        {id:5, style:{backgroundImage : 'url(img/spring/spring5.jpg)', opacity:0}},
        {id:6, style:{backgroundImage : 'url(img/spring/spring6.jpg)', opacity:0}},
        {id:7, style:{backgroundImage : 'url(img/spring/spring7.jpg)', opacity:0}},
        {id:8, style:{backgroundImage : 'url(img/spring/spring8.jpg)', opacity:0}},
        {id:9, style:{backgroundImage : 'url(img/spring/spring9.jpg)', opacity:0}},
        {id:10, style:{backgroundImage : 'url(img/spring/spring10.jpg)', opacity:0}},
    ]
    const [Images,setImages] = useState<ImagesSet>([])
    const time:any = useRef();
    const FrontImage = async (e:React.MouseEvent<HTMLElement>)=>{
        Images_arr[current].style.opacity = 0;
        if(current-1 < 0) {Images_arr[Images_arr.length-1].style.opacity = 1;}
        else {Images_arr[current-1].style.opacity = 1;}
        setImages(Images_arr)
        const btndiv:any = StateDiv.current;
        for(let i =0;i<btndiv.children.length;i++)
        {
            btndiv.children[i].style.background = 'rgba(0,0,0,0)'
        }
        if(current <= 0){setcurrent(Images_arr.length-1);btndiv.children[Images_arr.length-1].style.background = 'rgba(0,0,0,1)'}
        else {setcurrent(current-1);btndiv.children[current-1].style.background = 'rgba(0,0,0,1)';}
    }
    const NextImage = async (e:React.MouseEvent<HTMLElement>)=>{
        Images_arr[current].style.opacity = 0;
        if(current+1 > Images_arr.length-1) {Images_arr[0].style.opacity = 1;}
        else {Images_arr[current+1].style.opacity = 1;}
        setImages(Images_arr)
        const btndiv:any = StateDiv.current;
        for(let i =0;i<btndiv.children.length;i++)
        {
            btndiv.children[i].style.background = 'rgba(0,0,0,0)'
        }
        if(current === Images_arr.length-1){setcurrent(0);btndiv.children[0].style.background = 'rgba(0,0,0,1)'}
        else {setcurrent(current+1);btndiv.children[current+1].style.background = 'rgba(0,0,0,1)';}
    }
    /** current가 변경되면 아래 이벤트 실행
     *  setInterval 초기화 예제 */
    useEffect(()=>{
        /** setInterval 함수 실행 */
        time.current = setInterval(()=>{
            NextButton.current?.click()
        },5000)
        /** 초기화 */
        return ()=>{
            clearInterval(time.current)
        }
    },[current])
    const ImagesConversionDiv:CSSProperties = {
        position:'relative',
        height:'50vh'
    }
    const FrontButtonStyle:CSSProperties = {
        position:'absolute',
        top:'50%',
        left:'2%',
        transform:'translate(0, -50%)'
    }
    const NextButtonStyle:CSSProperties = {
        position:'absolute',
        top:'50%',
        right:'2%',
        transform:'translate(0, -50%)'
    }
    const State:CSSProperties = {
        position:'absolute',
        bottom:'5%',
        left:'50%',
        transform:'translate(-50%, -50%)'
    }
    const StateBtn:CSSProperties = {
        background:'rgba(0,0,0,0)',
        border:'1px solid black',
        padding:'0.2rem 0.5rem',
        borderRadius:'0.25rem',
    }
    useEffect(()=>{
        setTimeout(()=>{
            const btndiv:any = StateDiv.current;
            btndiv.children[0].style.background = 'rgba(0,0,0,1)'
        },1)
        setImages(Images_arr)
    },[])
    return(
        <div>
            <div style={ImagesConversionDiv}>
                {Images.map((item)=>(
                    <div className='HomeImages' key={item.id} style={item.style}></div>
                ))}
                <div style={State} ref={StateDiv}>
                    {Images.map((item)=>(
                        <button className='m1' key={item.id} style={StateBtn}></button>
                    ))}
                </div>
                <button className='button' onClick={FrontImage} style={FrontButtonStyle}>이전</button>
                <button className='button' onClick={NextImage} ref={NextButton} style={NextButtonStyle}>다음</button>
            </div>
        </div>
    )
}
export default ImagesConversion