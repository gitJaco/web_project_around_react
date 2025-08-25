import CloseIcon from "../../../../images/CloseIcon.png"

function Popup(props) {
    const {onClose, title, children} = props
    return (
        <div className="popup">
      <div className={!title ? "popup__image-container" : "popup__container"}>
        <img
          src={CloseIcon}
          className="popup__close-button"
          alt="Icono para cerrar la ventana emergente"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
    )
}

export default Popup