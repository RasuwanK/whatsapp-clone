import {Fragment, ReactNode} from "react";
import type {CSSProperties} from "react";
import Navbar from "./navbar";

const bodyStyles: CSSProperties = {
  marginTop: "95px"
}

interface PageLayoutPropsType {
    children: ReactNode;
}

export default function PageLayout(
    {children}: PageLayoutPropsType
) {
  return (
    <Fragment>
        <Navbar />
        <main style={bodyStyles}>
            {children}
        </main>
        <footer></footer>
    </Fragment>
  )
}
