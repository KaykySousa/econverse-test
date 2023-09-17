import Button from "../Button"
import styles from "./styles.module.scss"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.info}>
					<div className={styles.column}>
						<h4>SOBRE NÓS</h4>
						<a href="/">CONHEÇA</a>
						<a href="/">COMO COMPRAR</a>
						<a href="/">INDICAÇÃO E DESCONTO</a>
						<div className={styles.social}>
							<a href="/">
								<img src="/images/facebook.svg" alt="Facebook" />
							</a>
							<a href="/">
								<img src="/images/instagram.svg" alt="Instagram" />
							</a>
							<a href="/">
								<img src="/images/youtube.svg" alt="Youtube" />
							</a>
						</div>
					</div>

					<div className={styles.column}>
						<h4>INFORMAÇÕES ÚTEIS</h4>
						<a href="/">FALE CONOSCO</a>
						<a href="/">DÚVIDAS</a>
						<a href="/">PRAZOS DE ENTREGA</a>
						<a href="/">FORMAS DE PAGAMENTO</a>
						<a href="/">POLÍTICA DE PRIVACIDADE</a>
						<a href="/">TROCAS E DEVOLUÇÕES</a>
					</div>

					<div className={styles.column}>
						<h4>FORMAS DE PAGAMENTO</h4>
						<img src="/images/payment-methods.svg" alt="Bandeiras de cartões" />
					</div>
				</div>
				<form className={styles.newsletter}>
					<h1>
						Cadastre-se e Receba nossas <br />
						<strong>novidades e promoções</strong>
					</h1>
					<p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
					<div>
						<input type="email" placeholder="SEU E-MAIL" />
						<Button>OK</Button>
					</div>
				</form>
			</div>
			<div className={styles.copyright}>
				<div className={styles.content}>
					<p>
						Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de
						propriedade de seus respectivos donos.
						<br />É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa
						autorização.
					</p>
					<img src="/images/watermark.svg" alt="Econverse" />
				</div>
			</div>
		</footer>
	)
}
