function GlobalStyles(){
    return (
        <style global jsx>{`

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

            body{
                overflow: hidden;
                height: 100vh;
                background-color: black;
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