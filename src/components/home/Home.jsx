import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box
            style={{
                backgroundImage: `url("https://media.istockphoto.com/id/887651992/photo/women-are-walking-alone-in-the-dark-light-at-the-end-of-the-tunnel-concept.jpg?b=1&s=170667a&w=0&k=20&c=taRH-oZqfAPkB9wr3ouW_66zA4xfX8xpKWShyUcB1EU=")`,
                backgroundSize: "cover",
                height: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h1">Where Will You go next?</Typography>
            <Typography
                style={{
                    maxWidth: 1000,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 20,
                    textAlign: "center",
                }}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem architecto minima veritatis dignissimos dolor tempora
                quam eligendi voluptas? Eveniet quam architecto qui, laboriosam
                pariatur fugit ipsa blanditiis soluta quo voluptate? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                architecto minima veritatis dignissimos dolor tempora quam
                eligendi voluptas? Eveniet quam architecto qui, laboriosam
                pariatur fugit ipsa blanditiis soluta quo voluptate? Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                architecto minima veritatis dignissimos dolor tempora quam
                eligendi voluptas? Eveniet quam architecto qui, laboriosam
                pariatur fugit ipsa blanditiis soluta quo voluptate?
            </Typography>
            <Typography variant="h4" style={{ color: "gold", marginTop: 30 }}>
                Let's Go...
            </Typography>
        </Box>
    );
};

export default Home;
