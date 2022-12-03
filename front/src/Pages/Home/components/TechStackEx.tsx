import React, {useEffect, useRef, useState} from "react";

type props = {
    index:number
}

function TechStackEx(props:props){
    const TechStackContent = useRef<HTMLPreElement>(null);
    const Content_arr = useState([
        {name:'Ubuntu',content:"하위 우분투"},
        {name:'React',content:"하위 리액트"},
        {name:'Node',content:"하위 노드"},
        {name:'Mysql',content:"하위 mysql"},
        {name:'PHP',content:"하위 피에이치피"},
        {name:'Laravel',content:"하위 라라벨"},
    ]);
    const Content = useState<string>();
    useEffect(()=>{

    })
    return(
        <div className='col-7 border p4'>
            <pre ref={TechStackContent}></pre>
        </div>
    )
}
export default TechStackEx