import React from "react";
import {useState} from "react";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import TechStackEx from "./components/TechStackEx";


function Home(){
    interface stacks{
        name:string
        content:string[]
        version:string
    }
    /** 우측 설명을 표시하기 위한 index */
    const [CurrentIndex,setCurrentIndex] = useState<number>(0);
    const Stacks:stacks[] = [
        {name:'Ubuntu',
            version:'20.04 LTS'
            ,content:[
                "카페24 가상 서버 대여로 Ubuntu 대여했습니다.",
                "Apache,Mysql을 설치하고 웹 배포 및 도메인 변경이나",
                "그 외 Mysql,FTP,SFTP,SSH 설정들을 해봤습니다.",
                "웹 배포를 목표로만 학습해서 기본 지식은 부족합니다.",
            ]},
        {name:'React',
            version:'18.2.0',
            content:[
                "프로젝트로 React+typescript로 진행하면서 최대한 Component화하고 any타입은 사용하지 않았습니다",
                "상태관리 라이브러리는 사용하지 않았으며 useState,useRef,useEffect 등",
                "자주 사용하는 Hook에 대한 지식은 가지고 있습니다.",]},
        {name:'Node',
            version:'18.12.1 LTS',
            content:[
                "Express 프레임워크를 사용해서 CRUD, 파일 처리, 로그인 기능 등을 만들어 봤습니다",
                "주로 사용한 모듈들은",
                "암호화 처리에 필요한 bcrypt, 세션 처리를 위한 express-session,",
                "파일처리나 form 데이터를 처리하기 위한 multer 모듈 등 자주 사용하는 모듈들을 사용해봤습니다",
            ]},
        {name:'Mysql',
            version:'8.0.31',
            content:[
                "DB 관리를 할 때는 Mysql Workbench를 사용해서 관리 했습니다",
                "SELECT,INSERT,DELETE,UPDATE로 간단한 SQL문 작성 가능합니다.",
                "SELECT문 같은경우는 JOIN까지는 할 줄 알고,",
                "그외 시퀀스 관리나 이벤트 스케쥴러는 사용은 해봤고 자주 사용해보지는 못해서",
                "이 기능들에 대한 숙련도는 떨어집니다."
            ]},
        {name:'PHP',
            version:'7.4.29',
            content:[
                "PHP는 워드프레스 플러그인 개발이나 Laravel 프레임워크에서 사용해봤습니다",
                "일반적인 PHP프로젝트에서 사용 못해봤습니다",
                "PHP문법에 기본적인 이해는 있어",
                "HTML에서 PHP를 사용해서 반복문,조건문,데이터 등을 처리을 해봤습니다",
            ]},
        {name:'Laravel',
            version:'8.75',
            content:[
                "Laravel 프로젝트는 구매한 템플릿을 적용시켜 사용해봤습니다",
                "기본적인 파일구조는 익히고 있고",
                "자주 사용하는 components, controller, model, storege같은 기능들을 알고 있습니다",
                "Laravel 프레임워크에서 SPA프레임워크를 연결해서 사용해본적은 없습니다",
                "component는 파트별로 만들기 위해 사용",
                "controller는 controller파일에서 함수를 만들고 router에서 연결해서 사용하고 쿼리문은 쿼리 빌더 사용",
                "model은 db가져오는 용도로만 사용, storge는 파일을 관리하는데 사용",
                "이외에 기능들은 자주사용하지 않아서 접해보지 못해서 사용못하거나, 익숙하지 않습니다."]
        }
    ];

    return(
        <div>
            <main>
                <div className='h-100-screen border'>

                </div>
                <div className='h-100-screen p4'>
                    <div className='p2 text-start'>
                        <AboutMe />
                    </div>
                    <div className='text-start px2'>
                        <h2>기술 스택 이해도</h2>
                    </div>
                    <div className='grid grid-10 gap4 p2'>
                        <TechStack stacks={Stacks} index={CurrentIndex} setIndex={setCurrentIndex}/>
                        <div className='col-8 grid grid-8 block'>
                            <TechStackEx stacks={Stacks} index={CurrentIndex}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home;