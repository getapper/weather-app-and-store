import { Weather } from "@/hooks/useWeather";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const useWeatherAppHomepage = (weather: Weather, getData: Function) => {
  const [selected, setSelected] = useState(null);
  const { daily, hourly } = weather;
  const dailyWeather = [];
  const hourlyWeather = [];

  for (let i = 0; i < daily.len; i++) {
    const data = getData(daily.weatherCode[i], 80);
    const date = new Date(daily.time[i])
      .toLocaleDateString("it-IT", {
        weekday: "short",
      })
      .toUpperCase();
    const comp = (
      <Box key={i}>
        <Typography>{date}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={220}
          height={270}
          bgcolor={selected === i + 1 ? "#d2dde2" : "lightgrey"}
          p={2}
          borderRadius="10px"
          border="3px solid lightblue"
          boxShadow={"5px 5px 12px -10px"}
          onClick={() =>
            selected === i + 1 ? setSelected(null) : setSelected(i + 1)
          }
          zIndex={1000}
        >
          <Typography pb={3} fontSize={18}>
            {data.type}
          </Typography>
          {data.image}
          <Stack
            direction="row"
            justifyContent="space-around"
            width="90%"
            py={2}
          >
            <Box>
              <Typography fontSize={14}>Max</Typography>
              <Typography>{daily.maxTemp[i]}°</Typography>
            </Box>
            <Box sx={{ opacity: 0.5 }}>
              <Typography fontSize={14}>Min</Typography>
              <Typography>{daily.minTemp[i]}°</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
    dailyWeather.push(comp);
  }

  for (let i = 0; i < hourly.len; i++) {
    const data = getData(hourly.weatherCode[i], 45);
    const date = new Date(hourly.time[i])
      .toLocaleDateString("it-IT", {
        weekday: "short",
      })
      .toUpperCase();
    const comp = (
      <Box key={daily.len + i}>
        <Typography>{date}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={140}
          height={190}
          bgcolor="#d2dde2"
          p={2}
          borderRadius="10px"
          border="2px solid lightblue"
          boxShadow={"5px 5px 10px -20px"}
        >
          <Typography fontSize={12}>{data.type}</Typography>
          {data.image}
          <Stack
            direction="row"
            justifyContent="space-around"
            width="90%"
            py={1}
            // mt={data.type !== "Parzialmente nuvoloso"}
          >
            <Box>
              <Typography fontSize={12}>Temp</Typography>
              <Typography fontSize={16}>{hourly.temperature[i]}°</Typography>
            </Box>
            <Box sx={{ opacity: 0.5 }}>
              <Typography fontSize={12}>Rain</Typography>
              <Typography fontSize={16}>{hourly.precipitations[i]}%</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
    hourlyWeather.push(comp);
  }

  return { dailyWeather, hourlyWeather, selected, setSelected };
};
