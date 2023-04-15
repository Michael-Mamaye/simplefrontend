import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ image }) {
    return (
        <Card
            elevation={0}
            style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }}
        >
            <CardMedia sx={{ height: 250 }} image={image} title="card title" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    The title is gonna be here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat natus vel reiciendis? Dignissimos, esse deserunt.
                    Sed, possimus expedita commodi deserunt cupiditate
                    dignissimos sunt rerum ipsa a saepe reprehenderit.
                    Assumenda, cumque.
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", flexDirection: "row" }}>
                <Button size="small" style={{ color: "gold" }}>
                    Learn More
                </Button>
                <Button size="small">go back</Button>
            </CardActions>
        </Card>
    );
}
