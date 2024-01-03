import './Profile.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContexts';

export default function Profile({ isEdit, onEditClick, onDataUpdate, onSignOut, error }) {
  const [formValue, setFormValue] = useState({});
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setFormValue({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [currentUser])

  function handleEditClick() {
    onEditClick();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = formValue;

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
                disabled={!isEdit} value={formValue.name} onChange={handleChange} />
            </label>
            <label className="profile__label">
              E-mail
              <input className="profile__input-item" type="email" required name="email" id="email-input"
                disabled={!isEdit} value={formValue.email} onChange={handleChange} />
            </label>
          </div>
          <div className="profile__btn-container">
            {
              isEdit ?
              <>
                <span className="profile__form-error">{error}</span>
                <button className="profile__save-btn" type="submit" disabled={false}>Сохранить</button>
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
