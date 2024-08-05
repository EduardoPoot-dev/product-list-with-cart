import { useState } from "react"
import CartEmpty from "./components/CartEmpty"
import CartResult from "./components/CartResult"
import Desserts from "./components/Desserts"
import Modal from "./components/Modal"
import { useCartStore } from "./store"


function App() {
  const [ showModal, setShowModal ] = useState(false)

  const cart = useCartStore(state => state.cart)

  return (
    <div className="w-11/12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 py-16">

      <main className="col-start-1 col-end-3 ">
        <h1 className="font-bold text-rose-900 text-4xl mb-8">Desserts</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Desserts />
        </div>
      </main>

      <aside className="mt-5 w-full">
        {!cart.length ? (
          <CartEmpty />
        ) : (
          <CartResult setShowModal={setShowModal} />
        )}

      </aside>
      
      {showModal && <Modal setShowModal={setShowModal} />}
      

    </div>
  )
}

export default App
