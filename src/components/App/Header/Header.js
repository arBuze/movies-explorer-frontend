export default function Header(props) {
  return(
    <header className='header'>
        <nav className='header__navigation'>
          <div className='header__main-navigation'>
            <a className='header__logo'>
              <img src={} alt='Логотип' />
            </a>
            {
              props.isLoggedIn &&
                <div className='header__nav-links'>
                  <a className='header__nav-link'>Фильмы</a>
                  <a className='header__nav-link'>Сохраненные фильмы</a>
                </div>
            }
          </div>
          <div className='header__auth-navigation'>
            {
              props.isLoggedIn ?
                <a className='header__profile-link'>
                  Аккаунт
                  <img className='header__profile-icon' src={} alt='Иконка пользователя' />
                </a>
              :
                <div className='header__auth-links'>
                  <a className='header__auth-link'>Регистрация</a>
                  <a className='header__auth-link'>Войти</a> {/* мб сделать другой стиль через nth-child */}
                </div>
            }
          </div>
        </nav>
      </header>
  );
}
