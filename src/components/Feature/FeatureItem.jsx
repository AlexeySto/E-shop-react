const FeatureItem = ({item}) => {

    const {id, title, text, svg} = item;

    return (
        <div class="feature__item" key={id}>
            <a href="#"><img className="feature__img" src={svg} alt={title} /> </a>
            <h3 class="feature__heading">{title}</h3>
            <p class="feature__text">{text}</p>
        </div>);
}

export default FeatureItem;