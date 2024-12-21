import subscribe_background from './../../images/subscribe_background.webp';
import subscribe_info_image from './../../images/subscribe_info_image.webp';
import "./styles/style.css";

const Subscribe = () => {
    return (
        <div className="subscribe_box">
            <div className="subscribe_background">
                <img className="subscribe_background__image" src={subscribe_background} alt="subscribe_background"/>
            </div>
            <div className="subscribes">
                <div className="subscribes__info">
                    <div className="subscribes__image"><img className="subscribes__image_content" src={subscribe_info_image} alt="subscribe_info_image"/></div>
                <p className="subscribes__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p></div>
                <div className="subscribe">
                    <p className="subscribe__title">SUBSCRIBE</p>
                    <p className="subscribe__text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <div className="subscribe__input">
                        <div className="subscribe__input_div"><input className="subscribe__field" type="email" placeholder="Enter Your Email"/></div>
                        <div className="subscribe__button">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;