function Form(){
  return(
    <section>
    <form id="formulario">
        <h2>Contactanos</h2>

        <input className="campos" type="text" name="nombre" placeholder="Nombre" />

        <input className="campos" type="text" name="apellido" placeholder="Apellido" />

        <input className="campos" type="email" name="email" placeholder="E-mail" />

        <div className="contenedorNewsletter">
            <label htmlFor="newsletter">Quiero recibir novedades</label>
            <input type="checkbox" name="newsletter" value="newsletter" />
        </div>

        <textarea name="comentarios" rows="6" cols="30" placeholder="Comentarios"></textarea>

        <input className="botonEnviar" type="submit" value="Enviar" onClick={()=>alert('Formulario enviado. Muchas gracias!')}/>

    </form>

</section>
  )

}
export default Form;