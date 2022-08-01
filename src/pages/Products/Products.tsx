/* eslint-disable no-unused-vars */
import classes from "./Products.module.scss";
import useFetch from "../../hooks/useFetch";
import FilterRow from "../../components/FiltersRow";
import ProductList from "../../components/ProductList";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useLocation } from "react-router-dom";

import { useState } from "react";

const Products = () => {
  useScrollToTop();

  const search = useLocation().search;
  const params = new URLSearchParams(search);
  let category = params.get("category");

  if (category === "solid") {
    category = "SOLID COLOR";
  } else if (category === "transparent") {
    category = "TRANSPARENT COLOR";
  } else if (category === "metallic") {
    category = "METALLIC COLOR";
  } else {
    category = "";
  }

  const { loading, error, data } = useFetch(
    "https://e-commerce-c8199-default-rtdb.europe-west1.firebasedatabase.app/products/-N7uYvOjW-UAMzhs8Mn0.json"
  );
  const [searchValue, SetSearchValue] = useState("");
  const [filterCategory, setFilterCategory] = useState(category);
  const handleFilterCategory = (category: string) => {
    setFilterCategory(category);
  };
  const handleSearchValue = (searchValue: string) => {
    SetSearchValue(searchValue);
  };

  const displayedProducts = data.filter((item) => {
    if (
      filterCategory === "" &&
      item.itemName.includes(searchValue.toUpperCase())
    )
      return true;
    if (
      item.categoryName === filterCategory &&
      item.itemName.includes(searchValue.toUpperCase())
    )
      return true;
  });

  return (
    <>
      <Navigation></Navigation>
      <div className={classes.container}>
        <FilterRow
          handleFilterCategory={handleFilterCategory}
          handleSearchValue={handleSearchValue}
        ></FilterRow>
        <ProductList
          loading={loading}
          error={error}
          data={displayedProducts}
        ></ProductList>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
