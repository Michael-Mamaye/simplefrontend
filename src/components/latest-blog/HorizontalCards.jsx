import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export default function HorizontalCard({ image }) {
    return (
        <Card elevation={0} sx={{ display: "flex", marginTop: 5 }}>
            <CardMedia
                component="img"
                sx={{ width: "50%", maxHeight: 300 }}
                image={image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        The title is gonna be here
                    </Typography>
                    <Typography style={{ marginTop: -5 }}>
                        <span style={{ color: "gold" }}>Here Link</span> Learn
                        More
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        check likes and comments
                    </Typography>
                    <Typography
                        variant="body"
                        color="text.secondary"
                        style={{
                            wordSpacing: 1,
                            letterSpacing: 1,
                            lineHeight: 1.5,
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat natus vel reiciendis? Dignissimos, esse
                        deserunt. Sed, possimus expedita commodi deserunt
                        cupiditate dignissimos sunt rerum ipsa a saepe
                        reprehenderit. Assumenda, cumque.
                    </Typography>
                </CardContent>
                <CardActions style={{ display: "flex", flexDirection: "row" }}>
                    <Button size="small" style={{ color: "gold" }}>
                        Learn More
                    </Button>
                    <Button size="small">go back</Button>
                </CardActions>
            </Box>
        </Card>
    );
}
