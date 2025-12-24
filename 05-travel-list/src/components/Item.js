export function Item({ item, onDeleteItems, onUpdateItemStatus }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateItemStatus(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
