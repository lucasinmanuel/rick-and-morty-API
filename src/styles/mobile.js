export default function MobileStyles(){
    return (
        <style global jsx>{`
        
            @media screen and (max-width: 1020px){
                .container__personagem{
                    padding: 0;
                }
                .personagem{
                    flex-direction: column;
                    top: 50px;
                    left: 0;
                    text-align: center;
                    justify-content: center;
                }
                .perfil-img{
                    margin-right: 0;
                }
                .perfil-img img{
                    width: 350px;
                }
                .personagem-info{
                    width: 100%;
                }
                .personagem-info h1{
                    margin-top: 10px;
                }
                .personagem-info p{
                    max-width: 500px;
                    margin-top: 20px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 0 3%;
                }
                .portal-wrapper{
                    display: none;
                }
                .preview-fotos-wrapper{
                    width: 600px;
                }
                .preview-fotos-scroll{
                    display: flex;
                    align-items: center;
                    padding: 7px 0;
                    width: 990%;
                }
                .preview-fotos-single{
                    padding: 0 10px;
                }
                .preview-fotos-single > img{
                    width: 100%;
                }
                .arrow-slider{
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    top: 75px;
                    padding: 0 3%;
                    margin: 0 auto;
                }
                .arrow-left{
                    margin-top: 0;
                }
                .arrow-right{
                    margin-top: 0;
                }
            }
        
        `}</style>
    )
}