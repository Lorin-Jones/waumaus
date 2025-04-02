"use client";
import React, { useCallback } from "react";
import { Hero } from "../app/components/hero";
import { useText } from "../../text";
import ButtonAppBar from "../app/components/navBar";
import { SplashScreen } from "@/app/components/splashScreen";

export const WauMaus = () => {
    const [showSplash, setShowSplash] = React.useState(true)
    const text = useText()
    return (
        <>
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)}/>}
         {/* <ButtonAppBar />
        <Hero 
            header={text.landing.wauMaus}
            body={text.landing.mission}
            />  */}
        </>
    )
}