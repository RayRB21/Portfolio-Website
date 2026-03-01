import type { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;

  //onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
