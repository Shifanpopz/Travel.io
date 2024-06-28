import React, { useEffect } from "react";
import "./main.css";
import "./main.scss";

import Aos from "aos";
import "aos/dist/aos.css";

import { HiOutlineClipboard, HiOutlineLocationMarker } from "react-icons/hi";
const data = [
  {
    id: 1,
    imgSrc: "/images/borabora.jpg",
    desTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: "/images/maldives.jpg",
    desTitle: "Maldives",
    location: "Indian Ocean",
    grade: "BEACH PARADISE",
    fees: "$1200",
    description:
      "The Maldives is known for its beautiful white-sand beaches, clear blue waters, and luxurious overwater bungalows.",
  },
  {
    id: 3,
    imgSrc: "/images/Santorini.jpg",
    desTitle: "Santorini",
    location: "Greece",
    grade: "CULTURAL HERITAGE",
    fees: "$800",
    description:
      "Santorini is famous for its stunning sunsets, whitewashed buildings, and vibrant blue domes.",
  },
  {
    id: 4,
    imgSrc: "/images/paris.jpg",
    desTitle: "Paris",
    location: "France",
    grade: "URBAN EXPLORATION",
    fees: "$900",
    description:
      "Paris, the city of love, is known for its iconic Eiffel Tower, rich history, and exquisite cuisine.",
  },
  {
    id: 5,
    imgSrc: "/images/japan.jpg",
    desTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL IMMERSION",
    fees: "$700",
    description:
      "Kyoto is renowned for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
  },
  {
    id: 6,
    imgSrc: "/images/newyork.jpg",
    desTitle: "New York City",
    location: "USA",
    grade: "CITY ADVENTURE",
    fees: "$1100",
    description:
      "New York City is a global hub of culture and entertainment, known for its iconic landmarks like Times Square and Central Park.",
  },
  {
    id: 7,
    imgSrc: "/images/rome.jpg",
    desTitle: "Rome",
    location: "Italy",
    grade: "HISTORICAL JOURNEY",
    fees: "$750",
    description:
      "Rome is steeped in history and is home to incredible landmarks like the Colosseum, Vatican City, and ancient ruins.",
  },
  {
    id: 8,
    imgSrc: "/images/sydney.jpg",
    desTitle: "Sydney",
    location: "Australia",
    grade: "URBAN COASTAL",
    fees: "$950",
    description:
      "Sydney is known for its stunning harbor, iconic Sydney Opera House, and beautiful beaches like Bondi Beach.",
  },
  {
    id: 9,
    imgSrc: "/images/capetown.jpg",
    desTitle: "Cape Town",
    location: "South Africa",
    grade: "NATURE ESCAPE",
    fees: "$800",
    description:
      "Cape Town is famous for its breathtaking scenery, including Table Mountain, and its rich cultural diversity.",
  },
  {
    id: 10,
    imgSrc: "/images/barcelona.jpg",
    desTitle: "Barcelona",
    location: "Spain",
    grade: "ARCHITECTURAL WONDER",
    fees: "$850",
    description:
      "Barcelona is known for its unique architecture, especially the works of Antoni Gaudí, and its vibrant cultural scene.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <h5>{fees}</h5>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboard className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
