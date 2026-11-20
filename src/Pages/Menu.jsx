import Navbar from "../Component/Navbar";
import MenuHeader from "../Component/MenuHeader";
import MenuFilter from "../Component/MenuFilter";
import MenuDishes from "../Component/MenuDishes";

function Menu() {
  return (
    <>
      <Navbar />
      <MenuHeader />
      <MenuFilter />
      <MenuDishes />
    </>
  );
}

export default Menu;
