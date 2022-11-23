import '../styles/Contact.css'

const Contact = () => {
  return ( 
    <div className="contact-container">
      <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
      <form>
        <div className='mail-container'>
          <p className='mail-text'>Correo:</p>
          <input type="text" placeholder='name@example.com' />
        </div>
        <div className='desc-container'>
          <p className='desc-text'>Descripción</p>
          <textarea className='desc-input'></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
   );
}
 
export default Contact;