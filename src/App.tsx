import { AuthPage } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const App = () => (
  <Provider store={store}>
    <AuthPage />
  </Provider>
);

export default App;
