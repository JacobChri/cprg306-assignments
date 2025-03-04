export default function Item({ name, quantity, category }) {
    return (
    <li className="p-2 border-b border-gray-600">
        <span className="font-bold">{name}</span> - {quantity} ({category})
    </li>
    );
}
