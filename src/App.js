import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import SearchPage from "./pages/Search";
import DetailPage from "./pages/Detail";

const Layout = () => {
  return (
      <div>
        <Nav/>
        <Outlet/>
      </div>
  )
}
function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path="main" element={<MainPage/>}/>
          <Route path=":movieId" element={<DetailPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

