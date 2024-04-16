import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, toggleIsCompleted }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleIsCompleted={toggleIsCompleted}
          />
        );
      })}
    </div>
  );
};
export default Items;
