import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About";

function App() {

  
  const [news, setNews] = useState([
    {
      NewsName: "NATO’dan Akinci TIHA Paylasimi",
      NewsPhotoUrl:
        "https://www.savunmasanayist.com/wp-content/uploads/2022/06/FWVjG4BXgAA80sj-1-1.jpg",
      Newscontents:
        "Anadolu Kartali-2022 Egitimi, NATO ve müttefik ülkelerin katilimiyla devam ediyor. Tatbikat, 1 Temmuz’a kadar 3. Ana Jet Üs Komutanligi’nda devam edecek. Ayrica Anadolu Kartali-2022 Egitimi, NATO tatbikati Ramsteinn DUST-2022/2 (RADU-2022) ile birlikte icra ediliyor. DUST-2022 ve Anadolu Kartali-2022 Egitimi kapsaminda NATO DACCC’in (Deployable Air Command and Control Centre) gözetleme ve kontrol birligi olan DARS, 20-28 Haziran tarihleri arasinda Konya’daki egitimlere katki sagladi. Egitimlere ayrica Ingiliz Hava Kuvvetleri unsurlari ve NATO E-3A AWACS uçaklari da destek veriyor.",
    },
  ]);
  const [newsId, setNewsId] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:53535/api/news").then((response) => {
      setNews(response.data);
    }, []);
  });


  //her butona basıldığında ıd artırılarak yeni sayfanın gösterilmesi sağlanır.
  const handleIdCheck = (id) => {
    setNewsId(id + 1);
  };

  //son sayfaya geldiğinde orada bekleyebilmesi için boolean tanımlaması.
  let turnbackboolean = false;
  const getback = () => {
    turnbackboolean = true;
    console.log(turnbackboolean);
    if (turnbackboolean) {
      setNewsId(0);
      turnbackboolean = false;
    }
  };

  //haberlerin sonuna gelince burası çalışır.
  if (newsId === 4) {
    return (
      <div className="container">
        <div class="header">
          <a href="#default" class="logo">
            Daily News
          </a>
          <div class="header-right">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className="dailynewsfinished">
          <h1>DailyNews is finished for today.</h1>
        </div>
        <div className="dailynewsfinished">
          <h3>Wait tomorrow for new news.</h3>
        </div>

        <div class="getbackdiv">
          <button onClick={() => getback()} className="getbackbutton">
            You can get back
          </button>
        </div>
      </div>
    );
  }
  //ilk başladığında haberler bu şekilde gözükür.
  return (
    <div className="container">
      <div class="header">
        <a href="#default" class="logo">
          Daily News
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a class="active" href="src\About.js">
            About
          </a>
        </div>
      </div>
      <div>
        <h2>{news[newsId].NewsName}</h2>
        <img src={news[newsId].NewsPhotoUrl}></img>
        <p>{news[newsId].Newscontents}</p>
      </div>
      <div class="button">
        <button onClick={() => handleIdCheck(newsId)} id="buttonnews">
          New News
        </button>
      </div>
    </div>
  );
}

export default App;
