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
            zIndex: 5
        },
        hidden: {
            x: 1200,
            position: "relative",
            zIndex: 4,
            opacity: 0,
            transition: {
                delay: 1,
                repeat: 1,
                repeatType: "reverse",
                duration: 0.7,
            }
        }
    
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
                    {listaPerson.slice(0,1).map((infoPerson) => {
                        return (
                            <motion.div key={infoPerson.id - 1} initial="show" animate={clickLista ? 'hidden' : 'show'} variants={slider}>
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
                                        <div className="preview-fotos-wrapper">
                                            <div onClick={() => {
                                                setClickLista(true)
                                                setPortalEvent(true)
                                                setTimeout(() => {
                                                    setClickLista(false)
                                                    setPortalEvent(false)
                                                },3000)
                                            }} className="preview-fotos-single">
                                                
                                            </div>
                                        </div> 
                                    </div>
                                </div>{/*personagem*/}
                            </motion.div>
                        )
                    })}
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
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    height: 80vh;
                    position: relative;
                    z-index: 4;
                }
                .perfil-img{
                    width: 40%;
                }
                .perfil-img img{
                    max-width: 450px;
                }
                .personagem-info{
                    width: 60%;
                    padding-left: 30px;
                    color: white;
                }
                .personagem-info p{
                    max-width: 500px;
                    margin-top: 10px;
                }
                .preview-fotos-wrapper{
                    display: flex;
                    background-color: gray;
                    margin-top: 20px;
                    width: 100%;
                    max-width: 500px;
                    height: 15px;
                }
                .preview-fotos-single{
                    width: 33.3%;
                    background-color: red;
                }
            `}</style>
        </>
    )
}

export default HomePage;