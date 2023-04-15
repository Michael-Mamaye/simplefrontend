import {
    FacebookRounded,
    Instagram,
    Telegram,
    Twitter,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 100,
                padding: 20,
                backgroundColor: "gold",
                color: "white",
            }}
        >
            <Typography>&copy; copyright 2023-APR-15</Typography>
            <Typography>{`Menues    Menues  Menues  Menues  Menues`}</Typography>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingTop: 20,
                }}
            >
                <FacebookRounded
                    style={{
                        color: "black",
                        backgroundColor: "white",
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
    );
};

export default Footer;
