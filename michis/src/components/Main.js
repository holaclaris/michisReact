import Card from "./Card";
import { useState, useEffect } from 'react';

function Main (){
      const[casas, setCasas]= useState([]);

      const onAddProduct=(()=>
      {alert('Producto agregado al carrito de compras')
      })

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
              onAddProduct={onAddProduct}
              /> 
         )
         }

      </main>
    )
}
export default Main;