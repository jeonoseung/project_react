import React, {useState} from "react";

function AboutMe(){
    interface StackIcon{
        name:string
        src:string
    }

    const [StackIcon] = useState<Array<StackIcon>>([
        {name:"Ubuntu",src:"icon/ubuntu.svg"},
        {name:"React",src:"logo512.png"},
        {name:"node",src:"icon/node.svg"},
        {name:"Express",src:"icon/Expressjs.svg"},
        {name:"Mysql",src:"icon/mysql.png"},
        {name:"PHP",src:"icon/php.svg"},
        {name:"Laravel",src:"icon/Laravel.svg"}
    ])

    return(
        <div>
            <h2>자기 소개</h2>
            <div className='grid grid-2 gap4 f-size-h'>
                <div className='block grid grid-3 gap4 p2'>
                    <div className='p2 col-1'><span>이름</span></div>
                    <div className='p2 col-2'><span>전오승</span></div>
                    <div className='p2 col-1'><span>나이</span></div>
                    <div className='p2 col-2'><span>26</span></div>
                    <div className='p2 col-1'><span>연락처</span></div>
                    <div className='p2 col-2'><span>010-5453-6428</span></div>
                    <div className='p2 col-1'><span>기술 스택</span></div>
                    <div className='p2 col-2 flex flex-wrap'>
                        {StackIcon.map((item)=>(
                            <div key={item.name} className='m2'>
                                <img  src={item.src} className='stack-img'/>
                                <div className='text-center'>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='block p4'>
                    <span>
                                    안녕하십니까
                                    프론트엔드 지원 전오승입니다.
                                    여러가지를 배우고 사용해보는 것을 좋아합니다.
                                    카페24에서 가상서버를 대여해서 사용했으며 운영체제는 Ubuntu를 사용했습니다.
                                    해당 페이지는 프론트엔드는 React, 백엔드는 Node.js(express)를 사용하여 제작했습니다.
                                    아래 기술 스택의 이해도 서술은
                                    찾아서 적기보다는 제가 혼자 학습하면서 아는 범위내에 적어봤습니다.
                    </span>
                </div>
            </div>
        </div>
    )
}
export default AboutMe