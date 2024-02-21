import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import './Vote.css';
import { useState, useEffect } from "react";
import Likes from "./Likes";


function Vote(){

    const[gatos, setGatos]= useState([]);

    useEffect(()=>{ 
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(res=>res.json())
        .then(data=>setGatos(data))
        .catch(err=>console.error('Error al cargar los datos:', err))
    }, [])

    return(
        <>
        <Header />
        <Navbar />
          
          
            <div className="adopt-container">
            <h2 className='adoptTitle'>Votá tu foto favorita</h2>
                {gatos.map((gato) =>
                    <div className="gatoCard" key={gato.id}>
                        <img src={gato.url} alt={gato.id}/>
                        <div className="likes">
                          <Likes />
                        </div>
                    </div>
                )
                }

            </div>
        <Footer />
        </>
    )
}
export default Vote;