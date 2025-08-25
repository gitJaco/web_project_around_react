function EditProfile() {
    return (
        <form
              className="popup__form popup__form_edit"
              name="editForm"
              noValidate
            >
              <fieldset class="popup__form-fieldset">
                <div className="popup__form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    name="name"
                    className="popup__form-input popup__form-input_number_one"
                    minlength="2"
                    maxlength="40"
                    required
                  />
                  <span className="name-error input-error_active"></span>
                </div>
                <div className="popup__form-group">
                  <input
                    type="text"
                    id="about"
                    placeholder="Acerca de mí"
                    name="about"
                    className="popup__form-input popup__form-input_number_two"
                    minlength="2"
                    maxlength="200"
                    required
                  />
                  <span className="about-error input-error_active"></span>
                </div>
              </fieldset>
              <button
                type="submit"
                className="popup__form-button popup__form-button_inactive"
                name="btn"
                disabled
              >
                Guardar
              </button>
            </form>
    )
}

export default EditProfile