import { NextPage } from "next";
import AddCategoryForm from "../components/forms/AddCategoryForm";
import AddItemForm from "../components/forms/AddItemForm";

const Item: NextPage = () => {
  return (
    <div>
      <AddCategoryForm />
      <h1>--------------------------------------</h1>
      <AddItemForm />
      <h1>--------------------------------------</h1>
    </div>
  );
};

export default Item;
