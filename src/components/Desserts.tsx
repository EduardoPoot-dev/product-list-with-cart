import Card from './Card'
import data from '../data/data'

export default function Desserts() {
  
  return (
    <>
      {data.map(product => (
        <Card key={product.name} product={product} />
      ))} 
    </>
  )
}
