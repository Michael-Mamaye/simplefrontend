import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Giraff from "../../assets/giraff.jpg";
import Home from "../../assets/home.jpg";
import Hall from "../../assets/hall.jpg";
import Gallery from "../../assets/gallery.jpg";
import Kaba from "../../assets/kaba.jpg";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Categories = () => {
    var items = [
        {
            name: "Random Name #1",
            url: Giraff,
        },
        {
            name: "Random Name #2",
            url: Home,
        },
        {
            name: "Random Name 2",
            url: Hall,
        },
        {
            name: "Random Action",
            url: Gallery,
        },
        {
            name: "Random Kaba",
            url: Kaba,
        },
        {
            name: "Random Name 2",
            url: Gallery,
        },
        {
            name: "Random Nam2",
            url: Hall,
        },
        {
            name: "Random Nam2",
            url: Home,
        },
    ];
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 100,
            }}
        >
            <Typography variant="h4">Select A Category</Typography>
            <Box
                style={{
                    width: "90%",
                    marginTop: 30,
                }}
            >
                <Carousel responsive={responsive} autoPlay>
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default Categories;

function Item(props) {
    return (
        <Box>
            <img src={props.item.url} width={250} height={200} alt="" />
            <Typography
                style={{
                    marginTop: -100,
                    left: 30,
                    position: "absolute",
                    fontWeight: "bolder",
                    fontSize: 20,
                    zIndex: 10,
                    textAlign: "center",
                    color: "white",
                }}
            >
                {props.item.name}
            </Typography>
        </Box>
    );
}
