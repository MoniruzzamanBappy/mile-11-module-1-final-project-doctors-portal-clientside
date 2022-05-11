import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="py-5"></div>
      <Info></Info>
      <Services />
      <MakeAppointment />
      <Testimonials />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Home;
