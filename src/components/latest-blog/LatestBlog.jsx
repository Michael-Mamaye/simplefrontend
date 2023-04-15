import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import Giraff from "../../assets/giraff.jpg";
import Home from "../../assets/home.jpg";
import Hall from "../../assets/hall.jpg";
import HorizontalCard from "./HorizontalCards";
import {
    FacebookRounded,
    Instagram,
    Telegram,
    Twitter,
} from "@mui/icons-material";

const LatestBlog = () => {
    const CardData = [Giraff, Home, Hall, Home, Hall];
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
            <Typography variant="h4">My Latest Blog</Typography>
            <Grid
                container
                spacing={3}
                style={{ paddingLeft: 100, paddingRight: 100, marginTop: 20 }}
            >
                <Grid item xs={12} lg={8}>
                    {CardData.map((item) => (
                        <HorizontalCard image={item} />
                    ))}
                </Grid>
                <Grid item xs={12} lg={4} style={{ marginTop: 120 }}>
                    <Typography variant="h6">Best of the week</Typography>
                    <Box
                        style={{
                            borderRight: "1px solid rgba(0,0,0,0.1)",
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                            padding: 10,
                        }}
                    >
                        {CardData.map((item) => (
                            <Box
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}
                            >
                                <img src={item} width={50} height={50} alt="" />
                                <Box>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ea in a at vel
                                        voluptatum
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>{" "}
                    <Box
                        style={{
                            marginTop: 50,
                            borderRight: "1px solid rgba(0,0,0,0.1)",
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                            padding: 10,
                        }}
                    >
                        <Typography variant="h6">Follow us</Typography>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                columnGap: 10,
                                justifyContent: "space-around",
                                paddingTop: 20,
                            }}
                        >
                            <FacebookRounded
                                style={{
                                    color: "gold",
                                    backgroundColor: "transparent",
                                }}
                            />
                            <Instagram
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                }}
                            />
                            <Telegram
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                }}
                            />
                            <Twitter
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        style={{
                            backgroundColor: "gold",
                            color: "white",
                            marginTop: 50,
                            borderRight: "1px solid rgba(0,0,0,0.1)",
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                            padding: 10,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            hello there is a note here
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci qui soluta temporibus deserunt
                            consectetur minus nostrum harum dolore id. Magnam ab
                            at quis vitae nostrum ad tenetur enim optio iure?
                        </Typography>
                        <TextField
                            id="navbar-searchfield"
                            size="small"
                            fullWidth
                            variant="filled"
                            hiddenLabel
                            placeholder="field here"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    marginTop: 3,
                                    borderRadius: 2,
                                    backgroundColor: "rgba(255,255,255,1)",
                                },
                            }}
                        />
                        <TextField
                            id="navbar-searchfield"
                            size="small"
                            fullWidth
                            variant="filled"
                            hiddenLabel
                            placeholder="field here"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    marginTop: 1,
                                    borderRadius: 2,
                                    backgroundColor: "rgba(255,255,255,1)",
                                },
                            }}
                        />
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Repellendus atque, vel iure nihil temporibus
                        </Typography>
                        <TextField
                            id="navbar-searchfield"
                            size="small"
                            fullWidth
                            variant="filled"
                            hiddenLabel
                            placeholder="field here"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    marginTop: 3,
                                    borderRadius: 2,
                                    backgroundColor: "rgba(255,255,255,1)",
                                },
                            }}
                        />
                    </Box>
                    <Box
                        style={{
                            marginTop: 50,
                            borderRight: "1px solid rgba(0,0,0,0.1)",
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                            padding: 10,
                        }}
                    >
                        <Typography variant="h6">Links</Typography>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingTop: 20,
                                color: "gold",
                            }}
                        >
                            {[
                                "http://hello.sisay.com/here/i/am/live/he",
                                "http://hello.sisay.com/here/i/am/live/he",
                                "http://hello.sisay.com/here/i/am/live/he",
                                "http://hello.sisay.com/here/i/am/live/he",
                                "http://hello.sisay.com/here/i/am/live/he",
                            ].map((item) => (
                                <Link style={{ marginTop: 5, color: "gold" }}>
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestBlog;
