import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiKey = `a51b58f6-94cb-44ed-a2af-b46b92b9732b`

// Function to get city coordinates using Yandex Geocoder API
const getCityCoordinates = async (city) => {
  const response = await axios.get(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${encodeURIComponent(city)}&format=json`
  );
  const pos = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
  return {
    longitude: pos[0],
    latitude: pos[1],
  };
};

// Function to get sports facilities using Yandex Places API
const getSportsFacilities = async (city) => {
  const { latitude, longitude } = await getCityCoordinates(city);
  const response = await axios.get(
    `https://search-maps.yandex.ru/v1/?apikey=${apiKey}&text=спортзал&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.552069,0.400552&results=10`
  );
  return response.data.features.map((feature) => ({
    name: feature.properties.CompanyMetaData.name,
    address: feature.properties.CompanyMetaData.address,
    coordinates: feature.geometry.coordinates,
  }));
};

// Custom hook to fetch sports facilities
export const useSportsFacilities = (city) => {
  return useQuery({
    queryKey: ['sportsFacilities', city],
    queryFn: () => getSportsFacilities(city),
    enabled: !!city,
  });
};
