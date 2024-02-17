function Card({imageSrc, alt, title, description, prize}){
    
    return(
        <div className="card">
            <div className="contenedorImagen"><img className="imagen" src={imageSrc} alt={alt}/>
            </div>
            <div className="descripcion">
                <div className="nombrePrecio"><h3>{title}</h3><h4>{prize} </h4></div>
                <p>{description}</p>
                <input type='submit' value='COMPRAR' className='botonComprar' />
            </div>
        </div>

    )
}
export default Card;