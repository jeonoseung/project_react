import React, {CSSProperties} from "react";

function Header(){
    const header:CSSProperties = {
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0.5rem",
    }
    return(
        <header className='header'>
            <div className='container'>
                <div style={header}>
                    <div className='w30 text-start'>
                        <img src='kurly/icon/마켓컬리.svg'/>
                    </div>
                    <div className='w40'>
                        <div className='SearchGroup'>
                            <input type = "text" className='InputSearch w100' placeholder='상품명을 입력 해주세요'/>
                            <button className='SearchBtn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='w30 text-end'>
                        <span className='font-gray'>로그인</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header