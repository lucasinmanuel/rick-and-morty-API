import Header from '../src/components/Header'

export default function SobrePage(){
    return (
        <>
            <Header />
            <div className="container__sobre">
                <div className="sobre-info">
                    <h1>Este projeto foi criado usando a <a target="_blank" href="https://rickandmortyapi.com/">Rick and Morty API</a></h1>
                    <p>Olá, se você está lendo isso, meu nome é Lucas, e este é um dos meus projetos. 
                    Nele utilizai o React JS, mas especificamente o framework Next.js, um dos mais conhecidos para react.</p>
                    <ul>
                        <li><b><a target="_blank" href="https://axios-http.com/">Axios</a></b>: utilizei a biblioteca Axios para fazer as requisições a API.</li>
                        <li><b><a target="_blank" href="https://www.framer.com/motion/">Framer Motion</a></b>: algumas animações foram criadas usando a biblioteca Framer Motion.</li>
                        <li><b><a target="_blank" href="https://pt-br.reactjs.org/">React JS</a></b>: uma das principais bibliotecas JavaScript.</li>
                        <li><b><a target="_blank" href="https://nextjs.org/">Next.js</a></b>: um dos frameworks para React mais famosos do mercado.</li>
                    </ul>
                    <div className="socials-info">
                        <h2>Para acompanhar mais o meu trabalho me siga no Linkedin e Github!</h2>
                        <a target="_blank" href="https://www.linkedin.com/in/lucas-emanuel-santana-dos-santos-7431b722a/"><img alt="Link para Linkedin de Lucas Emanuel Santana dos Santos" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
                        <a target="_blank" href="https://github.com/LucasInmanuel"><img alt="Link para Github de Lucas Emanuel Santana dos Santos" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" /></a>
                    </div>
                </div>
            </div>{/*container__info*/}
            <style global jsx>{`
            .container__sobre{
                padding: 60px 3%;
                margin-left: auto;
                margin-right: auto;
                max-width: 1280px;
            }
            .sobre-info{
                color: white;
                text-align: center;
            }
            .sobre-info h1{
                font-size: 27px;
            }
            .sobre-info p{
                max-width: 600px;
                margin: 15px auto;
                font-size: 16px;
            }
            .sobre-info a{
                text-decoration: none;
                color: rgb(151, 215, 215);
                transition: 0.3s;
            }
            .sobre-info a:hover{
                color: rgb(248, 237, 114);
            }
            .sobre-info ul{
                padding: 0 20px;
                max-width: 700px;
                margin: 20px auto;
                text-align: left;
            }
            .sobre-info ul li{
                margin-bottom: 5px;
            }
            .socials-info h2{
                font-size: 24px;
                margin-bottom: 20px;
            }
            .socials-info a{
                margin: 0 10px;
            }
            .socials-info a img[alt*=Linkedin]{
                width: 230px;
                margin-bottom: 10px;
            }
            .socials-info a img[alt*=Github]{
                width: 200px;
                margin-bottom: 10px;
            }
            `}</style>
        </>
    )
}
