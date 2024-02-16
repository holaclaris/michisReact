function Card({imageSrc, alt, title, description, prize}){
    
    return(
        <div className="card">
            <div className="contenedorImagen"><img className="imagen" src={imageSrc} alt={alt}/>
            </div>
            <div className="descripcion">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>Precio: {prize} </h4>
            </div>
        </div>

    )
}
export default Card;