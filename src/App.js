import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const toLogin = () => {
    navigate(location.pathname === "/home" ? "/login" : "/home");
  };
  return (
    <div className="SubappReact">
      <header className="header">
        <span className="title">
          子应用react
          <span onClick={toLogin}>(当前路由：{location.pathname})</span>
        </span>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
