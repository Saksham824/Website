import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../ProductsContext";

// Admin Panel
export default function AdminPanel() {
  const { products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
            Admin <span className="text-blue-600 dark:text-blue-400">— Manage Products</span>
          </h2>
          <button
            onClick={() => navigate('/admin/new')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            + Add Product
          </button>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.length > 0 ? (
            products.map(p => (
              <div
                key={p.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg"
              >
                <div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white mb-1 truncate">{p.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-semibold text-blue-700 dark:text-blue-400">{p.category}</span>
                    {" • "}
                    <span className="font-semibold text-green-700 dark:text-green-400">₹{p.price}</span>
                    {" • "}
                    <span className="text-xs">Stock: {p.stock}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{p.description}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/admin/edit/${p.id}`}
                    className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => { if (window.confirm('Delete product?')) deleteProduct(p.id); }}
                    className="px-4 py-2 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-16">
              No products found. Click <span className="font-semibold text-blue-600">Add Product</span> to create one.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Admin Form
export function AdminForm() {
  const { products, addProduct, updateProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = products.find(p => p.id === id);

  const [form, setForm] = useState(() =>
    editing
      ? { ...editing }
      : { name: '', category: 'Cement', price: 0, stock: 0, description: '' }
  );

  useEffect(() => { if (editing) setForm(editing); }, [id]);

  const submit = (e) => {
    e.preventDefault();
    if (editing) updateProduct(id, form);
    else addProduct(form);
    navigate('/admin');
  };

  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            {editing ? 'Edit' : 'Add'} Product
          </h3>
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">Name</label>
              <input
                required
                placeholder="Product name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">Category</label>
              <select
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option>Cement</option>
                <option>Iron Rods</option>
                <option>Aggregates</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">Price (₹)</label>
                <input
                  type="number"
                  required
                  min={0}
                  placeholder="Price"
                  value={form.price}
                  onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">Stock</label>
                <input
                  type="number"
                  required
                  min={0}
                  placeholder="Stock"
                  value={form.stock}
                  onChange={e => setForm({ ...form, stock: Number(e.target.value) })}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200">Description</label>
              <textarea
                placeholder="Product description"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                rows={3}
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="px-6 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}