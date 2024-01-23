import React, { useContext, useRef } from 'react'
import ContextStore from '../store/contextStore';
import "../css/schedules.css"

const Search = () => {

    const store = useContext(ContextStore);
    const setInputs = store.setInputs;

    let startRef = useRef();
    let finishRef = useRef();
    const hadnelSearch = (e) => {
        let start = startRef.current.value;
        let finish = finishRef.current.value;
        console.log("Lets do it" + start +" "+ finish );
        setInputs({
            start: start,
            finish: finish
        });
        e.preventDefault();
    }
    return (
        <>
            <div className="container my-5" id='search'>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <form className={`row`} onSubmit={hadnelSearch}>
                            <select ref={startRef} id="start" className="form-select input_section" aria-label="Default select example" defaultValue="Start Location">
                                <option value="Start Location">Start Location</option>
                                <option value="SEALDAH">SEALDAH</option>
                                <option value="PHOOLBAGAN">PHOOL BAGAN</option>
                                <option value="SALTLAKESTADIUM">SALT LAKE STADIUM</option>
                                <option value="BENGALCHEMICAL">BENGAL CHEMICAL</option>
                                <option value="CITYCENTER">CITY CENTER</option>
                                <option value="CENTRALPARK">CENTRAL PARK</option>
                                <option value="KARUNAMOYEY">KARUNAMOYEY</option>
                                <option value="SECTORV">SECTORV</option>
                            </select>
                            <select ref={finishRef} id="finish" className="form-select input_section" aria-label="Default select example" defaultValue="Destination Location">
                                <option value="Destination Location">Destination Location</option>
                                <option value="SEALDAH">SEALDAH</option>
                                <option value="PHOOLBAGAN">PHOOL BAGAN</option>
                                <option value="SALTLAKESTADIUM">SALT LAKE STADIUM</option>
                                <option value="BENGALCHEMICAL">BENGAL CHEMICAL</option>
                                <option value="CITYCENTER">CITY CENTER</option>
                                <option value="CENTRALPARK">CENTRAL PARK</option>
                                <option value="KARUNAMOYEY">KARUNAMOYEY</option>
                                <option value="SECTORV">SECTORV</option>
                            </select>
                            <button  className="btn btn-primary">Search</button>
                        </form>
                        
                    </div>
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Effortless Metro Schedule Search</h1>
                        <p className="lead">Find your route, discover timings, and plan your journey seamlessly</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search