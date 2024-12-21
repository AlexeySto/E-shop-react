import "./styles/style.css";

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__title"><a className="breadcrumb__text" href="#">NEW ARRIVALS</a>
            </div>
            <nav className="breadcrumb__path">
                <ul className="breadcrumb__ul">
                    <li className="breadcrumb__li"><a className="breadcrumb__link" href="#">HOME</a></li>
                    <li className="breadcrumb__li"><a className="breadcrumb__link" href="#">MEN</a></li>
                    <li className="breadcrumb__li"><a className="breadcrumb__link" href="#">NEW ARRIVALS</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumb;