"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("Produce");

const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    onAddItem(item);
    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
};

return (
    <div className="flex justify-center items-center min-h-screen bg-black">
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
        <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />

        <div className="flex items-center justify-between bg-gray-700 rounded p-2 mb-3">
        <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="bg-transparent text-white w-10 text-center"
        />
        <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-white px-2">
            -
        </button>
        <button type="button" onClick={() => setQuantity(quantity + 1)} className="text-white px-2">
            +
        </button>
        </div>

        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen Foods">Frozen Foods</option>
        <option value="Canned Goods">Canned Goods</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        +
        </button>
    </form>
    </div>
);
}
