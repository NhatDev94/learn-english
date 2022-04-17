import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning";

import "./App.css";
import Review from "./pages/Review";

function App() {
  const location = useLocation();

  const sidebar = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Learning",
      path: "/learning",
    },
    {
      name: 'Review',
      path: '/review'
    }
  ];

  return (
    <div className="app">
      <div className="header w-full h-[60px] fixed top-0 left-0 bg-white z-10 shadow flex items-center px-20">
        <h4 className="font-semibold">Learn English</h4>
      </div>
      <div className="main flex">
        <div className="sidebar w-1/5 fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r">
          {sidebar?.map((item, i) => (
            <p key={i}>
              <Link
                to={item.path}
                className={`w-full 
                mb-1 
                hover:text-white 
                font-semibold 
                py-2 pl-5 
                inline-block 
                hover:bg-blue-500
                ${location.pathname === item.path ? 'link-active' : ''}
                `}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>
        <div className="w-4/5 content relative top-[60px] left-[20%] py-2 px-5">
          <Routes>
            <Route path="/learn-english" element={<Home />} />
            <Route path="/learn-english/learning" element={<Learning />} />
            <Route path="/learn-english/review" element={<Review />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
