import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import database from "./Dataset/Data";
import Card from "./components/Card";

const App = () => {
  const [selectCategory, setGategory] = useState(null);

  //Search input
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const filterItems = database.filter(
    (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //radio filter
  const radioHandle = (e) => {
    setGategory(e.target.value);
  };
  //button filtering
  const buttonHandle = (e) => {
    setGategory(e.target.value);
  };

  function filteredData(product, selected, query) {
    let filterProduct = product;
    if (query) {
      filterProduct = filterItems;
    }
    if (selected) {
      filterProduct = filterProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filterProduct.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(database, selectCategory, query);
  return (
    <div>
      <Sidebar radioHandle={radioHandle} />
      <Nav query={query} handleSearch={handleSearch} />
      <Recommended buttonHandle={buttonHandle} />
      <Product result={result} />
    </div>
  );
};

export default App;
