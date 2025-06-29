import DarkLightMode from "./components/LightDarkMode";
import LoadMoreData from "./components/LoadMoreData";
import Rating from "./components/Rating";
import Slidder from "./components/Slider";
import TreeMenu from "./components/TreeView";
import menus from "./components/TreeView/data";

function App() {
  return (
    <div className="App">
      {/* <Rating/> */}
      {/* <Slidder/>       */}
      {/* <LoadMoreData/> */}
      {/* <TreeMenu  menu= {menus} /> */}
      <DarkLightMode/>
    </div>
  );
}

export default App;
