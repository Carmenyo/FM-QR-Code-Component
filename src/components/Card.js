import image from "../images/image-qr-code.png";
import "../styles/layout/_card.scss"


const Card = () => {
    return (
      <div className="container">
      <section className="main">
       
      <img
        className="main main__image"
        src={image}
        alt="Código qr"
      />
      <h1 className="main main__title">
       Improve your front-end skills by building projects
      </h1>
      <p className="main main__paragraph">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
      
    </section>
    </div>
    )
}

export default Card;