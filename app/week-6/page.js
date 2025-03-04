import ItemList from "./item-list";

export default function Page() {
return (
    <main className="min-h-screen flex justify-center items-center bg-black text-white">
    <div>
        <h1 className="text-center text-2xl font-bold mb-4">Shopping List</h1>
        <ItemList />
    </div>
    </main>
);
}
