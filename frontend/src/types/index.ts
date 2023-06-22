
export interface ProductItemType {
  title: string
  price: string
  imgUrl: string
  linkUrl: string
}

export interface DataResponseType {
  error: boolean
  errorMessage?: string
  items?: ProductItemType[]
}