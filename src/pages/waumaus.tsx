"use client";
import React, { useCallback, useEffect } from "react";
import { Hero } from "../app/components/hero";
import { useText } from "../../text";
import ButtonAppBar from "../app/components/navBar";
import { SplashScreen } from "@/app/components/splashScreen";

export const WauMaus = () => {
    const [showSplash, setShowSplash] = React.useState(false)
    const text = useText()

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
    
        if (!hasVisited) {
          setShowSplash(true);
          localStorage.setItem("hasVisited", "true");
        }
      }, []);


    return (
        <>
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)}/>}
         {!showSplash && (
            <>
            <ButtonAppBar />
            <Hero 
                header={text.landing.wauMaus}
                body={text.landing.mission}
                />
            </>
            )
            }
        </>
    )
}