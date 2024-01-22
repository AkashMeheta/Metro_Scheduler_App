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
import DisplaySchedule from "./components/displaySchedule";


function App() {
  const DOWNlistArr =
    [
      {
        SECTORV: "7:00",
        KARUNAMOYEY: "7:03",
        CENTRALPARK: "7:05",
        CITYCENTER: "7:07",
        BENGALCHEMICAL: "7:10",
        SALTLAKESTADIUM: "7:12",
        PHOOLBAGAN: "7:16",
        SEALDAH: "7:20"
      },
      {
        SECTORV: "7:20",
        KARUNAMOYEY: "7:23",
        CENTRALPARK: "7:25",
        CITYCENTER: "7:27",
        BENGALCHEMICAL: "7:30",
        SALTLAKESTADIUM: "7:32",
        PHOOLBAGAN: "7:36",
        SEALDAH: "7:40"
      },
      {
        SECTORV: "7:40",
        KARUNAMOYEY: "7:43",
        CENTRALPARK: "7:45",
        CITYCENTER: "7:47",
        BENGALCHEMICAL: "7:50",
        SALTLAKESTADIUM: "7:52",
        PHOOLBAGAN: "7:56",
        SEALDAH: "8:00"
      },
      {
        SECTORV: "8:00",
        KARUNAMOYEY: "8:03",
        CENTRALPARK: "8:05",
        CITYCENTER: "8:07",
        BENGALCHEMICAL: "8:10",
        SALTLAKESTADIUM: "8:12",
        PHOOLBAGAN: "8:16",
        SEALDAH: "8:20"
      },
      {
        SECTORV: "8:20",
        KARUNAMOYEY: "8:23",
        CENTRALPARK: "8:25",
        CITYCENTER: "8:27",
        BENGALCHEMICAL: "8:30",
        SALTLAKESTADIUM: "8:32",
        PHOOLBAGAN: "8:36",
        SEALDAH: "8:40"
      },
      {
        SECTORV: "8:40",
        KARUNAMOYEY: "8:43",
        CENTRALPARK: "8:45",
        CITYCENTER: "8:47",
        BENGALCHEMICAL: "8:50",
        SALTLAKESTADIUM: "8:52",
        PHOOLBAGAN: "8:56",
        SEALDAH: "9:00"
      },
      {
        SECTORV: "9:00",
        KARUNAMOYEY: "9:03",
        CENTRALPARK: "9:05",
        CITYCENTER: "9:07",
        BENGALCHEMICAL: "9:10",
        SALTLAKESTADIUM: "9:12",
        PHOOLBAGAN: "9:16",
        SEALDAH: "9:20"
      },
      {
        SECTORV: "9:15",
        KARUNAMOYEY: "9:18",
        CENTRALPARK: "9:20",
        CITYCENTER: "9:22",
        BENGALCHEMICAL: "9:25",
        SALTLAKESTADIUM: "9:27",
        PHOOLBAGAN: "9:31",
        SEALDAH: "9:35"
      },
      {
        SECTORV: "9:30",
        KARUNAMOYEY: "9:33",
        CENTRALPARK: "9:35",
        CITYCENTER: "9:37",
        BENGALCHEMICAL: "9:40",
        SALTLAKESTADIUM: "9:42",
        PHOOLBAGAN: "9:46",
        SEALDAH: "9:50"
      },
      {
        SECTORV: "9:45",
        KARUNAMOYEY: "9:48",
        CENTRALPARK: "9:50",
        CITYCENTER: "9:52",
        BENGALCHEMICAL: "9:55",
        SALTLAKESTADIUM: "9:57",
        PHOOLBAGAN: "10:01",
        SEALDAH: "10:05"
      },
      {
        SECTORV: "10:00",
        KARUNAMOYEY: "10:03",
        CENTRALPARK: "10:05",
        CITYCENTER: "10:07",
        BENGALCHEMICAL: "10:10",
        SALTLAKESTADIUM: "10:12",
        PHOOLBAGAN: "10:16",
        SEALDAH: "10:20"
      },
      {
        SECTORV: "10:15",
        KARUNAMOYEY: "10:18",
        CENTRALPARK: "10:20",
        CITYCENTER: "10:22",
        BENGALCHEMICAL: "10:25",
        SALTLAKESTADIUM: "10:27",
        PHOOLBAGAN: "10:31",
        SEALDAH: "10:35"
      },
      {
        SECTORV: "10:30",
        KARUNAMOYEY: "10:33",
        CENTRALPARK: "10:35",
        CITYCENTER: "10:37",
        BENGALCHEMICAL: "10:40",
        SALTLAKESTADIUM: "10:42",
        PHOOLBAGAN: "10:46",
        SEALDAH: "10:50"
      },
      {
        SECTORV: "10:45",
        KARUNAMOYEY: "10:48",
        CENTRALPARK: "10:50",
        CITYCENTER: "10:52",
        BENGALCHEMICAL: "10:55",
        SALTLAKESTADIUM: "10:57",
        PHOOLBAGAN: "11:01",
        SEALDAH: "11:05"
      },
      {
        SECTORV: "11:00",
        KARUNAMOYEY: "11:03",
        CENTRALPARK: "11:05",
        CITYCENTER: "11:07",
        BENGALCHEMICAL: "11:10",
        SALTLAKESTADIUM: "11:12",
        PHOOLBAGAN: "11:16",
        SEALDAH: "11:20"
      },
      {
        SECTORV: "11:20",
        KARUNAMOYEY: "11:23",
        CENTRALPARK: "11:25",
        CITYCENTER: "11:27",
        BENGALCHEMICAL: "11:30",
        SALTLAKESTADIUM: "11:32",
        PHOOLBAGAN: "11:36",
        SEALDAH: "11:40"
      },
      {
        SECTORV: "11:40",
        KARUNAMOYEY: "11:43",
        CENTRALPARK: "11:45",
        CITYCENTER: "11:47",
        BENGALCHEMICAL: "11:50",
        SALTLAKESTADIUM: "11:52",
        PHOOLBAGAN: "11:56",
        SEALDAH: "12:00"
      },
      {
        SECTORV: "12:00",
        KARUNAMOYEY: "12:03",
        CENTRALPARK: "12:05",
        CITYCENTER: "12:07",
        BENGALCHEMICAL: "12:10",
        SALTLAKESTADIUM: "12:12",
        PHOOLBAGAN: "12:16",
        SEALDAH: "12:20"
      },
      {
        SECTORV: "12:20",
        KARUNAMOYEY: "12:23",
        CENTRALPARK: "12:25",
        CITYCENTER: "12:27",
        BENGALCHEMICAL: "12:30",
        SALTLAKESTADIUM: "12:32",
        PHOOLBAGAN: "12:36",
        SEALDAH: "12:40"
      },
      {
        SECTORV: "12:40",
        KARUNAMOYEY: "12:43",
        CENTRALPARK: "12:45",
        CITYCENTER: "12:47",
        BENGALCHEMICAL: "12:50",
        SALTLAKESTADIUM: "12:52",
        PHOOLBAGAN: "12:56",
        SEALDAH: "13:00"
      },
      {
        SECTORV: "13:00",
        KARUNAMOYEY: "13:03",
        CENTRALPARK: "13:05",
        CITYCENTER: "13:07",
        BENGALCHEMICAL: "13:10",
        SALTLAKESTADIUM: "13:12",
        PHOOLBAGAN: "13:16",
        SEALDAH: "13:20"
      },
      {
        SECTORV: "13:20",
        KARUNAMOYEY: "13:23",
        CENTRALPARK: "13:25",
        CITYCENTER: "13:27",
        BENGALCHEMICAL: "13:30",
        SALTLAKESTADIUM: "13:32",
        PHOOLBAGAN: "13:36",
        SEALDAH: "13:40"
      },
      {
        SECTORV: "13:40",
        KARUNAMOYEY: "13:43",
        CENTRALPARK: "13:45",
        CITYCENTER: "13:47",
        BENGALCHEMICAL: "13:50",
        SALTLAKESTADIUM: "13:52",
        PHOOLBAGAN: "13:56",
        SEALDAH: "14:00"
      },
      {
        SECTORV: "14:00",
        KARUNAMOYEY: "14:03",
        CENTRALPARK: "14:05",
        CITYCENTER: "14:07",
        BENGALCHEMICAL: "14:10",
        SALTLAKESTADIUM: "14:12",
        PHOOLBAGAN: "14:16",
        SEALDAH: "14:20"
      },
      {
        SECTORV: "14:20",
        KARUNAMOYEY: "14:23",
        CENTRALPARK: "14:25",
        CITYCENTER: "14:27",
        BENGALCHEMICAL: "14:30",
        SALTLAKESTADIUM: "14:32",
        PHOOLBAGAN: "14:36",
        SEALDAH: "14:40"
      },
      {
        SECTORV: "14:40",
        KARUNAMOYEY: "14:43",
        CENTRALPARK: "14:45",
        CITYCENTER: "14:47",
        BENGALCHEMICAL: "14:50",
        SALTLAKESTADIUM: "14:52",
        PHOOLBAGAN: "14:56",
        SEALDAH: "15:00"
      },
      {
        SECTORV: "15:00",
        KARUNAMOYEY: "15:03",
        CENTRALPARK: "15:05",
        CITYCENTER: "15:07",
        BENGALCHEMICAL: "15:10",
        SALTLAKESTADIUM: "15:12",
        PHOOLBAGAN: "15:16",
        SEALDAH: "15:20"
      },
      {
        SECTORV: "15:20",
        KARUNAMOYEY: "15:23",
        CENTRALPARK: "15:25",
        CITYCENTER: "15:27",
        BENGALCHEMICAL: "15:30",
        SALTLAKESTADIUM: "15:32",
        PHOOLBAGAN: "15:36",
        SEALDAH: "15:40"
      },
      {
        SECTORV: "15:40",
        KARUNAMOYEY: "15:43",
        CENTRALPARK: "15:45",
        CITYCENTER: "15:47",
        BENGALCHEMICAL: "15:50",
        SALTLAKESTADIUM: "15:52",
        PHOOLBAGAN: "15:56",
        SEALDAH: "16:00"
      },
      {
        SECTORV: "16:00",
        KARUNAMOYEY: "16:03",
        CENTRALPARK: "16:05",
        CITYCENTER: "16:07",
        BENGALCHEMICAL: "16:10",
        SALTLAKESTADIUM: "16:12",
        PHOOLBAGAN: "16:16",
        SEALDAH: "16:20"
      },
      {
        SECTORV: "16:20",
        KARUNAMOYEY: "16:23",
        CENTRALPARK: "16:25",
        CITYCENTER: "16:27",
        BENGALCHEMICAL: "16:30",
        SALTLAKESTADIUM: "16:32",
        PHOOLBAGAN: "16:36",
        SEALDAH: "16:40"
      },
      {
        SECTORV: "16:40",
        KARUNAMOYEY: "16:43",
        CENTRALPARK: "16:45",
        CITYCENTER: "16:47",
        BENGALCHEMICAL: "16:50",
        SALTLAKESTADIUM: "16:52",
        PHOOLBAGAN: "16:56",
        SEALDAH: "17:00"
      },
      {
        SECTORV: "16:52",
        KARUNAMOYEY: "16:55",
        CENTRALPARK: "16:57",
        CITYCENTER: "16:59",
        BENGALCHEMICAL: "17:02",
        SALTLAKESTADIUM: "17:04",
        PHOOLBAGAN: "17:08",
        SEALDAH: "17:12"
      },
      {
        SECTORV: "17:04",
        KARUNAMOYEY: "17:07",
        CENTRALPARK: "17:09",
        CITYCENTER: "17:11",
        BENGALCHEMICAL: "17:14",
        SALTLAKESTADIUM: "17:16",
        PHOOLBAGAN: "17:20",
        SEALDAH: "17:24"
      },
      {
        SECTORV: "17:16",
        KARUNAMOYEY: "17:19",
        CENTRALPARK: "17:21",
        CITYCENTER: "17:23",
        BENGALCHEMICAL: "17:26",
        SALTLAKESTADIUM: "17:28",
        PHOOLBAGAN: "17:32",
        SEALDAH: "17:36"
      },
      {
        SECTORV: "17:28",
        KARUNAMOYEY: "17:30",
        CENTRALPARK: "17:32",
        CITYCENTER: "17:34",
        BENGALCHEMICAL: "17:37",
        SALTLAKESTADIUM: "17:40",
        PHOOLBAGAN: "17:44",
        SEALDAH: "17:48"
      },
      {
        SECTORV: "17:40",
        KARUNAMOYEY: "17:43",
        CENTRALPARK: "17:45",
        CITYCENTER: "17:47",
        BENGALCHEMICAL: "17:50",
        SALTLAKESTADIUM: "17:52",
        PHOOLBAGAN: "17:56",
        SEALDAH: "18:00"
      },
      {
        SECTORV: "17:52",
        KARUNAMOYEY: "17:55",
        CENTRALPARK: "17:57",
        CITYCENTER: "17:59",
        BENGALCHEMICAL: "18:02",
        SALTLAKESTADIUM: "18:04",
        PHOOLBAGAN: "18:08",
        SEALDAH: "18:12"
      },
      {
        SECTORV: "18:04",
        KARUNAMOYEY: "18:07",
        CENTRALPARK: "18:09",
        CITYCENTER: "18:11",
        BENGALCHEMICAL: "18:14",
        SALTLAKESTADIUM: "18:16",
        PHOOLBAGAN: "18:20",
        SEALDAH: "18:24"
      },
      {
        SECTORV: "18:16",
        KARUNAMOYEY: "18:19",
        CENTRALPARK: "18:21",
        CITYCENTER: "18:23",
        BENGALCHEMICAL: "18:26",
        SALTLAKESTADIUM: "18:28",
        PHOOLBAGAN: "18:32",
        SEALDAH: "18:36"
      },
      {
        SECTORV: "18:28",
        KARUNAMOYEY: "18:30",
        CENTRALPARK: "18:32",
        CITYCENTER: "18:34",
        BENGALCHEMICAL: "18:37",
        SALTLAKESTADIUM: "18:40",
        PHOOLBAGAN: "18:44",
        SEALDAH: "18:48"
      },
      {
        SECTORV: "18:40",
        KARUNAMOYEY: "18:43",
        CENTRALPARK: "18:45",
        CITYCENTER: "18:47",
        BENGALCHEMICAL: "18:50",
        SALTLAKESTADIUM: "18:52",
        PHOOLBAGAN: "18:56",
        SEALDAH: "19:00"
      },
      {
        SECTORV: "18:52",
        KARUNAMOYEY: "18:55",
        CENTRALPARK: "18:57",
        CITYCENTER: "18:59",
        BENGALCHEMICAL: "19:02",
        SALTLAKESTADIUM: "19:04",
        PHOOLBAGAN: "19:08",
        SEALDAH: "19:12"
      },
      {
        SECTORV: "19:04",
        KARUNAMOYEY: "19:07",
        CENTRALPARK: "19:09",
        CITYCENTER: "19:11",
        BENGALCHEMICAL: "19:14",
        SALTLAKESTADIUM: "19:16",
        PHOOLBAGAN: "19:20",
        SEALDAH: "19:24"
      },
      {
        SECTORV: "19:16",
        KARUNAMOYEY: "19:19",
        CENTRALPARK: "19:21",
        CITYCENTER: "19:23",
        BENGALCHEMICAL: "19:26",
        SALTLAKESTADIUM: "19:28",
        PHOOLBAGAN: "19:32",
        SEALDAH: "19:36"
      },
      {
        SECTORV: "19:28",
        KARUNAMOYEY: "19:30",
        CENTRALPARK: "19:32",
        CITYCENTER: "19:34",
        BENGALCHEMICAL: "19:37",
        SALTLAKESTADIUM: "19:40",
        PHOOLBAGAN: "19:44",
        SEALDAH: "19:48"
      },
      {
        SECTORV: "19:40",
        KARUNAMOYEY: "19:43",
        CENTRALPARK: "19:45",
        CITYCENTER: "19:47",
        BENGALCHEMICAL: "19:50",
        SALTLAKESTADIUM: "19:52",
        PHOOLBAGAN: "19:56",
        SEALDAH: "20:00"
      },
      {
        SECTORV: "20:00",
        KARUNAMOYEY: "20:03",
        CENTRALPARK: "20:05",
        CITYCENTER: "20:07",
        BENGALCHEMICAL: "20:10",
        SALTLAKESTADIUM: "20:12",
        PHOOLBAGAN: "20:16",
        SEALDAH: "20:20"
      },
      {
        SECTORV: "20:20",
        KARUNAMOYEY: "20:23",
        CENTRALPARK: "20:25",
        CITYCENTER: "20:27",
        BENGALCHEMICAL: "20:30",
        SALTLAKESTADIUM: "20:32",
        PHOOLBAGAN: "20:36",
        SEALDAH: "20:40"
      },
      {
        SECTORV: "20:40",
        KARUNAMOYEY: "20:43",
        CENTRALPARK: "20:45",
        CITYCENTER: "20:47",
        BENGALCHEMICAL: "20:50",
        SALTLAKESTADIUM: "20:52",
        PHOOLBAGAN: "20:56",
        SEALDAH: "21:00"
      },
      {
        SECTORV: "21:00",
        KARUNAMOYEY: "21:03",
        CENTRALPARK: "21:05",
        CITYCENTER: "21:07",
        BENGALCHEMICAL: "21:10",
        SALTLAKESTADIUM: "21:12",
        PHOOLBAGAN: "21:16",
        SEALDAH: "21:20"
      },
      {
        SECTORV: "21:20",
        KARUNAMOYEY: "21:23",
        CENTRALPARK: "21:25",
        CITYCENTER: "21:27",
        BENGALCHEMICAL: "21:30",
        SALTLAKESTADIUM: "21:32",
        PHOOLBAGAN: "21:36",
        SEALDAH: "21:40"
      },
      {
        SECTORV: "21:40",
        KARUNAMOYEY: "21:43",
        CENTRALPARK: "21:45",
        CITYCENTER: "21:47",
        BENGALCHEMICAL: "21:50",
        SALTLAKESTADIUM: "21:52",
        PHOOLBAGAN: "21:56",
        SEALDAH: "22:00"
      }
    ]
  const listArr = [
    {
      SEALDAH: "6:55",
      PHOOLBAGAN: "6:58",
      SALTLAKESTADIUM: "7:02",
      BENGALCHEMICAL: "7:05",
      CITYCENTER: "7:08",
      CENTRALPARK: "7:10",
      KARUNAMOYEY: "7:12",
      SECTORV: "7:15"
    },
    {
      SEALDAH: "7:15",
      PHOOLBAGAN: "7:18",
      SALTLAKESTADIUM: "7:22",
      BENGALCHEMICAL: "7:25",
      CITYCENTER: "7:28",
      CENTRALPARK: "7:30",
      KARUNAMOYEY: "7:32",
      SECTORV: "7:35"
    },
    {
      SEALDAH: "7:35",
      PHOOLBAGAN: "7:38",
      SALTLAKESTADIUM: "7:42",
      BENGALCHEMICAL: "7:45",
      CITYCENTER: "7:48",
      CENTRALPARK: "7:50",
      KARUNAMOYEY: "7:52",
      SECTORV: "7:55"
    },
    {
      SEALDAH: "7:55",
      PHOOLBAGAN: "7:58",
      SALTLAKESTADIUM: "8:02",
      BENGALCHEMICAL: "8:05",
      CITYCENTER: "8:08",
      CENTRALPARK: "8:10",
      KARUNAMOYEY: "8:12",
      SECTORV: "8:15"
    },
    {
      SEALDAH: "8:15",
      PHOOLBAGAN: "8:18",
      SALTLAKESTADIUM: "8:22",
      BENGALCHEMICAL: "8:25",
      CITYCENTER: "8:28",
      CENTRALPARK: "8:30",
      KARUNAMOYEY: "8:32",
      SECTORV: "8:35"
    },
    {
      SEALDAH: "8:35",
      PHOOLBAGAN: "8:38",
      SALTLAKESTADIUM: "8:42",
      BENGALCHEMICAL: "8:45",
      CITYCENTER: "8:48",
      CENTRALPARK: "8:50",
      KARUNAMOYEY: "8:52",
      SECTORV: "8:55"
    },
    {
      SEALDAH: "8:55",
      PHOOLBAGAN: "8:58",
      SALTLAKESTADIUM: "9:02",
      BENGALCHEMICAL: "9:05",
      CITYCENTER: "9:08",
      CENTRALPARK: "9:10",
      KARUNAMOYEY: "9:12",
      SECTORV: "9:15"
    },
    {
      SEALDAH: "9:10",
      PHOOLBAGAN: "9:13",
      SALTLAKESTADIUM: "9:17",
      BENGALCHEMICAL: "9:20",
      CITYCENTER: "9:23",
      CENTRALPARK: "9:25",
      KARUNAMOYEY: "9:27",
      SECTORV: "9:30"
    },
    {
      SEALDAH: "9:25",
      PHOOLBAGAN: "9:28",
      SALTLAKESTADIUM: "9:32",
      BENGALCHEMICAL: "9:35",
      CITYCENTER: "9:38",
      CENTRALPARK: "9:40",
      KARUNAMOYEY: "9:42",
      SECTORV: "9:45"
    },
    {
      SEALDAH: "9:40",
      PHOOLBAGAN: "9:43",
      SALTLAKESTADIUM: "9:47",
      BENGALCHEMICAL: "9:50",
      CITYCENTER: "9:53",
      CENTRALPARK: "9:55",
      KARUNAMOYEY: "9:57",
      SECTORV: "10:00"
    },
    {
      SEALDAH: "9:55",
      PHOOLBAGAN: "9:58",
      SALTLAKESTADIUM: "10:02",
      BENGALCHEMICAL: "10:05",
      CITYCENTER: "10:08",
      CENTRALPARK: "10:10",
      KARUNAMOYEY: "10:12",
      SECTORV: "10:15"
    },
    {
      SEALDAH: "10:10",
      PHOOLBAGAN: "10:13",
      SALTLAKESTADIUM: "10:17",
      BENGALCHEMICAL: "10:20",
      CITYCENTER: "10:23",
      CENTRALPARK: "10:25",
      KARUNAMOYEY: "10:27",
      SECTORV: "10:30"
    },
    {
      SEALDAH: "10:25",
      PHOOLBAGAN: "10:28",
      SALTLAKESTADIUM: "10:32",
      BENGALCHEMICAL: "10:35",
      CITYCENTER: "10:38",
      CENTRALPARK: "10:40",
      KARUNAMOYEY: "10:42",
      SECTORV: "10:45"
    },
    {
      SEALDAH: "10:40",
      PHOOLBAGAN: "10:43",
      SALTLAKESTADIUM: "10:47",
      BENGALCHEMICAL: "10:50",
      CITYCENTER: "10:53",
      CENTRALPARK: "10:55",
      KARUNAMOYEY: "10:57",
      SECTORV: "11:00"
    },
    {
      SEALDAH: "10:55",
      PHOOLBAGAN: "10:58",
      SALTLAKESTADIUM: "11:02",
      BENGALCHEMICAL: "11:05",
      CITYCENTER: "11:08",
      CENTRALPARK: "11:10",
      KARUNAMOYEY: "11:12",
      SECTORV: "11:15"
    },
    {
      SEALDAH: "11:15",
      PHOOLBAGAN: "11:18",
      SALTLAKESTADIUM: "11:22",
      BENGALCHEMICAL: "11:25",
      CITYCENTER: "11:28",
      CENTRALPARK: "11:30",
      KARUNAMOYEY: "11:32",
      SECTORV: "11:35"
    },
    {
      SEALDAH: "11:35",
      PHOOLBAGAN: "11:38",
      SALTLAKESTADIUM: "11:42",
      BENGALCHEMICAL: "11:45",
      CITYCENTER: "11:48",
      CENTRALPARK: "11:50",
      KARUNAMOYEY: "11:52",
      SECTORV: "11:55"
    },
    {
      SEALDAH: "11:55",
      PHOOLBAGAN: "11:58",
      SALTLAKESTADIUM: "12:02",
      BENGALCHEMICAL: "12:05",
      CITYCENTER: "12:08",
      CENTRALPARK: "12:10",
      KARUNAMOYEY: "12:12",
      SECTORV: "12:15"
    },
    {
      SEALDAH: "12:15",
      PHOOLBAGAN: "12:18",
      SALTLAKESTADIUM: "12:22",
      BENGALCHEMICAL: "12:25",
      CITYCENTER: "12:28",
      CENTRALPARK: "12:30",
      KARUNAMOYEY: "12:32",
      SECTORV: "12:35"
    },
    {
      SEALDAH: "12:35",
      PHOOLBAGAN: "12:38",
      SALTLAKESTADIUM: "12:42",
      BENGALCHEMICAL: "12:45",
      CITYCENTER: "12:48",
      CENTRALPARK: "12:50",
      KARUNAMOYEY: "12:52",
      SECTORV: "12:55"
    },
    {
      SEALDAH: "12:55",
      PHOOLBAGAN: "12:58",
      SALTLAKESTADIUM: "13:02",
      BENGALCHEMICAL: "13:05",
      CITYCENTER: "13:08",
      CENTRALPARK: "13:10",
      KARUNAMOYEY: "13:12",
      SECTORV: "13:15"
    },
    {
      SEALDAH: "13:15",
      PHOOLBAGAN: "13:18",
      SALTLAKESTADIUM: "13:22",
      BENGALCHEMICAL: "13:25",
      CITYCENTER: "13:28",
      CENTRALPARK: "13:30",
      KARUNAMOYEY: "13:32",
      SECTORV: "13:35"
    },
    {
      SEALDAH: "13:35",
      PHOOLBAGAN: "13:38",
      SALTLAKESTADIUM: "13:42",
      BENGALCHEMICAL: "13:45",
      CITYCENTER: "13:48",
      CENTRALPARK: "13:50",
      KARUNAMOYEY: "13:52",
      SECTORV: "13:55"
    },
    {
      SEALDAH: "13:55",
      PHOOLBAGAN: "13:58",
      SALTLAKESTADIUM: "14:02",
      BENGALCHEMICAL: "14:05",
      CITYCENTER: "14:08",
      CENTRALPARK: "14:10",
      KARUNAMOYEY: "14:12",
      SECTORV: "14:15"
    },
    {
      SEALDAH: "14:15",
      PHOOLBAGAN: "14:18",
      SALTLAKESTADIUM: "14:22",
      BENGALCHEMICAL: "14:25",
      CITYCENTER: "14:28",
      CENTRALPARK: "14:30",
      KARUNAMOYEY: "14:32",
      SECTORV: "14:35"
    },
    {
      SEALDAH: "14:35",
      PHOOLBAGAN: "14:38",
      SALTLAKESTADIUM: "14:42",
      BENGALCHEMICAL: "14:45",
      CITYCENTER: "14:48",
      CENTRALPARK: "14:50",
      KARUNAMOYEY: "14:52",
      SECTORV: "14:55"
    },
    {
      SEALDAH: "14:55",
      PHOOLBAGAN: "14:58",
      SALTLAKESTADIUM: "15:02",
      BENGALCHEMICAL: "15:05",
      CITYCENTER: "15:08",
      CENTRALPARK: "15:10",
      KARUNAMOYEY: "15:12",
      SECTORV: "15:15"
    },
    {
      SEALDAH: "15:15",
      PHOOLBAGAN: "15:18",
      SALTLAKESTADIUM: "15:22",
      BENGALCHEMICAL: "15:25",
      CITYCENTER: "15:28",
      CENTRALPARK: "15:30",
      KARUNAMOYEY: "15:32",
      SECTORV: "15:35"
    },
    {
      SEALDAH: "15:35",
      PHOOLBAGAN: "15:38",
      SALTLAKESTADIUM: "15:42",
      BENGALCHEMICAL: "15:45",
      CITYCENTER: "15:48",
      CENTRALPARK: "15:50",
      KARUNAMOYEY: "15:52",
      SECTORV: "15:55"
    },
    {
      SEALDAH: "15:55",
      PHOOLBAGAN: "15:58",
      SALTLAKESTADIUM: "16:02",
      BENGALCHEMICAL: "16:05",
      CITYCENTER: "16:08",
      CENTRALPARK: "16:10",
      KARUNAMOYEY: "16:12",
      SECTORV: "16:15"
    },
    {
      SEALDAH: "16:15",
      PHOOLBAGAN: "16:18",
      SALTLAKESTADIUM: "16:22",
      BENGALCHEMICAL: "16:25",
      CITYCENTER: "16:28",
      CENTRALPARK: "16:30",
      KARUNAMOYEY: "16:32",
      SECTORV: "16:35"
    },
    {
      SEALDAH: "16:35",
      PHOOLBAGAN: "16:38",
      SALTLAKESTADIUM: "16:42",
      BENGALCHEMICAL: "16:45",
      CITYCENTER: "16:48",
      CENTRALPARK: "16:50",
      KARUNAMOYEY: "16:52",
      SECTORV: "16:55"
    },
    {
      SEALDAH: "16:55",
      PHOOLBAGAN: "16:58",
      SALTLAKESTADIUM: "17:02",
      BENGALCHEMICAL: "17:05",
      CITYCENTER: "17:08",
      CENTRALPARK: "17:10",
      KARUNAMOYEY: "17:12",
      SECTORV: "17:15"
    },
    {
      SEALDAH: "17:07",
      PHOOLBAGAN: "17:10",
      SALTLAKESTADIUM: "17:14",
      BENGALCHEMICAL: "17:17",
      CITYCENTER: "17:20",
      CENTRALPARK: "17:22",
      KARUNAMOYEY: "17:24",
      SECTORV: "17:27"
    },
    {
      SEALDAH: "17:19",
      PHOOLBAGAN: "17:22",
      SALTLAKESTADIUM: "17:26",
      BENGALCHEMICAL: "17:29",
      CITYCENTER: "17:32",
      CENTRALPARK: "17:34",
      KARUNAMOYEY: "17:36",
      SECTORV: "17:39"
    },
    {
      SEALDAH: "17:31",
      PHOOLBAGAN: "17:34",
      SALTLAKESTADIUM: "17:38",
      BENGALCHEMICAL: "17:41",
      CITYCENTER: "17:44",
      CENTRALPARK: "17:46",
      KARUNAMOYEY: "17:48",
      SECTORV: "17:51"
    },
    {
      SEALDAH: "17:43",
      PHOOLBAGAN: "17:46",
      SALTLAKESTADIUM: "17:50",
      BENGALCHEMICAL: "17:53",
      CITYCENTER: "17:56",
      CENTRALPARK: "17:58",
      KARUNAMOYEY: "18:00",
      SECTORV: "18:03"
    },
    {
      SEALDAH: "17:55",
      PHOOLBAGAN: "17:58",
      SALTLAKESTADIUM: "18:02",
      BENGALCHEMICAL: "18:05",
      CITYCENTER: "18:08",
      CENTRALPARK: "18:10",
      KARUNAMOYEY: "18:12",
      SECTORV: "18:15"
    },
    {
      SEALDAH: "18:07",
      PHOOLBAGAN: "18:10",
      SALTLAKESTADIUM: "18:14",
      BENGALCHEMICAL: "18:17",
      CITYCENTER: "18:20",
      CENTRALPARK: "18:22",
      KARUNAMOYEY: "18:24",
      SECTORV: "18:27"
    },
    {
      SEALDAH: "18:19",
      PHOOLBAGAN: "18:22",
      SALTLAKESTADIUM: "18:26",
      BENGALCHEMICAL: "18:29",
      CITYCENTER: "18:32",
      CENTRALPARK: "18:34",
      KARUNAMOYEY: "18:36",
      SECTORV: "18:39"
    },
    {
      SEALDAH: "18:31",
      PHOOLBAGAN: "18:34",
      SALTLAKESTADIUM: "18:38",
      BENGALCHEMICAL: "18:41",
      CITYCENTER: "18:44",
      CENTRALPARK: "18:46",
      KARUNAMOYEY: "18:48",
      SECTORV: "18:51"
    },
    {
      SEALDAH: "18:43",
      PHOOLBAGAN: "18:46",
      SALTLAKESTADIUM: "18:50",
      BENGALCHEMICAL: "18:53",
      CITYCENTER: "18:56",
      CENTRALPARK: "18:58",
      KARUNAMOYEY: "19:00",
      SECTORV: "19:03"
    },
    {
      SEALDAH: "18:55",
      PHOOLBAGAN: "18:58",
      SALTLAKESTADIUM: "19:02",
      BENGALCHEMICAL: "19:05",
      CITYCENTER: "19:08",
      CENTRALPARK: "19:10",
      KARUNAMOYEY: "19:12",
      SECTORV: "19:15"
    },
    {
      SEALDAH: "19:07",
      PHOOLBAGAN: "19:10",
      SALTLAKESTADIUM: "19:14",
      BENGALCHEMICAL: "19:17",
      CITYCENTER: "19:20",
      CENTRALPARK: "19:22",
      KARUNAMOYEY: "19:24",
      SECTORV: "19:27"
    },
    {
      SEALDAH: "19:19",
      PHOOLBAGAN: "19:22",
      SALTLAKESTADIUM: "19:26",
      BENGALCHEMICAL: "19:29",
      CITYCENTER: "19:32",
      CENTRALPARK: "19:34",
      KARUNAMOYEY: "19:36",
      SECTORV: "19:39"
    },
    {
      SEALDAH: "19:31",
      PHOOLBAGAN: "19:34",
      SALTLAKESTADIUM: "19:38",
      BENGALCHEMICAL: "19:41",
      CITYCENTER: "19:44",
      CENTRALPARK: "19:46",
      KARUNAMOYEY: "19:48",
      SECTORV: "19:51"
    },
    {
      SEALDAH: "19:43",
      PHOOLBAGAN: "19:46",
      SALTLAKESTADIUM: "19:50",
      BENGALCHEMICAL: "19:53",
      CITYCENTER: "19:56",
      CENTRALPARK: "19:58",
      KARUNAMOYEY: "20:00",
      SECTORV: "20:03"
    },
    {
      SEALDAH: "19:55",
      PHOOLBAGAN: "19:58",
      SALTLAKESTADIUM: "20:02",
      BENGALCHEMICAL: "20:05",
      CITYCENTER: "20:08",
      CENTRALPARK: "20:10",
      KARUNAMOYEY: "20:12",
      SECTORV: "20:15"
    },
    {
      SEALDAH: "20:15",
      PHOOLBAGAN: "20:18",
      SALTLAKESTADIUM: "20:22",
      BENGALCHEMICAL: "20:25",
      CITYCENTER: "20:28",
      CENTRALPARK: "20:30",
      KARUNAMOYEY: "20:32",
      SECTORV: "20:35"
    },
    {
      SEALDAH: "20:35",
      PHOOLBAGAN: "20:38",
      SALTLAKESTADIUM: "20:42",
      BENGALCHEMICAL: "20:45",
      CITYCENTER: "20:48",
      CENTRALPARK: "20:50",
      KARUNAMOYEY: "20:52",
      SECTORV: "20:55"
    },
    {
      SEALDAH: "20:55",
      PHOOLBAGAN: "20:58",
      SALTLAKESTADIUM: "21:02",
      BENGALCHEMICAL: "21:05",
      CITYCENTER: "21:08",
      CENTRALPARK: "21:10",
      KARUNAMOYEY: "21:12",
      SECTORV: "21:15"
    },
    {
      SEALDAH: "21:15",
      PHOOLBAGAN: "21:18",
      SALTLAKESTADIUM: "21:22",
      BENGALCHEMICAL: "21:25",
      CITYCENTER: "21:28",
      CENTRALPARK: "21:30",
      KARUNAMOYEY: "21:32",
      SECTORV: "21:35"
    },
    {
      SEALDAH: "21:35",
      PHOOLBAGAN: "21:38",
      SALTLAKESTADIUM: "21:42",
      BENGALCHEMICAL: "21:45",
      CITYCENTER: "21:48",
      CENTRALPARK: "21:50",
      KARUNAMOYEY: "21:52",
      SECTORV: "21:55"
    }
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
        <DisplaySchedule/>
        <Download></Download>
        <Footer></Footer>
      </ContextStore.Provider>
    </>
  )
}

export default App
