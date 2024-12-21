import {offerCards} from "./../../data/offerCards"
import OfferCard from "./OfferCard";
import "./styles/style.css";

const Offer = () => {
    return (
        <div class="offer">
            {offerCards.map((item) => (
                <OfferCard item={item} />
            ))}
        </div>
    );
};

export default Offer;