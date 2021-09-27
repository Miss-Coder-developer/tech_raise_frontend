import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="founder-footer">
            <section className="founder-footer__container">
                <h6 className="founder-footer__content">
                    If you have any questions or need help, please contact us at 
                    <a 
                        href="mailto:supporttom@Funnelnite.com" 
                        target="_blank" 
                        rel="noreferrer noopener"
                    > 
                        supporttom@Funnelnite.com 
                    </a> 
                </h6>
            </section>
        </footer>
    );
};

export default Footer;
