import React, { memo } from "react";
import { useWeatherAppHomepage } from "./index.hooks";
import { Container, Stack, Typography } from "@mui/material";
import useWeather from "@/hooks/useWeather";

type WeatherAppHomepageProps = {};

export const WeatherAppHomepage = memo(({}: WeatherAppHomepageProps) => {
  const { weather, getDataFromCode } = useWeather();
  const { dailyWeather, hourlyWeather, selected } = useWeatherAppHomepage(
    weather,
    getDataFromCode,
  );

  return (
    <Container
      sx={{
        bgcolor: "white",
        height: "100vh",
        p: 4,
        textAlign: "center",
        userSelect: "none",
      }}
      maxWidth={false}
    >
      <Typography variant="h3" fontWeight={700}>
        Weather App
      </Typography>
      <Stack alignItems="center" p={6}>
        <Stack direction="row" columnGap={3}>
          {dailyWeather}
        </Stack>
      </Stack>
      <Stack
        display={!selected && "none"}
        bgcolor="#fcfcfc"
        alignItems="flex-start"
        p={6}
        width="80%"
        margin="auto"
        sx={{
          overflowX: "scroll",
          whiteSpace: "no-wrap",
          scrollBehavior: "smooth",
        }}
        boxShadow={"0px 8px 12px -10px"}
        borderRadius="10px"
      >
        <Stack direction="row" columnGap={1} sx={{ overflow: "hidden" }}>
          {hourlyWeather.filter(
            (el, index) =>
              index >= 24 * (selected - 1) && index < 24 * selected,
          )}
        </Stack>
      </Stack>
    </Container>
  );
});

WeatherAppHomepage.displayName = "WeatherAppHomepage";
