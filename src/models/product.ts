export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  cost: number;
}

export const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "https://picsum.photos/200",
    description: "lorem...",
    cost: 10
  },
  {
    id: 2,
    name: "Bullet",
    description: "lorem...",
    image: "https://picsum.photos/200",
    cost: 5
  },
  {
    id: 3,
    name: "Pic",
    description: "lorem...",
    image: "https://picsum.photos/200",
    cost: 20
  }
]