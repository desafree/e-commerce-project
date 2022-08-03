import classes from "./Products.module.scss";
import useFetch from "../../hooks/useFetch";
import FilterRow from "../../components/FiltersRow";
import ProductList from "../../components/ProductList";
import Footer from "../../components/ui/Footer";
import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ActiveFilters from "../../components/ActiveFilters";
import Pagination from "../../components/Pagination";
// import products from "../../typescript/interface/products";
// import { useSelector } from "react-redux";
// import store from "../../typescript/interface/store";

const Products = () => {
  useScrollToTop();
  // const products: products = useSelector((state: store) => state.products);
  // console.log(products);

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
    setCurrentPage(1);
  };
  const handleSearchValue = (searchValue: string) => {
    SetSearchValue(searchValue);
    setCurrentPage(1);
  };
  const handleActiveFilter = () => {
    setFilterCategory("");
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayedProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={classes.container}>
        <FilterRow
          handleFilterCategory={handleFilterCategory}
          handleSearchValue={handleSearchValue}
        ></FilterRow>
        <ActiveFilters
          activeFilter={filterCategory}
          handleActiveFilter={handleActiveFilter}
        ></ActiveFilters>
        <ProductList
          loading={loading}
          error={error}
          data={currentPosts}
        ></ProductList>
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={displayedProducts.length}
          paginate={paginate}
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
