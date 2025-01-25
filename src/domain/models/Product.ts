export interface Product {
  code: string
  name: string
  available: boolean
  visible: boolean
  details: {
    name: string
    description: string
  }
  fullPriceInCents: number
  salePriceInCents: number
  rating: number
  image: string
  stockAvailable: number
}
