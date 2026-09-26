import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components";

function App() {

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default App;