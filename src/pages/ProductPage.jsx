import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import '../styles/style_product.css';


const ProductPage = () => {
    useEffect(() => {
        document.title = 'Продукт';
    });

    return (
        <div className="desktop_index">
            <Breadcrumb />
        </div>
    );
};

export default ProductPage;
