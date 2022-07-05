// import React from 'react'
// import React from "react";
// import DailyNews from "./DailyNews";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./adminpanel.css"
// function editadmin() {
//     const [news, setNews] = useState([
//         {
//           NewsName: "",
//           NewsPhotoUrl: "",
//           Newscontents: "",
//         },
//       ]);
    
//       const handleNewPostchange = (event) => {
//         event.preventDefault();
    
//         const fieldname = event.target.getAttribute("name");
//         const fieldValue = event.target.value;
//         const newpostarray = { ...news };
//         newpostarray[fieldname] = fieldValue;
//         setNews(newpostarray);
//         console.log("news",news)
//         console.log(newpostarray);
//       };
    
//       const submitnewPost = (event) => {
//         event.preventDefault();
//         console.log("basıldı.");
//         const newpost = {
//           NewsName: news.NewsName,
//           NewsPhotoUrl:  news.NewsPhotoUrl,
//           Newscontents:  news.Newscontents,
//         };
       
    
//         axios.post("http://localhost:53535/api/news",newpost)
//         .then((response)=>{
//             console.log(response)
    
//         })
//       };
    
//       const [newsTitle, setnewsTitle] = useState([
//         {
//           NewsName: "NATO’dan Akinci TIHA Paylasimi",
//           NewsPhotoUrl:
//             "https://www.savunmasanayist.com/wp-content/uploads/2022/06/FWVjG4BXgAA80sj-1-1.jpg",
//           Newscontents:
//             "Anadolu Kartali-2022 Egitimi, NATO ve müttefik ülkelerin katilimiyla devam ediyor. Tatbikat, 1 Temmuz’a kadar 3. Ana Jet Üs Komutanligi’nda devam edecek. Ayrica Anadolu Kartali-2022 Egitimi, NATO tatbikati Ramsteinn DUST-2022/2 (RADU-2022) ile birlikte icra ediliyor. DUST-2022 ve Anadolu Kartali-2022 Egitimi kapsaminda NATO DACCC’in (Deployable Air Command and Control Centre) gözetleme ve kontrol birligi olan DARS, 20-28 Haziran tarihleri arasinda Konya’daki egitimlere katki sagladi. Egitimlere ayrica Ingiliz Hava Kuvvetleri unsurlari ve NATO E-3A AWACS uçaklari da destek veriyor.",
//         },
//       ]);
//       useEffect(() => {
//         axios.get("http://localhost:53535/api/news").then((response) => {
//           setnewsTitle(response.data);
//         }, []);
//       });
    
//       const  deletePost = (event,id)=>{
       
//         const url =  `http://localhost:53535/api/news/${id} `
//         event.preventDefault()
//         axios.delete(url)
//         .then((response)=>{
//             console.log(response)
            
//         })
    
//       }
//       const editPost = (event,id)=>{
//         event.preventDefault()
    
    
//       }
    
//   return (
//     <div className="adminpanelcontainer">
//     <form onSubmit={submitnewPost}>
//       <h1>Admin Panel : </h1>
//       <table>
//         <thead>
//           <tr>
//             <th>The News Title</th>
//           </tr>
//         </thead>

//         {newsTitle.map((news) => (
//           <tbody>
//             <tr>{news.NewsName} </tr>
//             <button onClick={(event)=>editPost(event,news.NewsId)}>Edit</button>
//             <button onClick={(event)=>deletePost(event,news.NewsId)}>Delete</button>
//           </tbody>
//         ))}
//       </table>
//       <h1>New Posts : </h1>
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <input
//                 type="text"
//                 name="NewsName"
//                 required="required"
//                 placeholder="Enter the Title"
//                 onChange={handleNewPostchange}
//               ></input>
//               <br />
//               <input
//                 type="text"
//                 name="NewsPhotoUrl"
//                 required="required"
//                 placeholder="Enter the NewsPhotoUrl"
//                 onChange={handleNewPostchange}
//               ></input>
//               <br />
//               <input
//                 type="text"
//                 name="Newscontents"
//                 required="required"
//                 placeholder="Enter the Newscontents"
//                 onChange={handleNewPostchange}
//                 id="contentid"
//               ></input>
//               <br />
//               <button type="submit" id="add_button">Add</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </form>
//   </div>
//   )
// }

// export default editadmin