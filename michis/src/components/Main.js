import Card from "./Card";
import { useState, useEffect } from 'react';

function Main (){
      const[casas, setCasas]= useState([]);

      useEffect(()=>{
          fetch('./casas.json')
          .then(res=>res.json())
          .then(data=>setCasas(data))
          .catch(err=>console.error('Error al cargar los datos:', err))
      }, [])

    return(

       <main>

         {casas.map((casa)=>
         <Card
              key={casa.id}
              imageSrc={casa.imageSrc}
              alt={casa.title}
              title={casa.title}
              description={casa.description}
              prize={casa.prize}
              /> 
         )
         }

      </main>
    )
}
export default Main;