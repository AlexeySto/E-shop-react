import Product from "./../Product";

const ProductsList = ({ products }) => {
    if (!products || !Array.isArray(products)) {
        return <div>No products available</div>; // Сообщение об отсутствии продуктов
    }
    return (
        <div class="product__box">
            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    );
};

export default ProductsList;