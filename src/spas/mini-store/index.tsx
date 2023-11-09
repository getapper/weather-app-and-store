import React from "react";
import dynamic from "next/dynamic";

const MiniStoreSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
  },
);

export default MiniStoreSpa;
