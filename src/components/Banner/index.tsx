import Button from "../Button"
import styles from "./styles.module.scss"

export default function Banner() {
	return (
		<section className={styles.banner}>
			<div>
				<div>
					<h1>
						Venha conhecer nossas
						<br />
						promoções
					</h1>
					<h3>50% Off nos produtos</h3>
					<Button>Ver produto</Button>
				</div>
			</div>
		</section>
	)
}
