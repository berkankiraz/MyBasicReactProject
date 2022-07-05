import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


function DailyNews() {
  const [news, setNews] = useState([
    {
      NewsName: "NATO’dan Akinci TIHA Paylasimi",
      NewsPhotoUrl:
        "https://www.savunmasanayist.com/wp-content/uploads/2022/06/FWVjG4BXgAA80sj-1-1.jpg",
      Newscontents:
        "Anadolu Kartali-2022 Egitimi, NATO ve müttefik ülkelerin katilimiyla devam ediyor. Tatbikat, 1 Temmuz’a kadar 3. Ana Jet Üs Komutanligi’nda devam edecek. Ayrica Anadolu Kartali-2022 Egitimi, NATO tatbikati Ramsteinn DUST-2022/2 (RADU-2022) ile birlikte icra ediliyor. DUST-2022 ve Anadolu Kartali-2022 Egitimi kapsaminda NATO DACCC’in (Deployable Air Command and Control Centre) gözetleme ve kontrol birligi olan DARS, 20-28 Haziran tarihleri arasinda Konya’daki egitimlere katki sagladi. Egitimlere ayrica Ingiliz Hava Kuvvetleri unsurlari ve NATO E-3A AWACS uçaklari da destek veriyor.",
    },
  ]);
  const newslenght = news.length
  
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
  if (newslenght === newsId) {
    return (
      <div className="container">
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
  return (
    <div className="container">
      <div className="title">
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

export default DailyNews;
