import { useEffect, useRef, useState } from "react"
import { IProduct, IProductResponse } from "../../types/api"
import Product from "../Product"
import Separator from "../Separator"
import styles from "./styles.module.scss"

export default function RelatedProducts() {
	const carousel = useRef<HTMLDivElement>(null)
	const [products, setProducts] = useState<IProduct[] | null>(null)

	async function fetchData() {
		const res = await fetch(
			"https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
		)
		const { success, products }: IProductResponse = await res.json()

		if (success) {
			setProducts(products)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className={styles.relatedProducts}>
			<Separator className={styles.title}>
				<h1>Produtos Relacionados</h1>
			</Separator>
			<div className={styles.suggestions}>
				<div>
					<button>CELULAR</button>
					<button>ACESSÓRIOS</button>
					<button>TABLETS</button>
					<button>NOTEBOOKS</button>
					<button>TVS</button>
					<button>VER TODOS</button>
				</div>
			</div>
			<div className={styles.products}>
				<button
					title="Anterior"
					onClick={() => {
						if (carousel.current) {
							carousel.current.scrollLeft -= carousel.current.clientWidth
						}
					}}
				>
					<img src="/images/chevron-left.svg" alt="Anterior" />
				</button>
				<div className={styles.carousel} ref={carousel}>
					{products?.map(({ descriptionShort, photo, price, productName }, index) => (
						<Product
							key={productName + index}
							description={descriptionShort}
							imageUrl={photo}
							name={productName}
							price={price}
						/>
					))}
				</div>
				<button
					title="Próximo"
					onClick={() => {
						if (carousel.current) {
							carousel.current.scrollLeft += carousel.current.clientWidth
						}
					}}
				>
					<img src="/images/chevron-left.svg" alt="Próximo" />
				</button>
			</div>
		</section>
	)
}
