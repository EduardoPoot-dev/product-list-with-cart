
export default function CartEmpty() {
  return (
    <div className="bg-white rounded-xl p-4 ">
        <h3 className="font-bold text-xl text-rose-500">Your cart (0)</h3>

        <div className="flex flex-col items-center mt-4">
            <img src="/illustration-empty-cart.svg" className="w-28" alt="Empty card" />
            <p className="text-sm mb-3">Your added items will appear here</p>
        </div>

    </div>
  )
}
