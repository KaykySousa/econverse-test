import Banner from "./components/Banner"
import Brands from "./components/Brands"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Partners from "./components/Partners"
import Products from "./components/Products"
import RelatedProducts from "./components/RelatedProducts"
import styles from "./styles/App.module.scss"

export default function App() {
	return (
		<div className={styles.container}>
			<Header />
			<Banner />
			<Categories />
			<RelatedProducts />
			<Partners />
			<Products />
			<Brands />
			<Footer />
		</div>
	)
}
