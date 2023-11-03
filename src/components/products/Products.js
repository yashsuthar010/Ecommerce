import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product/Product";
import Pagination from "../pagination/Pagination";
import {
  ProductsContainer,
  CategoryButton,
  Container,
  CategoryAndFilter,
} from "./Products.styled";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productsPerPage = 12;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch(() => {
        alert("Error");
      });
  }, []);

  const getUniqueCategories = () => {
    const categories = [
      "All",
      ...new Set(products.map((product) => product.category)),
    ];
    return categories;
  };

  const PriceFilter = (data) => {
    return [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    let filteredData = products;

    if (selectedCategory !== "All") {
      filteredData = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    const sortedData = PriceFilter(filteredData);
    setFilteredProducts(sortedData);
  }, [selectedCategory, sortOrder, products]);

  const nPage = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Container>
      <h1 style={{ fontWeight: 500 }}>Products</h1>
      <CategoryAndFilter>
        <div>
          {getUniqueCategories().map((cat) => (
            <CategoryButton
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              active={cat === selectedCategory}
            >
              {cat}
            </CategoryButton>
          ))}
        </div>
        <div>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </CategoryAndFilter>
      <ProductsContainer>
        {filteredProducts
          .slice(
            (currentPage - 1) * productsPerPage,
            currentPage * productsPerPage
          )
          .map((product) => (
            <Product {...product} key={product.id} />
          ))}
      </ProductsContainer>
      <Pagination
        nPage={nPage}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />
    </Container>
  );
};

export default Products;
