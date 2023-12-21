import './Profile.css';
import { useState } from 'react';

export default function Profile(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState({name:'', email: ''});

  function handleEditClick() {
    setIsEdit(true);
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
  }

  return(
    <>
      <section className="profile">
        <form className="profile__form" name="profile" method="patch" noValidate onSubmit={handleSubmit}>
          <div className="profile__user-data">
          <h2 className="profile__greeting">Привет, Анна!</h2>
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
