function GlobalStyles(){
    return (
        <style global jsx>{`

            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .container{
                padding: 0 3%;
                margin: 0 auto;
                max-width: 1280px;
            }
            
            html,body{
                height: 100%; 
                background-color: black;
            }

            body{
                overflow-y: auto;
                overflow-x: hidden;
                font-family: 'Open Sans', sans-serif;
            }

        `}</style>
    )
}

const MyApp = ({ Component, pageProps }) => {

    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>

    )

}

export default MyApp;