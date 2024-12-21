import Group_2 from './../../images/Group_2.webp';
import "./styles/style.css";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">
                <img className="logo__img_2" src={Group_2} alt="Group 2" />
                <svg width="26" height="27" fill="none"><path d="M18.059 17.625A10.395 10.395 0 1 0 10.419 21a10.319 10.319 0 0 0 6.24-2.09l7.749 7.807a.927.927 0 0 0 .66.285.903.903 0 0 0 .66-.285.971.971 0 0 0 0-1.346l-7.67-7.746zM1.886 10.5a8.535 8.535 0 1 1 8.534 8.6 8.575 8.575 0 0 1-8.534-8.6z" fill="#E8E8E8" /></svg>
            </a>
            <div className="button_copy">
                <input id="check" type="checkbox" /><label for="check">
                    <svg width="32" height="23" fill="none"><path d="M0 23v-2.69h32V23H0zm0-10.24v-2.7h32v2.7H0zM0 2.68V0h32v2.68H0z" fill="#E8E8E8" /></svg>
                </label>
                <div className="burger_menu__menu">
                    <div className="burger_menu__heading">MENU</div>
                    <div className="burger_menu__box">
                        <div className="burger_menu__title">MAN</div>
                        <div className="burger_menu__list">
                            <a className="burger_menu__link" href="#">Accessories</a>
                            <a className="burger_menu__link" href="#">Bags</a>
                            <a className="burger_menu__link" href="#">Denim</a>
                            <a className="burger_menu__link" href="#">T-Shirts</a>
                        </div>
                        <div className="burger_menu__title">WOMAN</div>
                        <div className="burger_menu__list">
                            <a className="burger_menu__link" href="#">Accessories</a>
                            <a className="burger_menu__link" href="#">Jackets & Coats</a>
                            <a className="burger_menu__link" href="#">Polos</a>
                            <a className="burger_menu__link" href="#">T-Shirts</a>
                            <a className="burger_menu__link" href="#">Shirts</a>
                        </div>
                        <div className="burger_menu__title">KIDS</div>
                        <div className="burger_menu__list">
                            <a className="burger_menu__link" href="#">Accessories</a>
                            <a className="burger_menu__link" href="#">Jackets & Coats</a>
                            <a className="burger_menu__link" href="#">Polos</a>
                            <a className="burger_menu__link" href="#">T-Shirts</a>
                            <a className="burger_menu__link" href="#">Shirts</a>
                            <a className="burger_menu__link" href="#">Bags</a>
                        </div>
                    </div>
                </div>
                <a className="button_copy__link" href="registration">
                    <svg width="29" height="29" fill="none"><path d="M14.5 19.93c4.5 0 8.15-4.47 8.15-9.97C22.65 4.47 19 0 14.5 0a7.43 7.43 0 0 0-5.84 3 11.106 11.106 0 0 0-2.32 6.97c0 5.49 3.66 9.96 8.16 9.96zm0-18.12c3.5 0 6.34 3.66 6.34 8.15 0 4.5-2.85 8.16-6.34 8.16-3.5 0-6.35-3.66-6.35-8.16 0-4.49 2.85-8.15 6.35-8.15zm6.34 16.31c-.24 0-.47.1-.64.27a.91.91 0 0 0-.27.64c0 .24.1.47.27.64.17.17.4.26.64.26 1.68 0 3.29.67 4.48 1.86a6.36 6.36 0 0 1 1.86 4.49.9.9 0 0 1-.26.64.9.9 0 0 1-.64.26H2.71a.86.86 0 0 1-.63-.26.91.91 0 0 1-.27-.64c0-1.68.67-3.3 1.86-4.49a6.378 6.378 0 0 1 4.48-1.86.9.9 0 0 0 .64-.26c.17-.17.27-.4.27-.64s-.1-.47-.27-.64a.91.91 0 0 0-.64-.27c-2.16 0-4.23.86-5.76 2.39A8.15 8.15 0 0 0 0 26.28c0 .72.28 1.41.79 1.92s1.2.79 1.92.8h23.57a2.76 2.76 0 0 0 1.92-.8c.51-.51.79-1.2.8-1.92a8.202 8.202 0 0 0-2.4-5.77 8.145 8.145 0 0 0-5.76-2.39z" fill="#E8E8E8" /></svg>
                </a>
                <a className="button_copy__link" href="cart">
                    <svg width="31.996" height="29" fill="none"><path d="M26.2 29c-.65-.03-1.26-.31-1.71-.78-.44-.47-.68-1.1-.67-1.75.01-.65.28-1.27.74-1.72a2.52 2.52 0 0 1 1.74-.71c.64 0 1.27.26 1.73.71.46.45.73 1.07.74 1.72.02.65-.23 1.28-.67 1.75-.44.47-1.06.75-1.7.78h-.2zM6.75 26.31c0-.53.16-1.04.45-1.48.29-.44.71-.79 1.2-.99.49-.2 1.03-.26 1.55-.15.52.1 1 .36 1.37.73.38.37.63.85.74 1.37.1.52.05 1.06-.16 1.55-.2.49-.54.91-.98 1.2a2.647 2.647 0 0 1-2.52.25 2.654 2.654 0 0 1-1.45-1.45c-.13-.32-.2-.67-.2-1.03zm3.8-5.63a1.197 1.197 0 0 1-1.15-.87L4.57 2.36H1.18c-.32 0-.62-.13-.84-.35C.12 1.79 0 1.49 0 1.18 0 .86.12.56.34.34.56.12.86 0 1.18 0h4.28c.26-.01.51.08.72.24.2.15.35.37.42.62l4.83 17.46h13.18L29 8.27H14.4c-.16 0-.32-.02-.47-.08-.14-.06-.28-.14-.39-.25a1.142 1.142 0 0 1-.36-.85c0-.16.03-.32.09-.46.06-.15.15-.28.27-.39.11-.11.25-.2.39-.26.15-.05.31-.08.47-.07h16.41c.19-.01.39.04.56.14.17.09.32.22.42.39.11.16.18.35.2.55.01.19-.02.39-.1.57l-5.4 12.41c-.09.21-.24.39-.44.52-.19.12-.41.19-.64.19H10.55z" fill="#E8E8E8" /></svg>
                </a>
            </div>
        </div>
    );
};

export default Header;