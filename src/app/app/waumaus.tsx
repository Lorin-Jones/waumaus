import React from "react";
import { Hero } from "../components/hero";
import { useText } from "../../../text";
import ButtonAppBar from "../components/navBar";

export const WauMaus = () => {
    const text = useText()
    return (
        <>
            <ButtonAppBar />
            <Hero 
                header={text.landing.wauMaus}
                body={text.landing.mission}
                />
        </>
    )
}