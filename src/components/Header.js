import Link from 'next/link';
import React, {useState} from 'react';

export default function Header(){

    const [hoverInfoPortal,setHoverInfoPortal] = useState(false)
    
    return (
        <>
            <header>
                <div className="container">

                    {hoverInfoPortal && (
                        <div className="boxPortal-info">
                            <p>Aperte para desativar/ativar o efeito do portal de transição utilizado para alterar o personagem selecionado.</p>
                        </div>
                    )}

                    <Link href="/">
                        <a><h1>Rick and <span>Morty</span></h1></a>
                    </Link>

                    <nav className="menu-desktop">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/sobre"><a>Sobre</a></Link></li>
                            <li onMouseOver={() => {setTimeout(() => {setHoverInfoPortal(true)},2000)}}
                            onMouseOut={() => {setHoverInfoPortal(false)}}>
                                <button className="offPortal"><img src="images/arma-portais.png" /></button>
                            </li>
                        </ul>
                    </nav>
                </div>{/*container*/}
            </header>
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

                nav.menu-desktop ul{
                    list-style: none;
                }

                nav.menu-desktop li{
                    display: inline-block;
                    margin-left: 20px;
                }

                button.offPortal{
                    cursor: pointer;
                    position: relative;
                    top: 8px;
                    left: 0;
                    border: 0;
                    background-color: transparent;
                    width: 38px;
                    height: 38px;
                    padding: 5px;
                }
                .offPortal img{
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
            `}</style>
        </>
    )  
}