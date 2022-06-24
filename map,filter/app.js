import React, { useState } from "react";

import "./style.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Application",
    "Apricot",
    "Orange",
    "Mango",
    "Macaron",
    "Pineapple",
    "Watermelon",
    "Water",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    const words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present",
    ];
    *******************************************************
    /* FİLTER
    const result = words.filter((word) => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]*/
   *********************************************************************

    /*  MAP
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2);
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
     */
*********************************************
    //The filter() method creates a new array with all elements
    //that pass the test implemented by the provided function.
    //filter = şartları sağlayanlarla yeni array.
    //map  = yeni biçimde array
    //indexOf(searchElement, fromIndex)

    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
        Search: <input onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default App;
