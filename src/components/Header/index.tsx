import { useState } from "react"
import Menu from "../Menu"
import SearchBar from "../SearchBar"
import styles from "./styles.module.scss"

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				<div className={styles.advantages}>
					<div className={styles.advantage}>
						<img src="/images/shield-check.svg" alt="" />
						<p>
							Compra <span>100% segura</span>
						</p>
					</div>
					<div className={styles.advantage}>
						<img src="/images/truck.svg" alt="" />
						<p>
							<span>Frete grátis</span> acima de R$ 200
						</p>
					</div>
					<div className={styles.advantage}>
						<img src="/images/credit-card.svg" alt="" />
						<p>
							<span>Parcele</span> suas compras
						</p>
					</div>
				</div>

				<div className={styles.mainBar}>
					<div className={styles.logoContainer}>
						<button title="Abrir menu" onClick={() => setIsMenuOpen(true)}>
							<img src="/images/menu.svg" alt="Menu" />
						</button>
						<a href="/" title="Ir ao início">
							<img src="/images/logo.svg" alt="VTEX" className={styles.logo} />
						</a>
					</div>
					<SearchBar className={styles.searchBar} />
					<nav className={styles.navBar}>
						<ul>
							<li>
								<a href="/orders" title="Pedidos">
									<img src="/images/box.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="/favorites" title="Favoritos">
									<img src="/images/heart.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="/login" title="Entrar na conta">
									<img src="/images/user-circle.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="/shoppingcart" title="Carrinho de compras">
									<img src="/images/shopping-cart.svg" alt="" />
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<nav className={styles.menu}>
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
								<img src="/images/crown.svg" alt="" />
								ASSINATURA
							</a>
						</li>
					</ul>
				</nav>

				<SearchBar className={styles.searchBar} />
			</div>
			<Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</header>
	)
}
