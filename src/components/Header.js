import Link from 'next/link';
import React, {useState,useEffect} from 'react';
import { useRouter } from 'next/router';

export default function Header(){

    const [hoverInfoPortal,setHoverInfoPortal] = useState(false)
    const [disablePortal,setDisablePortal] = useState(false)
    const router = useRouter()
    const [urlPathName,setUrlPathName] = useState(router.pathname)

    useEffect(() => {
      
        const itemsMenuDesktop = document.querySelectorAll('nav.menu-desktop a')
        const itemsMenuMobile = document.querySelectorAll('nav.menu-mobile a')

        if(urlPathName === '/sobre'){
            document.querySelector('.menu-desktop li:last-child').style.display = 'none';
            itemsMenuDesktop[1].style.color = 'rgb(151, 215, 215)';
            itemsMenuMobile[1].style.color = 'rgb(151, 215, 215)';
        }else{
            itemsMenuDesktop[0].style.color = 'rgb(151, 215, 215)';
            itemsMenuMobile[0].style.color = 'rgb(151, 215, 215)';
        }
   
    },[urlPathName])

    return (
        <>
            <header>
                <div className="container">

                    {hoverInfoPortal && (
                        <div className="boxPortal-info">
                            <p>Aperte para desativar/ativar o efeito do portal de transição utilizado para alterar o personagem selecionado.</p>
                        </div>
                    )}

                    <div className="logo-header">
                        <Link href="/">
                            <a><h1>Rick and <span>Morty</span></h1></a>
                        </Link>
                    </div>
                    <nav className="menu-desktop">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/sobre"><a>Sobre</a></Link></li>
                            <li>
                                <button onClick={() => {
                                    if(disablePortal === true){
                                        document.querySelector('.menu-desktop li:last-child').style.opacity = 1;
                                        setDisablePortal(false)
                                        router.push(`?portal_gun=${disablePortal}`)
                                    }else{
                                        document.querySelector('.menu-desktop li:last-child').style.opacity = 0.5;
                                        setDisablePortal(true)
                                        router.push(`?portal_gun=${disablePortal}`)
                                    }
                                }}
                                onMouseOver={() => {setHoverInfoPortal(true)}}
                                onMouseOut={() => {setHoverInfoPortal(false)}}>
                                    <img src="images/arma-portais.png" />
                                </button>
                            </li>
                        </ul>
                    </nav>{/*menu-desktop*/}
                </div>{/*container*/}
            </header>
            <nav className="menu-mobile">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/sobre"><a>Sobre</a></Link></li>
                </ul>
            </nav>{/*menu-mobile*/}
            <style jsx>{`
            
                header{
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    background-color: black;
                    z-index: 20;
                }

                header .container{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }

                header a{
                    text-decoration-line: none;
                    color: white;
                }

                header span{
                    color: hsl(55, 91%, 71%);
                }

                nav ul{
                    list-style: none;
                }

                nav.menu-desktop li{
                    display: inline-block;
                    margin-left: 20px;
                }

                .menu-desktop button{
                    cursor: pointer;
                    position: relative;
                    z-index: 20;
                    top: 8px;
                    left: 0;
                    border: 0;
                    background-color: transparent;
                    width: 38px;
                    height: 38px;
                    padding: 5px;
                }
                .menu-desktop button img{
                    width: 22px;
                }
                .boxPortal-info{
                    width: 250px;
                    background-color: rgb(151, 215, 215);
                    position: absolute;
                    right: 20px;
                    top: 70px;
                    z-index: 20;
                    padding: 15px 25px 15px 15px;
                }
                .boxPortal-info{
                    font-size: 15px;
                    color: white;
                    line-height: initial;
                }
                nav.menu-mobile{
                    display: none;
                }
                @media screen and (max-width: 1020px){
                    nav.menu-desktop{
                        display: none;
                    }
                    .logo-header{
                        width: 100%;
                        text-align: center;
                    }
                    nav.menu-mobile{
                        display: block;
                        text-align: center;
                    }
                    .menu-mobile ul{
                        list-style: none;
                    }
                    .menu-mobile li{
                        display: inline-block;
                        margin: 0 10px;
                    }
                    .menu-mobile a{
                        text-decoration: none;
                        color: white;
                    }
                }
            `}</style>
        </>
    )  
}