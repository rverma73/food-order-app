import Card from "./components/Card";
import data from "./Data";
const Menu = (props) => {
  return (
    <>
      {data.map((item) => {
        return <Card key={item.id} food={item} />;
      })}
    </>
  );
};
export default Menu;
