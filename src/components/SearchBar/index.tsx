import { InputHTMLAttributes } from "react"
import styles from "./styles.module.scss"

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar({ className, ...props }: SearchBarProps) {
	return (
		<div className={`${styles.searchBar} ${className}`}>
			<input type="text" placeholder="O que você está buscando?" {...props} />
			<img src="/images/magnifying-glass.svg" alt="" />
		</div>
	)
}
