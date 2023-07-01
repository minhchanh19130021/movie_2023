import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-[1200px] mx-auto py-6 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img className="mr-4 object-cover" src="https://fptplay.vn/images/logo-2.png" alt="Logo" />
                </div>
                <div className="flex items-center">
                    <div className="mr-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-white transition-colors duration-300 hover:text-blue-500"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-white transition-colors duration-300 hover:text-blue-400"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-white transition-colors duration-300 hover:text-pink-500"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <button className="text-sm font-bold uppercase text-white focus:outline-none">
                        Back to top
                        <i className="fas fa-chevron-up ml-1"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
