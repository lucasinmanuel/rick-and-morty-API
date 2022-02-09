export default function MobileStyles(){
    return (
        <style global jsx>{`
        
            @media screen and (max-width: 1020px){

                body{
                    overflow-y: auto;
                    overflow-x: hidden;
                }
                .container__personagem{
                    padding: 0 3% 40px 3%;
                }
                .personagem{
                    flex-direction: column;
                    margin-top: 50px;
                    text-align: center;
                    justify-content: center;
                }
                .perfil-img{
                    width: 100%;
                    margin-right: 0;
                    margin-left: 0;
                }
                .perfil-img img{
                    max-width: 420px;
                    min-width: none;
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
                }
                .portal-wrapper{
                    display: none;
                }
                .preview-fotos-wrapper{
                    width: 100%;
                    position: relative;
                    top: 0;
                }
                .preview-fotos-scroll{
                    display: flex;
                    align-items: center;
                    padding: 7px 5px;
                    width: 989%;
                }
                .preview-fotos-single{
                    width: 50%;
                    padding: 0 12px;
                }
                .arrow-slider{
                    align-items: center;
                    
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