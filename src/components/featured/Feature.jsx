import { Box, Grid, Typography } from "@mui/material";
import Giraff from "../../assets/giraff.jpg";
import Home from "../../assets/home.jpg";
import Hall from "../../assets/hall.jpg";
import Gallery from "../../assets/gallery.jpg";
import Kaba from "../../assets/kaba.jpg";
import MediaCard from "./MediaCard";

const Featured = () => {
    const CardData = [Giraff, Home, Hall, Gallery, Kaba];
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
            <Typography variant="h4">Featured Explore</Typography>

            <Grid
                container
                spacing={3}
                rowGap={10}
                style={{ paddingLeft: 100, paddingRight: 100, marginTop: 20 }}
            >
                {CardData.map((item) => (
                    <Grid item xs={12} lg={4} key={item}>
                        <MediaCard image={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Featured;
