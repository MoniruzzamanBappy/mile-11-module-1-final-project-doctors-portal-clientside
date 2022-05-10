import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  const service = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "A cavity filling is when the dentist fills the opening in your tooth with some kind of material. The hope is to urge obviate your symptoms.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth whitening involves bleaching your teeth to make them lighter. It cant make your teeth brilliant white, but it can lighten the existing color.",
      img: whitening,
    },
  ];
  return (
    <div className="my-24 px-12">
      <div>
        <h1 className="text-primary text-xl font-bold text-center">
          OUR SERVICES
        </h1>
        <h1 className="text-accent text-4xl pt-2 font-bold text-center">
          Services We Provide
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16 px-12">
        {service.map((items) => (
          <Service key={items._id} p={items} />
        ))}
      </div>
      <div>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p class="py-6  text-justify">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
              <button class="btn border-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
