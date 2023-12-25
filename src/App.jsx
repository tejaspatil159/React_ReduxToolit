import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <div>
        <UserView />
      </div>
    </>
  );
}

export default App;
