"use client";
import { useState } from 'react';

export default function NewItem() {
const [quantity, setQuantity] = useState(1);

const increment = () => {
    if (quantity < 20) {
    setQuantity(quantity + 1);
    }
};

const decrement = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item quantity: ${quantity}`);
    setQuantity(1); 
};

return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
    <div className="flex items-center space-x-2">
        <button
        type="button"
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
        -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
        type="button"
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
        +
        </button>
    </div>
    <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
        Submit
    </button>
    </form>
);
}