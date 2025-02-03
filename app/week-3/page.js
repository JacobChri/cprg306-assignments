import ItemList from "./item-list";

export default function Page() {
return (
    <main className="p-8 bg-gray-900 text-white min-h-screen flex items-start">
    <div className="w-full max-w-xl">
        <h1 className="text-3xl font-extrabold mb-6">Shopping List</h1>
        <ItemList />
    </div>
    </main>
);
}
