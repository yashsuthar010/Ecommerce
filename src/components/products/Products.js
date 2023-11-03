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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsPerPage = 12;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        alert("Error");
      });
  }, []);

  const slicedProducts = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / productsPerPage);

  const getUniqueCategories = () => {
    const categories = [
      "All",
      ...new Set(products.map((product) => product.category)),
    ];
    return categories;
  };

  const PriceFilter = () => {
    const Prices = [...new Set(products.map((p) => p.price))];
    console.log(Prices.sort());
    return Prices;
  };

  PriceFilter();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? slicedProducts
      : products.filter((product) => product.category === selectedCategory);

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
      </CategoryAndFilter>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </ProductsContainer>
      <Pagination
        nPage={nPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Products;
