import { Outlet } from "react-router-dom";
import Footer from "../../shared/footer";
import Navbar from "../../shared/Navbar";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
