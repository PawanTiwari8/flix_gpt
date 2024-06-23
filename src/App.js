import { Provider } from "react-redux";
import Body from "./Components/Body.js";
import Appstore from "./utils/AppStore.js";

function App() {
  return (
    <Provider store={Appstore}>
    <Body/>
    </Provider>
  );
}


export default App;
