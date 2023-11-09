import React, { memo } from "react";
import { useWeatherAppHomepage } from "./index.hooks";

type WeatherAppHomepageProps = {};

export const WeatherAppHomepage = memo(({}: WeatherAppHomepageProps) => {
  const {} = useWeatherAppHomepage();

  return <div>WEATHER APP HOMEPAGE</div>;
});

WeatherAppHomepage.displayName = "WeatherAppHomepage";
