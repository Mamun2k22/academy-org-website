import { Outlet } from "react-router-dom";
import VideoNavbar from "../home/VideoNavbar";
import Footer from "../../shared/footer";

export const Main = () => {
  return (
    <div>
      <VideoNavbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
