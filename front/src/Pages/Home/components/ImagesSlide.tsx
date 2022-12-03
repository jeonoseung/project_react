import React, {CSSProperties, useEffect, useState} from "react";


function ImagesSlide(){
    interface Images{
        src:string | never;
    }
    interface ImagesSet extends Array<Images>{}
    const [Images, setImages] = useState<ImagesSet>([
        {src:'img/spring/spring1.jpg'},
        {src:'img/spring/spring2.jpg'},
        {src:'img/spring/spring3.jpg'},
        {src:'img/spring/spring4.jpg'},
        {src:'img/spring/spring5.jpg'},
    ]);
    const testi:any = [
        {src:'img/spring/spring1.jpg'},
        {src:'img/spring/spring2.jpg'},
        {src:'img/spring/spring3.jpg'},
        {src:'img/spring/spring4.jpg'},
        {src:'img/spring/spring5.jpg'},
        {src:'img/spring/spring6.jpg'},
        {src:'img/spring/spring7.jpg'},
        {src:'img/spring/spring8.jpg'},
        {src:'img/spring/spring9.jpg'},
        {src:'img/spring/spring10.jpg'},
    ]
    let testt:any = [];
    const [test,settest] = useState([])
    const ImgWidth = 480;
    const [currentvw,setcurrentvw] = useState(0);
    const [slide, setslide] = useState<CSSProperties>({
        width:'0vw'
    })
    const Img:CSSProperties = {
        width:ImgWidth,
        height:'250px'
    }
    const Slide = (e:React.MouseEvent<HTMLElement>)=>{
        const vw = currentvw + ImgWidth;
        setcurrentvw(vw)
        setslide((item)=>({
            ...item, transform:`translate(${-vw}px)`
        }))
    }
    useEffect(()=>{
        for(let j=0;j<2;j++)
        {
            for(let i=0;i<testi.length;i++)
            {
                if(j === 0)
                {
                    testt.push({id:i+1,src:testi[i].src})
                }
                else
                {
                    testt.push({id:(i+1)+10,src:testi[i].src})
                }
            }
         }
        settest(testt)
        setcurrentvw((testt.length/2-1) * ImgWidth);
        setslide((item)=>({
            ...item, width:testt.length*100+'vw',transform:'translate(-'+(ImgWidth*(testt.length/2-1))+'px)'
        }))
        setTimeout(function(){
            setslide((item)=>({
                ...item, transition:'all 0.5s',
            }))
        },1)
    },[])
    return(
        <div className='slide-div'>
            <div className='flex' style={slide}>
                {test.map((item:any)=>(
                    <div key={item.id} className='flex justify-content-center'>
                        <img src={item.src} style={Img} alt=''/>
                    </div>
                ))}
            </div>
            <button className='button mobile-h' onClick={Slide}>버튼</button>
        </div>
    )
}
export default ImagesSlide