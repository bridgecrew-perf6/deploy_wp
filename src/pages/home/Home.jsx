import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Slide from "../../components/slideFeaturedProducts/Slide";
// import { BusinessContext } from "../../contexts/BusinessContext/BusinessContext";
import Venecia1 from "../../assets/img/Venecia1.png";
import Venecia2 from "../../assets/img/Venecia2.png";


export const Home = () => {
  // const [state] = useContext(BusinessContext);
  const [itemsCarousel, setItemsCarousel] = useState([]);

  const getItemsCarousel = () => {

    const items = [];

    items.push({
      name: "",
      description: <img alt={`imgvenec1`}src={Venecia1} width={"100%"} height={window.innerWidth <= 760 ? "300vh": "500vh"} />
    });

    items.push({
      name: "",
      description: <img alt={`imgvenec2}`} src={Venecia2} width={"100%"} height={window.innerWidth <= 760 ? "300vh": "500vh"} />
    });

    // Array.from({ length: 2 }).forEach((item, index) => {
    //   items.push({
    //     name: "",
    //     description: <img alt={`img${index}`} src={`https://picsum.photos/200/30${index + 1}`} width={"100%"} height={window.innerWidth <= 760 ? "300vh": "500vh"} />
    //   });
    // });

    return setItemsCarousel(items);

  }


  useEffect(() => {
    getItemsCarousel();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container>
      <CarouselComponent items={itemsCarousel} />
      <Slide />
    </Grid>
  )
}