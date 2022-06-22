import { createContext, useState, useEffect } from "react";

const AppProvider = (props) => {
  const [state, setState] = useState({
    cartProducts: [{
      "id": 2,
      "name": "Veneciana Lulo",
      "price": 4000,
      "cant": 5
    }],
    cartOpen: false,
    cities: [
      {
        id: 1,
        name: "Manizales",
        products: [
          { id: 1, name: "Veneciana Mora", price: 2500, cant: 5 },
          { id: 2, name: "Veneciana Lulo", price: 4000, cant: 5 },
          { id: 3, name: "Veneciana Vainilla", price: 5000, cant: 5 }
        ]
      },
      {
        id: 2,
        name: "Pereira",
        products: [
          { id: 1, name: "Veneciana Mora", price: 3000, cant: 4 },
          { id: 2, name: "Veneciana Lulo", price: 4500, cant: 4 },
          { id: 3, name: "Veneciana Vainilla", price: 5500, cant: 4 }
        ]
      },
      {
        id: 3,
        name: "Barranquilla",
        products: [
          { id: 1, name: "Veneciana Mora", price: 3500, cant: 3 },
          { id: 2, name: "Veneciana Lulo", price: 5000, cant: 3 },
          { id: 3, name: "Veneciana Vainilla", price: 6000, cant: 3 }
        ]
      }
    ],
    city_id: "",
    city_name: "",
    dialogCity: false,
    products: []
  });


  useEffect(() => {
    console.log("context")
  }, [])


  return (
    <BusinessContext.Provider value={[state, setState]}>
      {props.children}
    </BusinessContext.Provider>
  );
};

export default AppProvider;
export const BusinessContext = createContext();