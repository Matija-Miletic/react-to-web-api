export interface NewWidget {
  name: string
  price: number
  mfg: string
  inStock: number
  rating: number
}

export interface Widget extends NewWidget {
  id: number
}
