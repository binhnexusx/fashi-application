import './App.css';
import Header from '../Header/Header';
import BreadcrumbSection from '../Contents/BreadcrumbSection';
import ProductShopSpad from '../Contents/ProductShopSpad';
import PartnerLogo from '../Contents/PartnerLogo';
import Footer from '../../Footer/Footer';
function App() {
  return (
    <div>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader" />
      </div>
      {/* Header Section Begin */}
      <Header></Header>
      {/* Header End */}
      {/* Breadcrumb Section Begin */}
      <BreadcrumbSection></BreadcrumbSection>
      {/* Breadcrumb Section Begin */}
      {/* Product Shop Section Begin */}
      <ProductShopSpad></ProductShopSpad>
      {/* Product Shop Section End */}
      {/* Partner Logo Section Begin */}
      <PartnerLogo></PartnerLogo>
      {/* Partner Logo Section End */}
      {/* Footer Section Begin */}
      <Footer></Footer>
      {/* Footer Section End */}
      {/* Js Plugins */}
    </div>
  );
}

export default App;
