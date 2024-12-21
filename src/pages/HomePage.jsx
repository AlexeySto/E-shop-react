import { useEffect} from 'react';
import Preview from '../components/Preview';
import Offer from '../components/Offer';
import Feature from '../components/Feature';
import '../styles/style.css';
import { products } from '../data/products';
import ProductsList from '../components/Product/ProductsList';


const HomePage = () => {
    useEffect(() => {
            document.title = 'Главная';
    });

    const productsOnPage = 6;

    const getRandomProducts = (arr, num) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const randomProducts = getRandomProducts(products, productsOnPage);

    return (
        <div className="desktop_index">
            <Preview />
            <Offer />
            <div class="products">
            <div class="products__title">
                <div class="products__text">Fetured Items</div>
                <div class="products__text">Shop for items based on what we featured in this week</div>
            </div>
            <ProductsList products={randomProducts} />
            <a class="button" href="catalog">Browse All Product</a>
        </div>
            <Feature />
        </div>
    );
};

export default HomePage;
