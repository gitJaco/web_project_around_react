function ImagePopup(props) {

    const {name, link} = props.card
    return (
        <>
          
            <img
              src={link}
              alt="Imagen aumentada de paisaje"
              className="popup__image"
            />
            <p className="popup__image-title">{name}</p>
        </>
        
    )
}

export default ImagePopup