import "./MenuFilter.css";

function MenuFilter() {
  return (
    <section className="menu-filter">
      <div className="menu-filter-tools">
        <div className="menu-search">
          <input type="text" placeholder="Search for a dish..." />
        </div>

        <div className="menu-categories">
          <button className="active">All</button>
          <button>Pizza</button>
          <button>Burger</button>
          <button>Pasta</button>
        </div>
      </div>
    </section>
  );
}

export default MenuFilter;
