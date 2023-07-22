import React from "react";
import "../styles/SpecialsCard.css";
import Special1 from "../assets/greek-salad.jpg";
import Special2 from "../assets/baklava.jpg";
import Special3 from "../assets/biscotti.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SpecialsCard = () => {
  const specialMenus = [
    {
      image: Special1,
      title: "Greek Salad",
      price: "$11.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order online",
    },
    {
      image: Special2,
      title: "Baklava",
      price: "$8.99",
      description:
        "Indulge in a symphony of sweet delight with Baklava, the golden jewel of Mediterranean desserts. Layers of flaky pastry that dances on your taste buds.",
      order: "Order online",
    },
    {
      image: Special3,
      title: "Almond Chocolate Biscotti",
      price: "$9.99",
      description:
        "The almond chocolate biscotti is a delicious, soft cookie guaranteed to satisfy your sweet tooth.",
      order: "Order online",
    },
  ];

  return (
    <div>
      <div className="special-card">
        {specialMenus.map((menu) => {
          return (
            <div key={menu.title}>
              <div className="special-card-container">
                <div className="image-container">
                  <img src={menu.image} alt={menu.title} />
                </div>
                <div className="special-card-text">
                  <div className="special-card-title">
                    <h3>{menu.title}</h3>
                    <h3 className="price-tag">{menu.price}</h3>
                  </div>
                  <p>{menu.description}</p>
                  <NavLink to="#">
                    <h4>
                      {menu.order}
                      {
                        <MdDeliveryDining
                          size={30}
                          style={{ color: "#333333", marginLeft: "10px" }}
                        />
                      }
                    </h4>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialsCard;
