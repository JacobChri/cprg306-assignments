"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
const [sortBy, setSortBy] = useState("name");
const [groupByCategory, setGroupByCategory] = useState(false);

const sortedItems = [...items].sort((a, b) => {
    if (groupByCategory) return 0;
    return sortBy === "name"
    ? a.name.localeCompare(b.name)
    : a.category.localeCompare(b.category);
});

const groupedItems = groupByCategory
    ? sortedItems.reduce((groups, item) => {
        if (!groups[item.category]) {
        groups[item.category] = [];
        }
        groups[item.category].push(item);
        return groups;
    }, {})
    : null;

return (
    <div className="p-6 max-w-lg mx-auto text-white">
    <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
    <div className="flex space-x-2 mb-4">
        <button
        onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
        }}
        className={`px-4 py-2 rounded ${
            sortBy === "name" && !groupByCategory
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
        >
        Name
        </button>
        <button
        onClick={() => {
            setSortBy("category");
            setGroupByCategory(false);
        }}
        className={`px-4 py-2 rounded ${
            sortBy === "category" && !groupByCategory
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
        >
        Category
        </button>
        <button
        onClick={() => setGroupByCategory(true)}
        className={`px-4 py-2 rounded ${
            groupByCategory
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
        >
        Grouped Category
        </button>
    </div>

    <p className="text-sm italic text-gray-400">
        — "Grouped Category" is an optional extra challenge
    </p>

    <ul className="bg-gray-900 p-4 rounded-lg">
        {groupByCategory
        ? Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
                <h2 className="text-lg font-bold capitalize mt-4 border-b border-gray-600 pb-1">
                {category}
                </h2>
                {groupedItems[category].map((item) => (
                <Item key={item.id} {...item} />
                ))}
            </div>
            ))
        : sortedItems.map((item) => <Item key={item.id} {...item} />)}
    </ul>
    </div>
);
}
