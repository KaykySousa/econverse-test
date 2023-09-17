import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface SeparatorProps {
	children: ReactNode
	className: string
}

export default function Separator({ children, className }: SeparatorProps) {
	return (
		<div className={`${styles.separator} ${className}`}>
			<div></div>
			{children}
			<div></div>
		</div>
	)
}
