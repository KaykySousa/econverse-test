import { useRef } from "react"
import Separator from "../Separator"
import styles from "./styles.module.scss"

export default function Brands() {
	const carousel = useRef<HTMLDivElement>(null)

	return (
		<section className={styles.brands}>
			<Separator className={styles.title}>
				<h1>Navegue por Marcas</h1>
			</Separator>
			<div className={styles.brandsContainer}>
				<button
					title="Anterior"
					onClick={() => {
						if (carousel.current) {
							carousel.current.scrollLeft -= carousel.current.clientWidth
						}
					}}
				>
					<img src="/images/next.svg" alt="Anterior" />
				</button>
				<div className={styles.carousel} ref={carousel}>
					{[...Array(10)].map((_, index) => (
						<div className={styles.brand} key={"brand " + index}>
							<img src="/images/logo.svg" alt="Logo da marca" />
						</div>
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
					<img src="/images/next.svg" alt="Próximo" />
				</button>
			</div>
		</section>
	)
}
