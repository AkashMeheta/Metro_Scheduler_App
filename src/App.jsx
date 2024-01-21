import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react"
import HeaderSection from "./components/header"
import Result from "./components/result"
import Search from "./components/search"
import DisplayCard from "./components/displayCard";
import FullSchedule from "./components/fullSchedule";
import Hero from "./components/hero";
import Download from "./components/download";
import Footer from "./components/footer";
import ContextStore from "./store/contextStore";


function App() {
   const listArr = [
      {
         SEALDAH: "6:55",
         PHOOLBAGAN: "6:58",
         SALTLAKESTADIUM: "7:02",
         BENGALCHEMICAL: "7:05",
         CITYCENTER: "7:08",
         CENTRALPARK: "7:10",
         KARUNAMOYEY: "7:12",
         SECTORV: "7:15",
      },
      {
         SEALDAH: "7:15",
         PHOOLBAGAN: "7:18",
         SALTLAKESTADIUM: "7:22",
         BENGALCHEMICAL: "7:25",
         CITYCENTER: "7:28",
         CENTRALPARK: "7:30",
         KARUNAMOYEY: "7:32",
         SECTORV: "7:35",
      },
      {
         SEALDAH: "7:35",
         PHOOLBAGAN: "7:38",
         SALTLAKESTADIUM: "7:42",
         BENGALCHEMICAL: "7:45",
         CITYCENTER: "7:48",
         CENTRALPARK: "7:50",
         KARUNAMOYEY: "7:52",
         SECTORV: "7:55",
      },
      {
         SEALDAH: "7:55",
         PHOOLBAGAN: "7:58",
         SALTLAKESTADIUM: "8:02",
         BENGALCHEMICAL: "8:05",
         CITYCENTER: "8:08",
         CENTRALPARK: "8:10",
         KARUNAMOYEY: "8:12",
         SECTORV: "8:15",
      },
      {
         SEALDAH: "8:15",
         PHOOLBAGAN: "8:18",
         SALTLAKESTADIUM: "8:22",
         BENGALCHEMICAL: "8:25",
         CITYCENTER: "8:28",
         CENTRALPARK: "8:30",
         KARUNAMOYEY: "8:32",
         SECTORV: "8:35",
      },
      {
         SEALDAH: "8:55",
         PHOOLBAGAN: "8:58",
         SALTLAKESTADIUM: "9:02",
         BENGALCHEMICAL: "9:05",
         CITYCENTER: "9:08",
         CENTRALPARK: "9:10",
         KARUNAMOYEY: "9:12",
         SECTORV: "9:15",
      },
   ]
   const [inputs, setInputs] = useState({});
   const [indexVal, setIndexVal] = useState(-1);

   const handelFullList = (index) => {
      setIndexVal(index);
      console.log(`from app ${index}`)
   }
   return (
      <>
         <ContextStore.Provider value={{ listArr, inputs, indexVal, handelFullList, setInputs }}>
            <HeaderSection />
            <Hero />
            <Search />
            {(Object.keys(inputs).length == 0) || <DisplayCard />}
            {indexVal == -1 || <FullSchedule />}
            <Download></Download>
            <Footer></Footer>
         </ContextStore.Provider>
      </>
   )
}

export default App
