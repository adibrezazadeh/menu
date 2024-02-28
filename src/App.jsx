import React, { useState } from 'react';
import menus from './data'
import Categories from './Components/Categories'
import Menu from './Components/Menu';

// get all of category with one default category ( all)
const allCategories = ['all', ...new Set(menus.map(menu => menu.category))]

function App() {

  console.log(allCategories);
  // get all of datas
  const [allMenus, setAllMenus] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  // filter items that user want
  const filterMenus = (category) => {
    if (category === 'all') {
      setAllMenus(menus)
      return
    }

    let filteredMenus = menus.filter(menu => menu.category === category)
    setAllMenus(filteredMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* render of categories */}
        <Categories categories={categories} filterMenus={filterMenus} />
        {/* render of menus Items */}
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
