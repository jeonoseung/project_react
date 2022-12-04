import React, {CSSProperties, useEffect, useRef, useState} from "react";
interface props{
    index:number
    stacks:{
        name:string
        content:string[]
        version:string
    }[]
}
function TechStackEx(props:props){
    const [Start, setStart] = useState<boolean>(false)
    const TechStackContent = useRef<HTMLDivElement>(null);
    const [ContentStyle, setContentStyle] = useState<CSSProperties>({
        transition:'all 1s',
        opacity:'0'
    })
    interface content{
        name:string
        version:string
        content:string[]
    }

    const [Content,setContent] = useState<content>({name:"",version:"",content:[]})
    useEffect(()=>{
        const value = props.stacks[props.index];
        setContent((item)=>({
            ...item,name:"",version:"",content:[]
        }))
        setContentStyle((item)=>({...item, transition:'all 0s'}))
        if(Start) setContentStyle((item)=>({...item, opacity:0}))
        else setStart(true)
        setContent((item)=>({
            ...item,
            name:value.name,
            version:value.version,
            content:props.stacks[props.index].content
        }))
        setTimeout(()=>{
            setContentStyle((item)=>({...item, transition:'all 1s',opacity:1}))
        },100)
    },[props.index])
    return(
        <div className='col-8 grid px4 text-start f-size-h'>
            <div ref={TechStackContent} style={ContentStyle}>
                <h2>{Content.name}</h2>
                <p>
                    <span>경험 버전:</span>
                    <span>{Content.version}</span>
                </p>
                {Content.content.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}
export default TechStackEx