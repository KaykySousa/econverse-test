import InfoCard from "../InfoCard"
import Separator from "../Separator"
import styles from "./styles.module.scss"

export default function Products() {
	return (
		<section className={styles.products}>
			<Separator className={styles.title}>
				<h1>Produtos Relacionados</h1>
			</Separator>
			<a href="/" className={styles.seeAll}>
				Ver todos
			</a>
			<div className={styles.productCards}>
				<InfoCard title="Produtos" description="Lorem ipsum dolor sit amet consectetur." />
				<InfoCard title="Produtos" description="Lorem ipsum dolor sit amet consectetur." />
			</div>
		</section>
	)
}
