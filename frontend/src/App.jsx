import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.jsx";
import DashBoard from "./components/DashBoard";
import AddNewMember from "./components/AddNewMember";
import { CartProvider } from "./context/CartContext.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route index element={<DashBoard />} />
              <Route
                path="/dashboard"
                element={<DashBoard></DashBoard>}
              ></Route>
              <Route
                path="/add"
                element={<AddNewMember></AddNewMember>}
              ></Route>

              <Route path="/edit-member/:id" element={<AddNewMember />} />
              <Route path="/profile/:id" element={<Profile />} />

            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
