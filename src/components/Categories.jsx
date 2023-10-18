import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  //sayfa ilk açıldığında apiden kategoriler çekilir
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  //çekilen kategoriler
  return (
    <>
      <div className="list-group">
        {categories.map((item, index) => (
          <Link
            item={item}
            key={index}
            className="list-group-item list-group-item-action"
            to={`/products/category/${encodeURIComponent(item)}`}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
