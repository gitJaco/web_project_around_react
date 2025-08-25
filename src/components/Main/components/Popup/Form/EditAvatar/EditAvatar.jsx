function EditAvatar() {
    return (
       <form
              className="popup__form popup__form_avatar"
              name="avatarForm"
              noValidate
            >
              <div className="popup__form-group">
                <input
                  className="popup__form-input"
                  type="url"
                  id="avatar"
                  name="avatar"
                  placeholder="Enlace de la imagen"
                />
                <span className="avatar-error input-error_active"></span>
              </div>
              <button
                type="submit"
                className="popup__form-button popup__form-button_inactive"
                disabled
              >
                Guardar
              </button>
            </form>
    )
}

export default EditAvatar