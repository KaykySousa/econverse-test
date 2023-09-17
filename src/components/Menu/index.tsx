import styles from "./styles.module.scss"

interface MenuProps {
	isOpen: boolean
	onClose: () => void
}

export default function Menu({ isOpen, onClose }: MenuProps) {
	return (
		<aside className={`${styles.menuOverlay} ${isOpen && styles.open}`} onClick={onClose}>
			<div className={styles.menu} onClick={(e) => e.stopPropagation()}>
				<button onClick={onClose} title="Fechar menu" className={styles.closeButton}>
					<img src="/images/close.svg" alt="" />
				</button>
				<nav className={styles.nav}>
					<ul>
						<li>
							<a href="/allcategories" title="Todas as categorias">
								TODAS AS CATEGORIAS
							</a>
						</li>
						<li>
							<a href="/supermarket" title="Supermercado">
								SUPERMERCADO
							</a>
						</li>
						<li>
							<a href="/books" title="Livros">
								LIVROS
							</a>
						</li>
						<li>
							<a href="/fashion" title="Moda">
								MODA
							</a>
						</li>
						<li>
							<a href="/launches" title="Lançamentos">
								LANÇAMENTOS
							</a>
						</li>
						<li>
							<a href="/offers" title="Ofertas do dia">
								OFERTAS DO DIA
							</a>
						</li>
						<li>
							<a href="/subscription" title="Assinatura">
								ASSINATURA
								<img src="/images/crown.svg" alt="" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	)
}
