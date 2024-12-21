import "./styles/style.css";

const Registration = () => {
    return (
        <div class="registration">
            <form class="form" action="#">
                <label class="form__title">Your Name</label>
                <input class="form__input" type="text" placeholder="First Name" />
                <input class="form__input" type="text" placeholder="Last Name" />
                <fieldset class="fieldset">
                    <div class="fieldset__radio">
                        <input type="radio" id="contactChoice1" name="gender" value="male" />
                        <label for="contactChoice1">Male</label></div>
                    <div class="fieldset__radio">
                        <input type="radio" id="contactChoice2" name="gender" value="female" />
                        <label for="contactChoice2">Female</label>
                    </div>
                </fieldset>
                <label class="form__title">Login details</label>
                <input class="form__input" type="email" placeholder="Email" />
                <input class="form__input" type="text" placeholder="Password"/>
                    <p class="form__text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                    <button class="form__button_registration">JOIN NOW<svg width="17.000977" height="9.918610" viewBox="0 0 17.001 9.91861" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M11.54 0.2C11.6 0.14 11.68 0.08 11.77 0.05C11.85 0.01 11.94 0 12.04 0C12.13 0 12.22 0.01 12.31 0.05C12.39 0.08 12.47 0.14 12.54 0.2L16.79 4.45C16.85 4.52 16.91 4.6 16.94 4.68C16.98 4.77 17 4.86 17 4.95C17 5.05 16.98 5.14 16.94 5.23C16.91 5.31 16.85 5.39 16.79 5.46L12.54 9.71C12.41 9.84 12.22 9.91 12.04 9.91C11.85 9.91 11.67 9.84 11.54 9.71C11.4 9.57 11.33 9.39 11.33 9.2C11.33 9.02 11.4 8.84 11.54 8.7L15.28 4.95L11.54 1.21C11.47 1.14 11.42 1.06 11.38 0.98C11.35 0.89 11.33 0.8 11.33 0.7C11.33 0.61 11.35 0.52 11.38 0.43C11.42 0.35 11.47 0.27 11.54 0.2Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        <path id="Vector_1" d="M0 4.95C0 4.77 0.07 4.59 0.2 4.45C0.34 4.32 0.52 4.25 0.7 4.25L15.58 4.25C15.77 4.25 15.95 4.32 16.08 4.45C16.21 4.59 16.29 4.77 16.29 4.95C16.29 5.14 16.21 5.32 16.08 5.46C15.95 5.59 15.77 5.66 15.58 5.66L0.7 5.66C0.52 5.66 0.34 5.59 0.2 5.46C0.07 5.32 0 5.14 0 4.95Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>
                </button>
            </form>
            <div class="info">
                <p class="info__title">LOYALTY HAS ITS PERKS</p>
                <p class="info__text">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                <p class="info__list"><svg width="20" height="16" fill="none"><path d="M19.8 0h-1.71c-.24 0-.47.11-.62.3L7.37 13.28 2.52 7.05a.819.819 0 0 0-.27-.22.853.853 0 0 0-.35-.08H.19c-.16 0-.25.19-.15.32l6.71 8.62c.31.41.92.41 1.23 0L19.95.31c.1-.12.01-.31-.15-.31z" fill="#000" /></svg>15% off welcome offer</p>
                <p class="info__list"><svg width="20" height="16" fill="none"><path d="M19.8 0h-1.71c-.24 0-.47.11-.62.3L7.37 13.28 2.52 7.05a.819.819 0 0 0-.27-.22.853.853 0 0 0-.35-.08H.19c-.16 0-.25.19-.15.32l6.71 8.62c.31.41.92.41 1.23 0L19.95.31c.1-.12.01-.31-.15-.31z" fill="#000" /></svg>Free shipping, returns and exchanges on all orders</p>
                <p class="info__list"><svg width="20" height="16" fill="none"><path d="M19.8 0h-1.71c-.24 0-.47.11-.62.3L7.37 13.28 2.52 7.05a.819.819 0 0 0-.27-.22.853.853 0 0 0-.35-.08H.19c-.16 0-.25.19-.15.32l6.71 8.62c.31.41.92.41 1.23 0L19.95.31c.1-.12.01-.31-.15-.31z" fill="#000" /></svg>$10 off a purchase on your birthday</p>
                <p class="info__list"><svg width="20" height="16" fill="none"><path d="M19.8 0h-1.71c-.24 0-.47.11-.62.3L7.37 13.28 2.52 7.05a.819.819 0 0 0-.27-.22.853.853 0 0 0-.35-.08H.19c-.16 0-.25.19-.15.32l6.71 8.62c.31.41.92.41 1.23 0L19.95.31c.1-.12.01-.31-.15-.31z" fill="#000" /></svg>Early access to products</p>
                <p class="info__list"><svg width="20" height="16" fill="none"><path d="M19.8 0h-1.71c-.24 0-.47.11-.62.3L7.37 13.28 2.52 7.05a.819.819 0 0 0-.27-.22.853.853 0 0 0-.35-.08H.19c-.16 0-.25.19-.15.32l6.71 8.62c.31.41.92.41 1.23 0L19.95.31c.1-.12.01-.31-.15-.31z" fill="#000" /></svg>Exclusive offers & rewards</p>
            </div>
        </div>
    );
};

export default Registration;