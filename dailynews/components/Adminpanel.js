import React, { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./adminpanel.css";
import Home from "../Home";



function Adminpanel({ activeuser, user }) {
  activeuser = true;

  const [editform, setEditform] = useState([
    {
      NewsName: "",
      NewsPhotoUrl: "",
      Newscontents: "",
    },
  ]);

  const [editID, setEditID] = useState(null);
  const [news, setNews] = useState([
    {
      NewsName: "",
      NewsPhotoUrl: "",
      Newscontents: "",
    },
  ]);

  const handleNewPostchange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newpostarray = { ...news };
    newpostarray[fieldname] = fieldValue;
    setNews(newpostarray);
  };

  const submitnewPost = (event) => {
    event.preventDefault();
    console.log("basıldı.");
    const newpost = {
      NewsName: news.NewsName,
      NewsPhotoUrl: news.NewsPhotoUrl,
      Newscontents: news.Newscontents,
    };

    axios.post("http://localhost:53535/api/news", newpost).then((response) => {
      console.log(response);
    });
  };
  console.log(user);

  const [newsTitle, setnewsTitle] = useState([
    {
      NewsName: "NATO’dan Akinci TIHA Paylasimi",
      NewsPhotoUrl:
        "https://www.savunmasanayist.com/wp-content/uploads/2022/06/FWVjG4BXgAA80sj-1-1.jpg",
      Newscontents:
        "Anadolu Kartali-2022 Egitimi, NATO ve müttefik ülkelerin katilimiyla devam ediyor. Tatbikat, 1 Temmuz’a kadar 3. Ana Jet Üs Komutanligi’nda devam edecek. Ayrica Anadolu Kartali-2022 Egitimi, NATO tatbikati Ramsteinn DUST-2022/2 (RADU-2022) ile birlikte icra ediliyor. DUST-2022 ve Anadolu Kartali-2022 Egitimi kapsaminda NATO DACCC’in (Deployable Air Command and Control Centre) gözetleme ve kontrol birligi olan DARS, 20-28 Haziran tarihleri arasinda Konya’daki egitimlere katki sagladi. Egitimlere ayrica Ingiliz Hava Kuvvetleri unsurlari ve NATO E-3A AWACS uçaklari da destek veriyor.",
    },
  ]);
  useEffect(() => {
    axios.get("http://localhost:53535/api/news").then((response) => {
      setnewsTitle(response.data);
    }, []);
  });

  const deletePost = (event, id) => {
    const url = `http://localhost:53535/api/news/${id} `;
    event.preventDefault();
    axios.delete(url).then((response) => {});
  };
  const editPostClick = (event, newsinfo) => {
    console.log("newsinfo", newsinfo);
    event.preventDefault();
    setEditID(newsinfo.NewsId);
    console.log(newsinfo.NewsId);

    const editpostform = {
      NewsName: newsinfo.NewsName,
      NewsPhotoUrl: newsinfo.NewsPhotoUrl,
      Newscontents: newsinfo.Newscontents,
    };
    console.log(editpostform);
    setEditform(editpostform);
  };
  const handleEditformChange = (event) => {
    event.preventDefault();
    const fieldname = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const editedform = { ...editform };
    editedform[fieldname] = fieldValue;
    setEditform(editedform);
    console.log("edited:", editedform);
  };
  const saveSubmit = (event) => {
    event.preventDefault();
    const newpost = {
      NewsId: editID,
      NewsName: editform.NewsName,
      NewsPhotoUrl: editform.NewsPhotoUrl,
      Newscontents: editform.Newscontents,
    };
    console.log("id", newpost);
    axios.put("http://localhost:53535/api/news", newpost).then((response) => {
      console.log(response);
    });

    setEditID(null);
  };
  const cancelClick = () => {
    setEditID(null);
  };

  return (
    <div className="adminpanelcontainer">
      <form onSubmit={submitnewPost}>
        <h1>Admin Panel : </h1>
        <h1>Kullanıcı : {user}</h1>
        <Link to="/">Log out</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <table>
          <thead>
            <tr>
              <th>The News Title</th>
            </tr>
          </thead>
          <br />

          {newsTitle.map((news) => (
            <tbody>
              <tr>{news.NewsName} </tr>

              <Fragment>
                {editID === news.NewsId ? (
                  <div>
                    {" "}
                    <br />
                    <input
                      type="text"
                      name="NewsName"
                      required="required"
                      placeholder="Enter the Title"
                      value={editform.NewsName}
                      onChange={handleEditformChange}
                    ></input>
                    <br />
                    <input
                      type="text"
                      name="NewsPhotoUrl"
                      required="required"
                      placeholder="Enter the NewsPhotoUrl"
                      value={editform.NewsPhotoUrl}
                      onChange={handleEditformChange}
                    ></input>
                    <br />
                    <textarea
                      type="text"
                      name="Newscontents"
                      required="required"
                      placeholder="Enter the Newscontents"
                      value={editform.Newscontents}
                      onChange={handleEditformChange}
                      id="contentid2"
                      rows="40"
                      cols="57.5"
                    ></textarea>
                    <br />
                    <div>
                      <button onClick={saveSubmit}>Save</button>
                      <button onClick={cancelClick}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <button onClick={(event) => editPostClick(event, news)}>
                      Edit
                    </button>
                    <button onClick={(event) => deletePost(event, news.NewsId)}>
                      Delete
                    </button>
                  </div>
                )}
              </Fragment>
            </tbody>
          ))}
        </table>
        <h1>New Posts : </h1>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="NewsName"
                  required="required"
                  placeholder="Enter the Title"
                  onChange={handleNewPostchange}
                ></input>
                <br />
                <input
                  type="text"
                  name="NewsPhotoUrl"
                  required="required"
                  placeholder="Enter the NewsPhotoUrl"
                  onChange={handleNewPostchange}
                ></input>
                <br />
                <textarea
                  type="text"
                  name="Newscontents"
                  required="required"
                  placeholder="Enter the Newscontents"
                  onChange={handleNewPostchange}
                  id="contentid"
                  rows="40"
                  cols="57.5"
                ></textarea>
                <br />
                <button type="submit" id="add_button">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Adminpanel;
