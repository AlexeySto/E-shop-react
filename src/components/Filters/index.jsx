import "./styles/style.css";

const Filters = ({ filterItems }) => {
    return (
        <div className="filter">
            <details className="details__filter">
                <summary className="filter__text">FILTER<svg className="filter__svg" width="15.000000" height="10.000000" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector_filter" d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z" fill-opacity="1.000000" fill-rule="nonzero" />
                </svg></summary>
                <div className="filter_box">
                    {Object.keys(filterItems).map((key) => (
                        <details className="details__filter_box">
                            <summary><svg width="5" height="37" fill="none"><path d="M0 0h5v37H0V0z" fill="#EF5B70" fill-rule="evenodd" /></svg>{key}
                            </summary>
                            <div className="filter_box__list">
                                {Array.from(filterItems[key]).map(item => (
                                    <label className="filter_box__link" key={item}>
                                        <input
                                            type="checkbox"
                                            style={{ opacity: 0 }}
                                        />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        </details>
                    ))}
                </div>
            </details>
        </div>
    );
}

export default Filters;