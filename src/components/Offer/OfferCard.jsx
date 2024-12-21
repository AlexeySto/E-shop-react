const OfferCard = ({item}) => {

    const {id, text, category, img} = item;

    return (
        <a href="product" class="offer__card" key={id}>
            <img class="offer__img" src={img} alt={text} />
            <div class="offer__text">
                <div class="offer__word">{text}</div>
                <div class="offer__word_category">{category}</div>
            </div>
        </a>);
}

export default OfferCard;
