import "./styles/style.css";

const BreadcrumbSmall = ({ title }) => {
    return (
        <div class="breadcrumb">
            <div class="breadcrumb__title"><a class="breadcrumb__text" href="#">{title}</a>
            </div>
        </div>
    );
};

export default BreadcrumbSmall;