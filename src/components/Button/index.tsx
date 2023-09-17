import { ButtonHTMLAttributes } from "react"
import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ type, className, ...props }: ButtonProps) {
	return <button type={"button" ?? type} className={`${styles.button} ${className}`} {...props} />
}
