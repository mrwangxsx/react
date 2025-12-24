import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateItemStatus(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    const confirm = window.confirm("Are you sure confirm ");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItems}
        updateItemStatus={updateItemStatus}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
