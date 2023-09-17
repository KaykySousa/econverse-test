import { useState } from "react"
import Button from "../Button"
import styles from "./styles.module.scss"

interface ModalProps {
	imageUrl: string
	name: string
	price: number
	description: string
	onClose: () => void
}

const BRL = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
})

export default function Modal({ description, imageUrl, name, price, onClose }: ModalProps) {
	const [quantity, setQuantity] = useState(1)

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<section className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button onClick={onClose} title="Fechar produto" className={styles.closeButton}>
					<img src="/images/close.svg" alt="" />
				</button>
				<img src={imageUrl} alt={"Imagem do produto: " + name} />
				<div className={styles.info}>
					<h1>{name}</h1>
					<strong>{BRL.format(price)}</strong>
					<p>{description}</p>
					<a href="/">Veja mais detalhes do produto &gt;</a>
					<div className={styles.quantity}>
						<button onClick={() => setQuantity((quantity) => quantity - 1)}>-</button>
						<p>{quantity}</p>
						<button onClick={() => setQuantity((quantity) => quantity + 1)}>+</button>
					</div>
					<Button>COMPRAR</Button>
				</div>
			</section>
		</div>
	)
}
