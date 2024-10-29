import ProductPage from './components/functional/ProductPage/ProductPage';
import Footer from './components/ui/Footer/Footer';
import Header_black from './components/ui/Header_black/Header_black';
import Header_pink from './components/ui/Header_pink/Header_pink';
import SubscriptionBanner from './components/ui/SubscriptionBanner/SubscriptionBanner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselComponent from './components/functional/CarouselComponent/CarouselComponent';



function App() {
  return (
    <div >
      <Header_black 
        width='100%' 
        height='43px'>
        15% Off EN TODO CON EL CÓDIGO: XX15OF
      </Header_black >
      <Header_pink 
        width='100%' 
        height='98px' 
        title="BRAND">
      </Header_pink>
      <ProductPage></ProductPage>
      <CarouselComponent></CarouselComponent>
      <SubscriptionBanner></SubscriptionBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
