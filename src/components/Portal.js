export default function Portal(){

    return (
        <>
            <div className="portal-wrapper">
                <video autoPlay muted className="portal">
                    <source src="portal-rick-and-morty.mp4" type="video/mp4" />
                    <source src="portal-rick-and-morty.webm" type="video/webm" />
                </video>
                <video autoPlay muted className="portal-mascara">
                    <source src="portal-rick-and-morty-mascara.mp4" type="video/mp4" />
                    <source src="portal-rick-and-morty-mascara.webm" type="video/webm" />
                </video>
            </div>
            <style jsx>{`
                video.portal{
                    position: absolute;
                    right: -110px;
                    max-height: 650px;
                    top: -9%;
                    z-index: 1;
                    -moz-filter: blur(1.5px);
                    -o-filter: blur(1.5px);
                    -ms-filter: blur(1.5px);
                    filter: blur(1.5px);
                }
                video.portal-mascara{
                    position: absolute;
                    right: -1080px;
                    top: -9%;
                    z-index: 5;
                    max-height: 650px;
                    -moz-filter: blur(1.5px);
                    -o-filter: blur(1.5px);
                    -ms-filter: blur(1.5px);
                    filter: blur(1.5px);
                }
            `}</style>
        </>
    )
}