import like2 from "../../../../images/like2.svg"
import Trash from "../../../../images/Trash.svg"
import ImagePopup from "../Popup/ImagePopup/ImagePopup"
function Card(props) {
    const {name, link, isLiked} = props.card 
    const imageComponent = {children:<ImagePopup card={props.card}/>}
    return (
        
                    
                      <div className="element">
                        <img
                          src={Trash}
                          alt="Boton para eliminar bote de basura"
                          className="element__trash"
                        />
                        <img alt="Imagen de paisaje" className="element__image" src={link} onClick={() => props.handleOpenPopup(imageComponent)}/>
                        <div className="element__info-container">
                          <h2 className="element__name">{name}</h2>
                          <img
                            src={like2}
                            alt="Icono de corazon para dar like"
                            className="element__like"
                          />
                        </div>
                        </div>
                
                  
    )
}

export default Card