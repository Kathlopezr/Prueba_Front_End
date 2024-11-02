import ProductPage from './components/functional/ProductPage/ProductPage';
import Footer from './components/ui/Footer/Footer';
import SubscriptionBanner from './components/ui/SubscriptionBanner/SubscriptionBanner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselComponent from './components/functional/CarouselComponent/CarouselComponent';
import HeaderBlack from './components/ui/Header_black/HeaderBlack';
import HeaderPink from './components/ui/Header_pink/HeaderPink';



function App() {
  return (
    <div >
      <HeaderBlack
        width='100%' 
        height='43px'>
        15% Off EN TODO CON EL CÓDIGO: XX15OF
      </HeaderBlack >
      <HeaderPink
        width='100%' 
        height='98px' 
        title="BRAND">
      </HeaderPink>
      <ProductPage></ProductPage>
      <CarouselComponent></CarouselComponent>
      <SubscriptionBanner></SubscriptionBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
