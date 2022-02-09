import Head from 'next/head';
import Header from '../src/components/Header';
import Portal from '../src/components/Portal'
import DesktopStyles from '../src/styles/desktop';
import MobileStyles from '../src/styles/mobile';
import ipConfig from '../config.json'
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

function HomePage(){

    const [clickLista,setClickLista] = useState(false)
    const [portalEvent,setPortalEvent] = useState(false)
    const [listaPerson,setListaPerson] = useState([])
    const [indexInfo,setIndexInfo] = useState(0)

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character',
        }).then((res) => {
    
            var personId = res.data.results
            setListaPerson(personId)
         
        })

    },[]) 

    const slider = {
        show: {
            opacity: 1,
            x: 0,
            position: "relative",
            zIndex: 4,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            x: 1300,
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
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            </Head>
            <main>
                <Header />
                <div className="container__personagem">

                    {portalEvent && (<Portal />)}

                    {listaPerson.slice(indexInfo,indexInfo + 1).map((infoPerson) => {
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
                    })}

                    <div className="arrow-slider">

                        <img className="arrow-left" src="images/arrow-left.png" onClick={() => {
                            
                            var i = 19;
                            i--;
                            let previewOffSetX = document.querySelectorAll('.preview-fotos-single')[i].scrollWidth;
                            if(window.innerWidth > 1020){
                                document.querySelector('.preview-fotos-wrapper').scrollLeft -= 493.2;
                            }else{
                                document.querySelector('.preview-fotos-wrapper').scrollLeft -= previewOffSetX * 2;
                            }
                    
                        }} />

                        <div className="preview-fotos-wrapper"> 
                            <div className="preview-fotos-scroll">
                                {listaPerson.slice(0,20).map((infoPerson) => {
                                    return(
                                        
                                        <div className="preview-fotos-single" key={infoPerson.id - 1} onClick={portalEvent ? () => {} : () => {
                                            setClickLista(true)
                                            setPortalEvent(true)
                                            setTimeout(() => {
                                                setIndexInfo(infoPerson.id -1)
                                                setClickLista(false)
                                            },1500)
                                            setTimeout(() => {
                                                setPortalEvent(false)
                                            },2800)
                                        }}><img src={infoPerson.image} /></div>

                                    )   
                                })}
                            </div>{/*preview-fotos-scroll*/}
                        </div>{/*preview-fotos-wrapper*/}

                        <img className="arrow-right" src="images/arrow-right.png" onClick={() => {
                            var i = 1;
                            i++;
                            let previewOffSetX = document.querySelectorAll('.preview-fotos-single')[i].scrollWidth;
                            if(window.innerWidth > 1020){
                                document.querySelector('.preview-fotos-wrapper').scrollLeft += 494;
                            }else{
                                document.querySelector('.preview-fotos-wrapper').scrollLeft += previewOffSetX * 2;
                            }   
                        }} />

                    </div>
                </div>{/*container__personagem*/}
            </main>
            <DesktopStyles />
            <MobileStyles />
        </>
    )
}

export default HomePage;