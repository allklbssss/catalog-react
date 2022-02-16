import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { data } from "./data";

const App = () => {
  return (
    <div>
      <Header title={"Каталог"} />
      {data.map(({type, title, text, link}) => <ListItem type={type} title={title} text={text} link={link}  />)}
    </div>
  );
};

export default App;
