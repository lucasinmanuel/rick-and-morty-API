import Head from 'next/head';
import Header from '../src/components/Header';
import Portal from '../src/components/Portal'
import ipConfig from '../config.json'
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

function HomePage(){

    const [clickLista,setClickLista] = useState(false)
    const [portalEvent,setPortalEvent] = useState(false)
    const [listaPerson,setListaPerson] = useState([])
    const [indexImg,setIndexImg] = useState(1)

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

                    {listaPerson.slice(indexImg,indexImg + 1).map((infoPerson) => {
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
                                        <p>{ipConfig.description[0].split('::').slice(1)}</p>
                                    </div>
                                </div>{/*personagem*/}
                            </motion.div>
                        )
                    })}

                    <div className="arrow-slider">

                        <img className="arrow-left" src="images/arrow-left.png" onClick={() => {
                            document.querySelector('.preview-fotos-wrapper').scrollLeft -= '493';
                        }} />

                        <div className="preview-fotos-wrapper"> 
                            <div className="preview-fotos-scroll">
                                {listaPerson.slice(0,20).map((infoPerson) => {
                                    return(
                                        
                                        <div key={infoPerson.id - 1} onClick={() => {
                                            setClickLista(true)
                                            setPortalEvent(true)
                                            setTimeout(() => {
                                                setIndexImg(infoPerson.id -1)
                                                setClickLista(false)
                                            },1500)
                                            setTimeout(() => {
                                                setPortalEvent(false)
                                            },2800)
                                        }} className="preview-fotos-single"><img src={infoPerson.image} /></div>

                                    )   
                                })}
                            </div>{/*preview-fotos-scroll*/}
                        </div>{/*preview-fotos-wrapper*/}

                        <img className="arrow-right" src="images/arrow-right.png" onClick={() => {
                            document.querySelector('.preview-fotos-wrapper').scrollLeft += '493';
                        }} />

                    </div>
                </div>{/*container__personagem*/}
            </main>
            <style jsx>{`
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
                    height: 75vh;
                    position: relative;
                    z-index: 4;
                }
                .perfil-img{
                    width: 40%;
                    margin-right: 30px;
                }
                .perfil-img img{
                    max-width: 420px;
                    min-width: 350px;
                }
                .personagem-info{
                    width: 60%;
                    color: white;
                }
                .personagem-info p{
                    max-width: 500px;
                    margin-top: 10px;
                }
                .preview-fotos-wrapper{
                    width: 500px;
                    position: relative;
                    top: -25px;
                    z-index: 4;
                    overflow-x: scroll;
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
                    margin-top: 12px;
                    cursor: pointer;
                }
                .arrow-right{
                    width: 36px;
                    height: 36px;
                    margin-top: 12px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

export default HomePage;