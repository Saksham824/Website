import { useCart } from "../CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, total, clear } = useCart();

  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-6">
          Cart
        </h2>
        {cart.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Your cart is empty.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Browse products and add items to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <ul className="space-y-4">
              {cart.map((i) => (
                <li
                  key={i.key}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow p-5 gap-4 transition hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {i.image && (
                      <img
                        src={i.image}
                        alt={i.name}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                    )}
                    <div>
                      <div className="font-bold text-slate-800 dark:text-white text-lg">
                        {i.name}{" "}
                        {i.size && (
                          <span className="text-sm text-gray-500">
                            ({i.size})
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        ₹{i.price} x {i.qty}{" "}
                        <span className="text-gray-400">=</span>{" "}
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          ₹{i.price * i.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={1}
                      value={i.qty}
                      onChange={(e) => updateQty(i.key, Number(e.target.value))}
                      className="w-20 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                    />
                    <button
                      onClick={() => removeFromCart(i.key)}
                      className="px-4 py-2 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900 transition"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-6">
              <div className="font-bold text-xl text-slate-800 dark:text-white">
                Total:{" "}
                <span className="text-green-700 dark:text-green-400">
                  ₹{total}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={clear}
                  className="px-6 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Clear
                </button>
                <button
                  onClick={() => alert("Proceed to checkout flow")}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
