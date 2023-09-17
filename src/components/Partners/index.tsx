import InfoCard from "../InfoCard"
import styles from "./styles.module.scss"

export default function Partners() {
	return (
		<section className={styles.partners}>
			<h1 className="sr-only">Parceiros</h1>
			<InfoCard title="Parceiros" description="Lorem ipsum dolor sit amet consectetur." />
			<InfoCard title="Parceiros" description="Lorem ipsum dolor sit amet consectetur." />
		</section>
	)
}
