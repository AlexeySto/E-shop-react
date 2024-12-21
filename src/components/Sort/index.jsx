import "./styles/style.css";

const SortDetails = ({ summary, children }) => {
    return (
        <details>
            <summary>{summary}<svg width="10.02" height="5.046" fill="none"><path d="M5 5.04c-.17 0-.33-.06-.46-.17L.25 1.27A.753.753 0 0 1 0 .78.722.722 0 0 1 .64 0c.19-.02.38.04.53.16L5 3.39 8.83.28c.07-.06.15-.11.24-.13.09-.03.19-.04.28-.03.1.01.19.04.27.08.08.05.16.11.21.18.07.08.12.17.15.26s.04.19.03.29c-.01.1-.04.2-.08.28a.74.74 0 0 1-.2.23L5.45 4.92a.73.73 0 0 1-.45.12z" fill="#6F6E6E" /></svg></summary>
            <div className="sort__list">
                {children}
            </div>
        </details>
    );
};

const Sort = ({ 
    sizes, 
    priceRange, 
    onSelectedTrending, 
    selectedSizes, 
    onSizeChange, 
    onPriceChange 
}) => {
    return ( 
        <div className="sort__box">
            <SortDetails summary="TRENDING NOW">
                <span onClick={() => onSelectedTrending('trending', true)}>Trending Now</span>
                <span onClick={() => onSelectedTrending('trending', false)}>All</span>
            </SortDetails>
            <SortDetails summary="SIZE">
                {Array.from(sizes).map((size) => (
                    <label className="sort__label" key={size}>
                        <input
                            type="checkbox"
                            checked={selectedSizes.includes(size)}
                            onChange={() => onSizeChange(size)}
                        />
                        {size}
                    </label>
                ))}
            </SortDetails>
            <SortDetails summary="PRICE">
                <label className="sort__label">
                    <input id="min" type="number" min={0} step={10} max={priceRange[1]} onChange={(e) => onPriceChange(e)} value={priceRange[0]} />MIN
                </label>
                <label className="sort__label">
                    <input id="max" type="number" min={priceRange[0]} step={10} onChange={(e) => onPriceChange(e)} value={priceRange[1]} />MAX
                </label>
            </SortDetails>
        </div>
    );
};

export default Sort;
