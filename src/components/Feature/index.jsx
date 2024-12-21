import {featureItems} from "./../../data/featureItems"
import FeatureItem from "./FeatureItem";
import "./styles/style.css";

const Feature = () => {
    return (
        <div class="feature">
            {featureItems.map((item) => (
                <FeatureItem item={item} />
            ))}
        </div>
    );
};

export default Feature;