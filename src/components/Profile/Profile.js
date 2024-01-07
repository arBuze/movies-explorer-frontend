import './Profile.css';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContexts';
import useFormValidation from '../../hooks/useFormValidation';
import { NAME_REG, EMAIL_REG } from '../../utils/constants';

export default function Profile({ isEdit, onEditClick, onDataUpdate, onSignOut, error, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } = useFormValidation();
  const [isSameData, setIsSameData] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser])

  function handleEditClick() {
    onEditClick();
  }

  function handleInputChange(e) {
    handleChange(e);
    const { name, value } = e.target;
    let equal;
    if (name === 'name') {
      equal = (value === currentUser.name && values.email === currentUser.email);
    } else {
      equal = (value === currentUser.email && values.name === currentUser.name);
    }
    setIsSameData(equal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;

    if (!name || !email) {
      return;
    }

    onDataUpdate(name, email);
  }

  return(
    <>
      <section className="profile">
        <form className="profile__form" name="profile" method="post" onSubmit={handleSubmit}>
          <div className="profile__user-data">
          <h2 className="profile__greeting">Привет, {currentUser.name}</h2>
            <label className="profile__label">
              Имя
              <input className="profile__input-item" type="text" required name="name" id="name-input" minLength="2" maxLength="30"
                pattern={NAME_REG} disabled={!isEdit} value={values.name ? values.name : ''} onChange={handleInputChange}/>
            </label>
            <span className="profile__input-error name-input-error">{errors.name}</span>
            <label className="profile__label">
              E-mail
              <input className="profile__input-item" type="email" required name="email" id="email-input"
                pattern={EMAIL_REG} disabled={!isEdit} value={values.email ? values.email : ''} onChange={handleInputChange} />
            </label>
            <span className="profile__input-error email-input-error">{errors?.email}</span>
          </div>
          <div className="profile__btn-container">
            {
              isEdit ?
              <>
                <span className="profile__form-error">{error}</span>
                <button className="profile__save-btn" type="submit"
                  disabled={!isValid || isLoading || isSameData}>
                    Сохранить
                </button>
              </>
              :
              <>
                <button className="profile__edit-btn" type="button" onClick={handleEditClick}>Редактировать</button>
                <button className="profile__exit-btn" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
              </>
            }
          </div>
        </form>
      </section>
    </>
  );
}
