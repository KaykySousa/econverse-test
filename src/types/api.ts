export interface IProductResponse {
	success: boolean
	products: IProduct[]
}

export interface IProduct {
	productName: string
	descriptionShort: string
	photo: string
	price: number
}
