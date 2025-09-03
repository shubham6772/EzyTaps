import React, { useEffect, useState } from 'react';
import type { HeaderPropsModel } from "../../../types/componants/header/Header"
import "./Header.scss"

const Header: React.FC<HeaderPropsModel> = ({ brandName, buttons, customClass }) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) { // show line after 10px scroll
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header-container ${scrolled ? "scrolled" : ""} ${customClass}`}>
            <div className="header-brand-name">
                {brandName}
            </div>
            <div className="header-buttons">
                {buttons}
            </div>
        </div>
    );
};

export default Header;
