
import { useState } from "react"
import EditButton from "../../images/EditButton.png"
import AddButton from "../../images/AddButton.png"
import editAvtar from "../../images/editAvtar.png"
import Popup from "./components/Popup/Popup"
import EditProfile from "./components/Popup/Form/EditProfile/EditProfile"
import EditAvatar from "./components/Popup/Form/EditAvatar/EditAvatar"
import NewCard from "./components/Popup/Form/NewCard/NewCard"
import Card from "./components/Card/Card"

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);


function Main() {
    const [popup, setPopup] = useState(null);

    const newCardPopup = {title: 'Nuevo Lugar', children: <NewCard />}
    const newEditProfilePopup = {title: 'Nuevo Nombre', children: <EditProfile/>}
    const newEditAvatarPopup = {title: 'Nuevo Avatar', children: <EditAvatar/>}

    function handleOpenPopup(popup) {
      setPopup(popup)
    }

    function handleClosePopup() {
        setPopup(null)
    }
    return (
          <main className="content">
                  <section className="profile content__profile">
                    <div className="profile__avatar">
                      <div className="profile__avatar-container-button">
                        <img
                          src={editAvtar}
                          alt="Boton de edicion del avatar"
                          className="profile__avatar-button"
                          onClick={() => handleOpenPopup(newEditAvatarPopup)}
                        />
                      </div>
                    </div>
                    <div className="profile__info">
                      <div className="profile__info-container">
                        <h1 className="profile__name">Jacobo De Hoyos</h1>
                        <img
                          src={EditButton}
                          alt="Boton para editar el perfil"
                          className="profile__edit-button"
                          onClick={() => handleOpenPopup(newEditProfilePopup)}
                        />
                      </div>
                      <p className="profile__occupation">Desarrollador Web</p>
                    </div>
          
                    <img
                      className="profile__add-button"
                      src={AddButton}
                      alt="Boton para añadir"
                      onClick={() => handleOpenPopup(newCardPopup)}
                    />
                  </section>
                  
                  <section className="elements content__elements">
    {cards.map((card) => (
      <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup}/>
    ))}
  </section>
                  {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
                </main>
    )
}

export default Main