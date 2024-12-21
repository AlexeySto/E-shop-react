import { useEffect, useState } from "react";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Feature from '../components/Feature';
import Filters from '../components/Filters';
import '../styles/style_catalog.css';
import ProductList from '../components/Product/ProductsList';
import Pagination from '../components/Pagination';
import { products } from '../data/products';
import Sort from "../components/Sort";

const CatalogPage = () => {
    const [productsList, setProductsList] = useState([]);
    const [categories, setCategories] = useState(new Set());
    const [brands, setBrands] = useState(new Set());
    const [sizes, setSizes] = useState(new Set());
    const [filterItems, setFilterItems] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSizes, setSelectedSizes] = useState(new Set());
    const [priceRange, setPriceRange] = useState([]);
    const itemsPerPage = 9;

    useEffect(() => {
        document.title = 'Каталог товаров';
        setProductsList(products);
        setFilteredProducts(products);

        const newCategories = new Set();
        const newBrands = new Set();
        const newSizes = new Set();

        let minPrice = Infinity;
        let maxPrice = -Infinity;

        products.forEach(product => {
            newCategories.add(product.name);
            newBrands.add(product.brand);
            newSizes.add(product.size);
            if (product.price < minPrice) minPrice = product.price;
            if (product.price > maxPrice) maxPrice = product.price;
        });


        setCategories(newCategories);
        setBrands(newBrands);
        setSizes(newSizes);
        setSelectedSizes(new Set(newSizes));
        setPriceRange([minPrice, maxPrice]);
        setFilterItems({ "CATEGORY": newCategories, "BRAND": newBrands });
    }, []);


    const handleSizeChange = (size) => {
        const newSelectedSizes = selectedSizes;
        newSelectedSizes.has(size) ? newSelectedSizes.delete(size) : newSelectedSizes.add(size);
        setSelectedSizes(newSelectedSizes);
        handleFilterChange();
    };

    const handlePriceChange = (event) => {
        const newPriceRange = priceRange;
        event.target.id === 'min' ? newPriceRange[0] = event.target.value : newPriceRange[1] = event.target.value;
        setPriceRange(newPriceRange);
        handleFilterChange();
    };


    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
        let newFilteredProducts = productsList;

        if (value) {
            newFilteredProducts = newFilteredProducts.filter(product => {
                if (filterType === 'trending') return product.trending === value;
                return product[filterType] === value;
            });
        }

        setFilteredProducts(newFilteredProducts.filter(product =>
            (selectedSizes.has(product.size)) &&
            (product.price >= priceRange[0] && product.price <= priceRange[1])));

    };

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


    return (
        <>
            <Breadcrumb />
            <div className="sort">
                <Filters  filterItems={filterItems} />
                <Sort
                    sizes={sizes}
                    priceRange={priceRange}
                    onSelectedTrending={handleFilterChange}
                    selectedSizes={Array.from(selectedSizes)}
                    onSizeChange={handleSizeChange}
                    onPriceChange={handlePriceChange}
                />
            </div>
            <ProductList products={currentProducts} />
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            <Feature />
        </>
    );
};

export default CatalogPage;
