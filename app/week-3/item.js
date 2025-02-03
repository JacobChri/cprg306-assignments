export default function Item({ name, quantity, category }) {
    return (
    <li className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="flex flex-col">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-sm">Buy {quantity} in {category}</span>
        </div>
    </li>
    );
}