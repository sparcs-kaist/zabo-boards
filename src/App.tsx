import { Board } from "@/components";
import { Provider } from "react-redux";
import store from "@/redux/store";

const App = () => {
  <Provider store={store}>
    <Board />
  </Provider>;
};

export default App;
