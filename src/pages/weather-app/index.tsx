import React, { memo } from "react";
import WeatherAppSpa from "@/spas/weather-app";

type WeatherAppProps = {};

const WeatherApp = memo(({}: WeatherAppProps) => {
  return <WeatherAppSpa />;
});
WeatherApp.displayName = "WeatherApp";

export default WeatherApp;
