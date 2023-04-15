import { PlayArrowOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const PlacesToVisit = () => {
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
            <Typography variant="h4">World's Best Places To Visit</Typography>
            <Box
                style={{
                    marginTop: 40,
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1641895964758-3e4374714a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYWNlcyUyMHRvJTIwdmlzaXQlMjB3b3JsZCUyMGJsYWNrJTIwcGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
                    width: "100%",
                    backgroundSize: "cover",
                    minHeight: "90vh",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4">
                    Trips For Your First Solo Travelling
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: "rgba(255,255,255,0.6)",
                        maxWidth: 1000,
                        textAlign: "center",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis ex dignissimos officiis quos est facilis natus
                    assumenda vero magni minus sint non iure reprehenderit
                    quidem quo nulla, mollitia harum voluptate? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Omnis ex
                    dignissimos officiis quos est facilis natus assumenda vero
                    magni minus sint non iure reprehenderit quidem quo nulla,
                    mollitia harum voluptate? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis ex dignissimos officiis
                    quos est facilis natus assumenda vero magni minus sint non
                    iure reprehenderit quidem quo nulla, mollitia harum
                    voluptate?
                </Typography>
                <IconButton>
                    <PlayArrowOutlined
                        style={{
                            color: "white",
                            fontSize: 50,
                            border: "2px solid white",
                            borderRadius: "50%",
                            marginTop: 50,
                        }}
                    />
                </IconButton>
                <Typography>Watch Video</Typography>
            </Box>
        </Box>
    );
};

export default PlacesToVisit;
