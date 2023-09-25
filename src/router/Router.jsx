import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/aboutus/abouteus";
import Academics from "../pages/academics/academics";
import ContactPage from "../pages/contact/contact";
import EventPage from "../pages/eventPage/eventPage";
import LunchProgram from "../pages/lounchProgram/lunchProgram";
import OurTeam from "../pages/ourTeam/ourTeam";
import App from "../App";
import { Home } from "../pages/home/Home";
import Admission from "../pages/admission/Admission";
import TeamDetailsPage from "../pages/ourTeam/TeamDetailsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/team-details",
        element: <TeamDetailsPage />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/lunch-program",
        element: <LunchProgram />,
      },
    ],
  },
]);
