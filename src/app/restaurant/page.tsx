import { getRestaurants } from "@/api/restaurants";
import { getCategories } from "@/api/categories";
import s from "./page.module.css";

export const revalidate = 5;

const Restaurant = async () => {
  const restaurants = await getRestaurants();
  const categories = await getCategories();

  return (
    <div className={s.layout}>
      <h1 className={s.header}>Services</h1>
      <div className={s.contentInner}>
        <div>
          <h2>Restaurants</h2>
          <ul className={s.list}>
            {restaurants.data.map((restaurant) => (
              <li key={restaurant.id} className={s.listItem}>
                {restaurant?.attributes.Name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Categories</h2>
          <ul className={s.list}>
            {categories.data.map((category) => (
              <li key={category.id} className={s.listItem}>
                {category.attributes.Name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
