import Head from 'next/head';
import Header from '../src/components/Header';
import Portal from '../src/components/Portal'
import DesktopStyles from '../src/styles/desktop';
import MobileStyles from '../src/styles/mobile';
import ipConfig from '../config.json';
import React, {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {motion} from 'framer-motion';

function HomePage(){

    const router = useRouter();
    const portaStatus = router.query.portal_gun;

    const [listaPerson,setListaPerson] = useState([])
    const [indexInfo,setIndexInfo] = useState(0)
    const [clickLista,setClickLista] = useState(false)
    const [clickArrowPreview,setClickArrowPreview] = useState(false)

    const [portalEvent,setPortalEvent] = useState(false)
    const [disablePortal,setDisablePortal] = useState('true') //valor pego pela URL true e false

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character',
        }).then((res) => {
            
            var personId = res.data.results
            setListaPerson(personId)
            
        })

        setDisablePortal(portaStatus)

    },[portaStatus])
    
    const slider = {
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            position: "relative",
            zIndex: 4,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            x: 1300,
            y: 0,
            position: "relative",
            zIndex: 4,
            opacity: 0,
            transition: {
                delay: 0.9,
                duration: 0.7
            }
        },
    }

    return (
        <>
            <Head>
                <title>Rick and Morty</title>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="author" content="Lucas Emanuel Santana dos Santos" />
                <meta name="description" content="Projeto criado a partir da Rick and Morty API. Confira as informações de seus persoangens favoritos." />
                <meta name="keywords" content="wiki,desenvolvimento web,seo,programação,web design,front-end,web developer,API,Rick and Morty" />
                <meta name="robots" content="index,follow" />
                <meta name="theme-color" content="#97d7d7" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Projeto pessoal - Rick and Morty API" />
                <meta property="og:site_name" content="Rick and Morty" />
                <meta property="og:description" content="Projeto criado a partir da Rick and Morty API. Confira as informações de seus persoangens favoritos." />
                <meta property="og:url" content="https://rick-and-morty-api-phi-eight.vercel.app/" />
                <meta property="og:image" content="https://rick-and-morty-api-phi-eight.vercel.app/images/og-img.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            </Head>
            <main>
                <Header />
                <div className="container__personagem">

                    {portalEvent && (<Portal />)}

                    {listaPerson.slice(indexInfo,indexInfo + 1).map((infoPerson) => {
                        if(window.innerWidth > 1020){
                            return (
                                <motion.div key={infoPerson.id - 1} initial={clickLista ? 'hidden' : 'show'} animate={clickLista ? 'hidden' : 'show'} variants={slider}>
                                    <div className="personagem">
                                        <div className="perfil-img">
                                            <img width="100%" src={infoPerson.image} />
                                        </div>
                                        <div className="personagem-info">
                                            <h1>{infoPerson.name}</h1>
                                            <span><b>Origem: </b>{infoPerson.origin.name}</span>
                                            <br />
                                            <span><b>Espécie: </b>{infoPerson.species} / <b>Gênero: </b>{infoPerson.gender}</span>
                                            <p>{ipConfig.description[infoPerson.id - 1].split('::').slice(1)}</p>
                                        </div>
                                    </div>{/*personagem*/}
                                </motion.div>
                            )
                        }else{
                            return (
                                <div key={infoPerson.id - 1} className="personagem">
                                    <div className="perfil-img">
                                        <img width="100%" src={infoPerson.image} />
                                    </div>
                                    <div className="personagem-info">
                                        <h1>{infoPerson.name}</h1>
                                        <span><b>Origem: </b>{infoPerson.origin.name}</span>
                                        <br />
                                        <span><b>Espécie: </b>{infoPerson.species} / <b>Gênero: </b>{infoPerson.gender}</span>
                                        <p>{ipConfig.description[infoPerson.id - 1].split('::').slice(1)}</p>
                                    </div>
                                </div>/*personagem*/
                            )
                            
                        }
                        
                    })}

                    <div className="arrow-slider">

                        <img className="arrow-left" src="images/arrow-left.png" onClick={clickArrowPreview ? () => {} : () => {
                            setClickArrowPreview(true)
                            let previewOffSetX = document.querySelectorAll('.preview-fotos-single')[0].scrollLeft;
                            if(window.innerWidth > 1020){
                                document.querySelector('.preview-fotos-wrapper').scrollLeft -= 541;
                            }else{
                                document.querySelector('.preview-fotos-wrapper').scrollLeft -= previewOffSetX * 2;
                            }
                            setTimeout(() => {
                                setClickArrowPreview(false)
                            },500)
                        }} />

                        <div className="preview-fotos-wrapper"> 
                            <div className="preview-fotos-scroll">
                                {listaPerson.slice(0,20).map((infoPerson) => {
                                    return(
                                        
                                        <div className="preview-fotos-single" key={infoPerson.id - 1} onClick={portalEvent ? () => {} : () => {
                                           
                                            if(disablePortal === 'false'){
                                                setPortalEvent(false)
                                                setClickLista(false)
                                                setIndexInfo(infoPerson.id -1)
                                            }else{
                                                if(window.innerWidth > 1020){
                                                    setPortalEvent(true)
                                                    setClickLista(true)
                                                    setTimeout(() => {
                                                        setIndexInfo(infoPerson.id -1)
                                                        setClickLista(false)
                                                    },1500)
                                                    setTimeout(() => {
                                                        setPortalEvent(false)
                                                    },2800)
                                                }else{
                                                    setPortalEvent(false)
                                                    setClickLista(false)
                                                    setIndexInfo(infoPerson.id -1)
                                                }
                                            }       

                                        }}><img src={infoPerson.image} /></div>

                                    )   
                                })}
                            </div>{/*preview-fotos-scroll*/}
                        </div>{/*preview-fotos-wrapper*/}

                        <img className="arrow-right" src="images/arrow-right.png" onClick={clickArrowPreview ? () => {} : () => {
                            setClickArrowPreview(true)
                            let previewOffSetX = document.querySelectorAll('.preview-fotos-single')[0].scrollLeft;
                            if(window.innerWidth > 1020){
                                document.querySelector('.preview-fotos-wrapper').scrollLeft += 541;
                            }else{
                                document.querySelector('.preview-fotos-wrapper').scrollLeft += previewOffSetX * 2;
                            }
                            setTimeout(() => {
                                setClickArrowPreview(false)
                            },500)
                        }} />
                        
                    </div>{/*arrow-slider*/}

                </div>{/*container__personagem*/}
            </main>
            <DesktopStyles />
            <MobileStyles />
        </>
    )
}

export default HomePage;