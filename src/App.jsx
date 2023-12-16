import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Header from "./Components/Header.jsx";
const App = () => {
  return (
    <>
    <Header/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
