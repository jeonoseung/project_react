import React, {CSSProperties, Dispatch, SetStateAction, useEffect, useState} from "react";
interface props{
    index:number
    setIndex:Dispatch<SetStateAction<number>>
    stacks:{
        name:string
        content:string[]
        version:string
    }[]
}
function TechStack(props:props){
    interface i_stacks_arr{
        name:string,
        style:CSSProperties
    }
    interface interface_stacks_arr extends Array<i_stacks_arr>{}
    /** 회전 값을 style로 저장할 배열 */
    const stacks_arr:interface_stacks_arr = [];
    /** 최종적으로 저장할 배열 기술 스택 이름 + style */
    const [Stacks,setStacks] = useState<interface_stacks_arr>([])
    /** 현재 rotate */
    const [Current, setCurrent] = useState(0);
    /** 360(회전 360도)에 기술 스택 수를 나눈 값을 저장 */
    const [rotate_value, setRotate_value] = useState<number>(360 / props.stacks.length);
    /** 버튼 클릭 시 회전 하기 */
    const set_arr = (i:number,value:number) =>{
        /** 회전 값을 새로 셋팅해줌 */
        stacks_arr.push({name:props.stacks[i].name, style:{transform:`rotate(${Math.floor(value)}deg)`,}})
    }
    /**
     * 다음 기술 스택
     * 회전 하면서 각도값이 점차 쌓이는 방식
     *  */
    const BackStack =()=>{
        /** 새로 저장하거나 참조할 현재 rotate값 */
        const current_value = Current + rotate_value;
        /** 기술 스택만큼 반복 */
        for(let i=0;i<props.stacks.length;i++)
        {
            /** 나눈 값에 i를 곱하고 현재 rotate값을 더함 */
            const value = (rotate_value*i)+current_value;
            set_arr(i,value)
        }
        /** crrent값을 새로 저장 */
        setCurrent(current_value)
        /** 최종적으로 값 적용으로 회전 시킴 */
        setStacks(stacks_arr)
        if(props.index <= 0)
        {
            props.setIndex(props.stacks.length-1)
        }
        else
        {
            props.setIndex(props.index-1)
        }
    }
    /**
     * 이전 기술 스택
     * 방식은 NextStack 함수와 같음
     *  */
    const NextStack =()=>{
        const current_value = Current - rotate_value;
        for(let i=0;i<props.stacks.length;i++)
        {
            const value = (rotate_value*i)+current_value;
            set_arr(i,value)
        }
        setCurrent(current_value)
        setStacks(stacks_arr)
        if(props.index >= props.stacks.length-1)
        {
            props.setIndex(0)
        }
        else
        {
            props.setIndex(props.index+1)
        }
    }
    useEffect(()=>{
        /** 기본 셋팅 */
        for(let i=0;i<props.stacks.length;i++){set_arr(i,rotate_value*i)}
        setStacks(stacks_arr)
    },[])
    return(
        <div className='block col-2 relative min-height500 zIndex20 align-item-center overflow-h'>
            <div onClick={BackStack} className='w100 h45 absolute zIndex30 cursor-p bg-black-g-desc top0'>
                <img src='icon/chevrons-up.svg' className='absolute left50 top10'/>
            </div>
            <div onClick={NextStack} className='w100 h45 absolute zIndex30 cursor-p bg-black-g-asc bottom0'>
                <img src='icon/chevrons-down.svg' className='absolute left50 bottom10'/>
            </div>
            <div className='rotate-div absolute'>
                {Stacks.map((item)=>(
                    <div className='rotate-set' key={item.name} style={item.style}>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TechStack