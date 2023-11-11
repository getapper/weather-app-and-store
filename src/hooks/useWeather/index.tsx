import weatherJson from "../../../weather.json";
import cloudy from "@/assets/cloudy.png";
import sunny from "@/assets/sun.png";
import rainy from "@/assets/rain.png";
import overcast from "@/assets/overcast.png";
import storm from "@/assets/thunder.png";
import Image, { StaticImageData } from "next/image";

export interface Weather {
  daily: { len: number; time: []; maxTemp: []; minTemp: []; weatherCode: [] };
  hourly: {
    len: number;
    time: [];
    temperature: [];
    precipitations: [];
    weatherCode: [];
  };
}

const getImage = (src: StaticImageData, alt: string, width?: number) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 80}
      style={{ marginBlock: 16 }}
    />
  );
};

const getDataFromCode = (code: number, width?: number) => {
  switch (code) {
    case 0:
      return {
        type: "Soleggiato",
        image: getImage(sunny, "Soleggiato", width),
      };
    case 1:
      return {
        type: "Princ. soleggiato",
        image: getImage(cloudy, "Parzialmente nuvoloso", width),
      };
    case 2:
      return {
        type: "Parz. nuvoloso",
        image: getImage(cloudy, "Parzialmente nuvoloso", width),
      };
    case 3:
      return { type: "Nuvoloso", image: getImage(overcast, "Nuvoloso", width) };
    case 53:
      return {
        type: "Pioggerella leggera",
        image: getImage(rainy, "Pioggia", width),
      };
    case 61:
      return {
        type: "Pioggia leggera",
        image: getImage(rainy, "Pioggia", width),
      };
    case 63:
      return {
        type: "Pioggia moderata",
        image: getImage(rainy, "Pioggia", width),
      };
    case 80:
      return { type: "Temporale", image: getImage(storm, "temporale", width) };
    default:
      return {
        type: "Soleggiato",
        image: getImage(sunny, "Soleggiato", width),
      };
  }
};

const useWeather = () => {
  const weather: Weather = JSON.parse(JSON.stringify(weatherJson));

  return { weather, getDataFromCode };
};

export default useWeather;
