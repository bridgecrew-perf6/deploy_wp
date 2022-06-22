import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useContext, useEffect } from "react"
import { BusinessContext } from "../../contexts/BusinessContext/BusinessContext"
import { Toast } from '../../components/toast/Toast'
import { useState } from "react"
import CardProducts from "../../components/slideFeaturedProducts/CardProducts"

export const Store = () => {
    const [state, setState] = useContext(BusinessContext);
    const [products, setProducts] = useState([]);
    const [initialValues, setInitialValues] = useState({
        classProduct : "",
    });
    const [classProducts] = useState(
        [
            { id: 1, name: "Heladeria" },
            { id: 2, name: "Pasteleria" },
            { id: 3, name: "Postres" },
            { id: 4, name: "Bebidas" }
        ]
    )

    const getProductsCity = async () => {
        try {

            const city_selected = state.cities.filter((city) => city.id === state.city_id);

            await setState({ ...state, products: city_selected[0].products });
            await setProducts(city_selected[0].products)

        } catch (error) {

        }
    }


    useEffect(() => {
        if (state.city_id === "") {
            Toast.fire({
                icon: 'warning',
                title: 'Para ver productos debe seleccionar una ubicación.'
            });
        } else {
            getProductsCity();
        };
        // eslint-disable-next-line
    }, [state.city_id])

    return (
        <Grid container spacing={2} direction={"row"} p={2}>
            <Grid item xs={12} md={2}>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel variant="standard" htmlFor="product">
                            Filtro por categorias.
                        </InputLabel>
                        <Select
                            value={initialValues.classProduct}
                            name="classProduct"
                            id="classProduct"
                            label={"Clases"}
                            color="primary"
                            fullWidth
                            onChange={(e) => setInitialValues({ ...initialValues, classProduct: e.target.value })}
                        >
                            <MenuItem value="" >...</MenuItem>
                            {classProducts.map((element, index) => {
                                return <MenuItem key={`classElement${index.toString()}`} className="d-block" value={element.id}> {element.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid item xs={12} md={10} sx={{ display: { xs: "block", md: "flex" } }}>
                {products.map((item, index) => {
                    return (
                        <Grid item xs={12} md={3} m={2} key={`cardProductSlide${index}`}>
                            <CardProducts item={item} name={item.name} price={item.price} cant={item.cant} image={`https://picsum.photos/200/30${index + 1}`} />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}