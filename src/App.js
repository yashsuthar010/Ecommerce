import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
import { GlobalStyles } from "./Global.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
