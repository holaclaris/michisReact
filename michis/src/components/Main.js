import Card from "./Card";

function Main (){
    return(
      <main>
        <Card 
              imageSrc='images/cathouse1.jpeg' 
              alt='casa de gato Comfy'
              title='COMFY'
              description='Casa de algodón natural afelpado con tintes 
              ecológicos rellena de vellón siliconado hipoalergénico.' 
              prize='$40.000'
              />
        <Card 
              imageSrc='images/cathousetotoro.jpeg' 
              alt='casa de gato Totoro'
              title='TOTORO'
              description='Casa de fieltro natural en figura del personaje Totoro 
              hipoalergénica con tratamiento anti-ácaros.' 
              prize='$25.000'/>
        <Card 
              imageSrc='images/cathouse3.jpeg' 
              alt='casa de gato Casa box'
              title='BOX'
              description='Casa minimalista de madera de bambú laqueada con 
              futon interior de algodón hipoalergénico.' 
              prize='$50.000'/>
        <Card 
              imageSrc='images/cathouse4.jpg' 
              alt='casa de gato Cat-Vader'
              title='CAT-VADER'
              description='Casa geométrica de película en fibra de papel organico
              tratada con tinturas naturales.' 
              prize='$35.000'/>
        <Card 
              imageSrc='images/cathouse5.jpeg' 
              alt='casa de gato Country House'
              title='COUNTRY'
              description='Casa doble altura estilo tradicional en 
              madera paraíso laqueada con futón de algodón.' 
              prize='$55.000'/>
        <Card 
              imageSrc='images/cathouse6.jpeg' 
              alt='casa de gato Urbana'
              title='URBAN'
              description='Casa doble altura en cemento natural con 
              revestimiento de madera de paraíso laqueada.' 
              prize='$60.000'/>
      </main>
    )
}
export default Main;