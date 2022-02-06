import Link from 'next/link';

export default function Header(){

    return (
        <>
            <header>
                <div className="container">
                    <Link href="/">
                        <a><h1>Rick and <span>Morty</span></h1></a>
                    </Link>

                    <nav className="menu-desktop">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/sobre"><a>Sobre</a></Link></li>
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
                    position: relative;
                    z-index: 20;
                }

                header .container{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
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
            
            `}</style>
        </>
    )
    
}