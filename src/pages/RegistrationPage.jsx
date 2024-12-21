import { useEffect } from 'react';
import BreadcrumbSmall from '../components/Breadcrumb/BreadcrumbSmall';
import '../styles/style.css';


import Registration from '../components/Registration';

const RegistrationPage = () => {
    useEffect(() => {
        document.title = 'Регистрация';
    });

    return (
        <div className="desktop_index">
            <BreadcrumbSmall title='REGISTRATION' />
            <Registration />
        </div>
    );
};

export default RegistrationPage;