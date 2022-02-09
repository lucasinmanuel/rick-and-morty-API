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
                    max-width: none;
                    margin-top: 20px;
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
                    padding: 7px 5px;
                    width: 989%;
                }
                .preview-fotos-single{
                    width: 50%;
                    padding: 0 10px;
                }
                .preview-fotos-single > img{
                    width: 100%;
                }
                .arrow-slider{
                    align-items: center;
                    left: 50%;
                    transform: translate(-50%);
                    top: 685px;
                    padding: 0 3%;
                }
                .arrow-left{
                    margin-top: 0;
                }
                .arrow-right{
                    margin-top: 0;
                }
            }

            @media screen and (max-width: 780px){
                .preview-fotos-wrapper{
                    width: 460px;
                }
                .arrow-slider{
                    top: 710px;
                }
                .preview-fotos-single{
                    padding: 0 12px;
                }
            }

            @media screen and (max-width: 630px){
                .preview-fotos-wrapper{
                    width: 380px;
                }
                .arrow-slider{
                    top: 730px;
                }
                .preview-fotos-single{
                    padding: 0 8px;
                }
            }

            @media screen and (max-width: 520px){
                .preview-fotos-wrapper{
                    width: 320px;
                }
                .arrow-slider{
                    top: 760px;
                }
                .preview-fotos-single{
                    padding: 0 8px;
                }
            }

            @media screen and (max-width: 480px){
                .preview-fotos-wrapper{
                    width: 300px;
                }
                .arrow-slider{
                    top: 770px;
                }
            }

            @media screen and (max-width: 420px){
                .perfil-img img{
                    width: 300px;
                }
                .preview-fotos-wrapper{
                    width: 270px;
                }
                .arrow-slider{
                    top: 810px;
                }
            }

            @media screen and (max-width: 350px){
                .perfil-img img{
                    width: 250px;
                }
                .preview-fotos-wrapper{
                    width: 200px;
                }
                .arrow-slider{
                    top: 850px;
                }
            }
        
        `}</style>
    )
}