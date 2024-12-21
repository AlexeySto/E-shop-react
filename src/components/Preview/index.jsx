import preview_1 from './../../images/preview_1.webp';
import "./styles/style.css";

const Preview = () => {
    return (
        <div className="preview">
        <div className="preview__img">
            <img className="preview__img" src={preview_1} alt="preview 1"/>
        </div>
        <div className="label">
            <div className="label__svg">
                <svg width="12" height="93" fill="none"><path d="M12 .9H0v92h12V.9z" fill="#F16D7F"/></svg>
            </div>
            <div className="label__text">
                <div className="label__word">THE BRAND</div>
                <div className="label__word">OF LUXERIOUS </div>
                <div className="label__word">FASHION</div>
            </div>
        </div>
    </div>
    );
};

export default Preview;