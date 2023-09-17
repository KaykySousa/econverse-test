import Button from "../Button"
import styles from "./styles.module.scss"

interface InfoCard {
	title: string
	description: string
}

export default function InfoCard({ description, title }: InfoCard) {
	return (
		<div className={styles.infoCard}>
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<Button>Confira</Button>
			</div>
		</div>
	)
}
