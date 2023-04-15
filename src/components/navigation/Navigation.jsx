import {
    AppBar,
    Box,
    IconButton,
    MenuItem,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    FacebookRounded,
    Instagram,
    SearchOutlined,
    Telegram,
    Twitter,
} from "@mui/icons-material";

const Navigation = () => {
    return (
        <AppBar
            sx={{
                position: "relative",
                marginBottom: -15,
                zIndex: 100,
                boxShadow: "0px 0px 0px rgba(255,255,255,0)",
                backgroundColor: "transparent",
                pt: 2,
            }}
        >
            <Toolbar
                sx={{
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            columnGap: { lg: 20, md: 10, sm: 2 },
                            borderBottom: "1px solid rgba(255,255,255,0.6)",
                            pb: 2,
                        }}
                    >
                        <Typography variant="h4">
                            <span style={{ color: "gold" }}>Golli</span>vant
                        </Typography>
                        <TextField
                            id="navbar-searchfield"
                            size="small"
                            variant="filled"
                            hiddenLabel
                            placeholder="Search Here"
                            InputProps={{
                                startAdornment: (
                                    <IconButton>
                                        <SearchOutlined />
                                    </IconButton>
                                ),
                                disableUnderline: true,
                                sx: {
                                    width: { xs: 130, sm: 260, md: 450 },
                                    borderRadius: 10,
                                    backgroundColor: "rgba(255,255,255,0.8)",
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(255,255,255,0.8)",
                                    },
                                },
                            }}
                        />
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                columnGap: 10,
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
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            columnGap: { lg: 10, md: 10, sm: 2 },
                            pt: 1,
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <MenuItem>Menu {item}</MenuItem>
                        ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
