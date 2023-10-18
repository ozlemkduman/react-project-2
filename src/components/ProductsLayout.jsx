import { Outlet } from "react-router-dom";
import Categories from "./Categories";

export default function ProductsLayout({ user }) {
  //ürünler sayfası açıldığında sağda kategori solda ürünler (productsAll) gösterir
  return (
    <>
      <div className="row ">
        <div className="col-sm-8 ">
          <Outlet user={user} />
        </div>
        <div className="col-sm-4 ">
          <Categories />
        </div>
      </div>
    </>
  );
}
