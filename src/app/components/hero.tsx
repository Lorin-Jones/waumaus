"use client";
import React from "react";

export type HeroProps = {
    header: string;
    body: string;
}

export const Hero: React.FC<HeroProps> = ({}) => {
    return (
        <div>{'it me'}</div>
    )
}