export default function DesktopStyles(){
    return (
        <style global jsx>{`
            .container__personagem{
                padding: 0 3%;
                margin: 0 auto;
                max-width: 1280px;
                position: relative;
            }
            .personagem{
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                z-index: 4;
                margin-top: 55px;
                margin-bottom: 35px;
            }
            .perfil-img{
                width: 40%;
                margin-right: 30px;
                margin-left: 54px;
            }
            .perfil-img img{
                max-width: 420px;
                min-width: 350px;
            }
            .personagem-info{
                width: 60%;
                color: white;
            }
            .personagem-info h1{
                margin-bottom: 10px;
            }
            .personagem-info p{
                max-width: 450px;
                margin-top: 10px;
            }
            .preview-fotos-wrapper{
                width: 500px;
                position: relative;
                top: -25px;
                z-index: 4;
                overflow-x: hidden;
                overflow-y: hidden;
                scroll-behavior: smooth;
            }
            .preview-fotos-scroll{
                display: flex;
                align-items: center;
                padding: 7px 5px;
                width: 396%;
            }
            .preview-fotos-single{
                padding: 0 5px;
            }
            .preview-fotos-single > img{
                width: 100%;
                cursor: pointer;
            }
            .arrow-slider{
                display: flex;
                position: relative;
                z-index: 5;
            }
            .arrow-left{
                width: 36px;
                height: 36px;
                margin-top: 10px;
                margin-right: 8px;
                cursor: pointer;
            }
            .arrow-right{
                width: 36px;
                height: 36px;
                margin-top: 10px;
                margin-left: 8px;
                cursor: pointer;
            }

            @media screen and (max-width: 1130px){
                .personagem-info p{
                    max-width: 410px;
                }
            }
        `}</style>
    )
}