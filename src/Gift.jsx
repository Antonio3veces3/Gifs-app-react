import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["fornite", "Demon slayer"]);

  const onAddCategory = (newCategory) => {
    if (existNewCategory(categories, newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const existNewCategory = (listCategories, newCategory) => {
    let exists = false;
    listCategories.map((category) => {
      if (category.toLowerCase() == newCategory.toLowerCase())
        return (exists = true);
    });
    return exists;
  };
  return (
    <>
      {/*Title */}
      <h1>Welcome to Gift App</h1>

      {/*Input */}
      <AddCategory onNewCategory={onAddCategory} />
      {/*Listado de gifts */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
