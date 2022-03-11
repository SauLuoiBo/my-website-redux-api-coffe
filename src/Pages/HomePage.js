import React from "react";
import About from "../Components/About/About";
import Booking from "../Components/Booking/Booking";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Reviews from "../Components/Reviews/Reviews";
// import { useFetch } from "../hook/useFetch";
import { useDispatch } from "react-redux";
import { setContacts } from "../redux/contactSlice";
import api from "../api/contact";

const HomePage = () => {
  // const contacts = useFetch('http://localhost:3006/contacts', [])
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //     dispatch(setContacts(contacts.data))
  //     console.log(contacts.data)
  // }, [dispatch,contacts.data])

  React.useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get("/contacts");
        console.log(response);
        dispatch(setContacts(response.data));
      } catch (err) {
        if (err.response) {
          console.log(err.response.data, "data");
          console.log(err.response.status, "stats");
          console.log(err.response.headers, "he");
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    getPost();
  }, [dispatch]);

  return (
    <>
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Booking />
    </>
  );
};

export default HomePage;
