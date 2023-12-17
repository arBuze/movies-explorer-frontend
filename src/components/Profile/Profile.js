import './Profile.css';
import { useState } from 'react';

export default function Profile(props) {
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick() {
    setIsEdit(true);
  }

  return(
    <>
      <section className="profile">
        <form className="profile__form" name="profile" method="patch" noValidate>
          <div className="profile__user-data">
          <h2 className="profile__greeting">Привет, Виталий!</h2>
            <label className="profile__label">
              Имя
              <input className="profile__input-item" disabled={!isEdit} type="text" required name="name" id="name-input" minLength="2" maxLength="30" />
            </label>
            <label className="profile__label">
              E-mail
              <input className="profile__input-item" disabled={!isEdit} type="email" required name="email" id="email-input" />
            </label>
          </div>
          <div className="profile__btn-container">
            {
              isEdit ?
              <>
                <span className="profile__form-error">Вы ввели неправильный логин или пароль</span>
                <button className="profile__save-btn" type="submit">Сохранить</button>
              </>
              :
              <>
                <button className="profile__edit-btn" type="button" onClick={handleEditClick}>Редактировать</button>
                <button className="profile__exit-btn" type="button">Выйти из аккаунта</button>
              </>
            }
          </div>
        </form>
      </section>
    </>
  );
}