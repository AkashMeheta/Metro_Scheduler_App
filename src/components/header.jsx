import { useState } from "react";

const HeaderSection = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        <span className="fs-4"><h2>Metro Partner</h2></span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a onClick={()=>handleLinkClick("home")} href="#home" className={` nav-link ${activeLink === 'home' ? 'active' : ''}`} aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#search" onClick={()=>handleLinkClick("search")} className={` nav-link ${activeLink === 'search' ? 'active' : ''}`}>Search</a></li>
                        <li className="nav-item"><a href="#download" onClick={()=>handleLinkClick("download")} className={` nav-link ${activeLink === 'download' ? 'active' : ''}`}>Download</a></li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default HeaderSection;