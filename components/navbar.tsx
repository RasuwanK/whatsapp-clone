import Link from "next/link";
import type { CSSProperties } from "react";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

const linkStyle: CSSProperties = {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
}

export default function Navbar() {
    return (
        <AppBar sx={{ height: "80px" }} color="secondary">
            <ToolBar sx={{ height: "100%" }}>
                <Typography variant="h4">Whatsapp clone</Typography>
                <Stack 
                    direction="row" 
                    gap="15px" 
                    sx={{ marginLeft: "40px", flexGrow: 1 }}
                >
                    <Link href="/" style={linkStyle}>Home</Link>
                    <Link href="/app" style={linkStyle}>App</Link>
                </Stack>
            </ToolBar>
        </AppBar>
    )
}