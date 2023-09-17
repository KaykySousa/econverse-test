import Category from "../Category"
import styles from "./styles.module.scss"

export default function Categories() {
	return (
		<section className={styles.categories}>
			<h1 className="sr-only">Categories</h1>
			<Category imageUrl="/images/technology.png" description="Tecnologia" />
			<Category imageUrl="/images/supermarket.png" description="Supermercado" />
			<Category imageUrl="/images/drinks.png" description="Bebidas" />
			<Category imageUrl="/images/tools.png" description="Ferramentas" />
			<Category imageUrl="/images/health.png" description="Saúde" />
			<Category imageUrl="/images/sports.png" description="Esportes e Fitness" />
			<Category imageUrl="/images/fashion.png" description="Moda" />
		</section>
	)
}
