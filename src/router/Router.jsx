import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/aboutus/abouteus";
import Academics from "../pages/academics/academics";
import AdmissionPage from "../pages/admission/admissionPage";
import ContactPage from "../pages/contact/contact";
import EventPage from "../pages/eventPage/eventPage";
import LunchProgram from "../pages/lounchProgram/lunchProgram";
import { Main } from "../pages/main/Main";
import OurTeam from "../pages/ourTeam/ourTeam";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
    path: "/admission",
    element: <AdmissionPage />,
  },
  {
    path: "/lunch-program",
    element: <LunchProgram />,
  },
]);
