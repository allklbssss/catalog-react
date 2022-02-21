import ListItem from "../components/ListItem";
import { data } from "../data";

const Catalog = () => {
  return (
    <>
      {data.map(({ type, title, text, path }) => (
        <ListItem type={type} title={title} text={text} path={path} />
      ))}
    </>
  );
};

export default Catalog;
