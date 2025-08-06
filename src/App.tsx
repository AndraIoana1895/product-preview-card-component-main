
import imgDesktop from "./assets/images/image-product-desktop.jpg";
import imgMobile from "./assets/images/image-product-mobile.jpg";

function App() {
  return (
    <main className="card">
      <section>
        <picture>
          <source srcSet={imgDesktop} media="(min-width:1361px)" />
          <img src={imgMobile} alt="parfume" />
        </picture>
      </section>
      <section className="card-content">
        <p className="perfume">Perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.</p>
        <section className="price">
          <p>$149.99</p>
          <p>$169.99</p>
        </section>
        <section >
          <button>Add to Cart</button>
        </section>
      </section>
    </main>
  );
}

export default App;
