export default function Portal(){
    
    return (
        <>
            <div className="portal-wrapper">
                <video autoPlay muted className="portal-mascara">
                    <source src="portal-rick-and-morty-mascara.webm" type="video/webm" />
                    <source src="portal-rick-and-morty-mascara.mp4" type="video/mp4" />
                </video>
                <video autoPlay muted className="portal">
                    <source src="portal-rick-and-morty.webm" type="video/webm" />
                    <source src="portal-rick-and-morty.mp4" type="video/mp4" />
                </video>
            </div>
            <style jsx>{`
                video.portal{
                    position: absolute;
                    right: -110px;
                    max-height: 680px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                    -moz-filter: blur(1.5px);
                    -o-filter: blur(1.5px);
                    -ms-filter: blur(1.5px);
                    filter: blur(1.5px);
                }
                video.portal-mascara{
                    position: absolute;
                    right: -1125px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 5;
                    max-height: 680px;
                    -moz-filter: blur(1.5px);
                    -o-filter: blur(1.5px);
                    -ms-filter: blur(1.5px);
                    filter: blur(1.5px);
                }
            `}</style>
        </>
    )
}