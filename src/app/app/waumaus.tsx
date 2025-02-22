import React from "react";
import { Hero } from "../pages/hero";
import { useText } from "../../../text";

export const WauMaus = () => {
    const text = useText()
    return (
        <Hero 
            header={text.landing.wauMaus}
            body={text.landing.mission}
        />
    )
}