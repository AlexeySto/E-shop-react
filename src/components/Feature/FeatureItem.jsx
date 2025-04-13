const FeatureItem = ({item}) => {

    const {id, title, text, svg} = item;

    return (
        <div className="feature__item" key={id}>
            <a href="#"><img className="feature__img" src={svg} alt={title} /> </a>
            <h3 className="feature__heading">{title}</h3>
            <p className="feature__text">{text}</p>
        </div>);
}

export default FeatureItem;