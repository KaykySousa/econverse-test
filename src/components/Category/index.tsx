import styles from "./styles.module.scss"

interface CategoryProps {
	imageUrl: string
	description: string
}

export default function Category({ imageUrl, description }: CategoryProps) {
	return (
		<button className={styles.category}>
			<div>
				<img src={imageUrl} alt={description} />
			</div>
			<p>{description}</p>
		</button>
	)
}
