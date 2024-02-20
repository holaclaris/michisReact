import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import './Adopt.css';
import { useState, useEffect } from "react";

function Adopt(){

    const[gatos, setGatos]= useState([]);

    useEffect(()=>{ 
        fetch('./gatos.json')
        .then(res=>res.json())
        .then(data=>setGatos(data))
        .catch(err=>console.error('Error al cargar los datos:', err))
    }, [])

    return(
        <>
        <Header />
        <Navbar />
          
          <h2 className='adoptTitle'>Dale una oportunidad a uno de estos gatitos</h2>
            <div className="adopt-container">
                {gatos.map((gato) =>
                    <div className="gatoCard" key={gato.id}>
                        <img src={gato.url} alt={gato.id}/>
                    </div>
                )
                }

            </div>
        <Footer />
        </>
    )
}
export default Adopt;