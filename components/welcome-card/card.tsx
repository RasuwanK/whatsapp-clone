import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

export default function WelcomeCard() {
  const isSmallDevice = useMediaQuery("(max-width: 500px)");
  return (
    <Card component="article">
      <CardHeader
        component="header"
        titleTypographyProps={{
          component: "h1",
          variant: isSmallDevice ? "h5" : "h4",
          align: isSmallDevice ? "center" : "left"
        }}
        title="Welcome to Whatsapp clone"
      />
      <CardContent 
        sx={{ fontSize: isSmallDevice ? "18px" : "20px" }} 
        component="section"
      >
        <ul>
          <Stack 
            direction="column" 
            component="section" 
            gap="20px"
          >
            <li>This is a simple app to have chat with individuals and groups</li>
            <li>Easy and simple to use interface</li>
            <li>An elegant replacement for whatsapp</li>
            <li><Link href="/app">{"Let's get started with whatsapp clone"}</Link></li>
          </Stack>
        </ul>
      </CardContent>
    </Card>
  )
}
