import { useState } from "react"
import Button from "../Button"
import Modal from "../Modal"
import styles from "./styles.module.scss"

interface ProductProps {
	imageUrl: string
	name: string
	description: string
	price: number
}

const BRL = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
})

export default function Product({ imageUrl, price, name, description }: ProductProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<div className={styles.product}>
				<img src={imageUrl} alt={`Imagem do produto: ${name}`} />
				<p className={styles.name}>{name}</p>
				<p className={styles.oldPrice}>{BRL.format((price * 110) / 100)}</p>
				<p className={styles.price}>{BRL.format(price)}</p>
				<p className={styles.installments}>ou 2x de {BRL.format(price / 2)} sem juros</p>
				<p className={styles.shipping}>Frete grátis</p>
				<Button onClick={() => setIsModalOpen(true)}>COMPRAR</Button>
			</div>

			{isModalOpen && (
				<Modal
					description={description}
					imageUrl={imageUrl}
					name={name}
					price={price}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</>
	)
}
