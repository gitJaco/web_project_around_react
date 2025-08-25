function NewCard() {
    return (
         <form className="popup__form popup__form_add" name="addForm" noValidate>
              <fieldset className="popup__form-fieldset">
                <div className="popup__form-group">
                  <input
                    type="text"
                    id="title"
                    placeholder="Titulo"
                    name="title"
                    className="popup__form-input popup__form-input_number_one"
                    minlength="2"
                    maxlength="30"
                    required
                  />
                  <span className="title-error input-error_active"></span>
                </div>
                <div class="popup__form-group">
                  <input
                    type="url"
                    id="url"
                    placeholder="Enlace de la imagen"
                    name="url"
                    className="popup__form-input popup__form-input_number_two"
                    required
                  />
                  <span className="url-error input-error_active"></span>
                </div>
              </fieldset>
              <button
                type="submit"
                className="popup__form-button popup__form-button_inactive"
                disabled
              >
                Crear
              </button>
            </form>
    )
}

export default NewCard