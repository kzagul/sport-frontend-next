"use client"
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useEffect, useState } from 'react';
import { useSportsFacilities } from '@/entities/institution';

export const MapWithInstitutions = () => {
  const [city, setCity] = useState('Москва');
  const { data: facilities, isLoading, error } = useSportsFacilities(city);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    console.log('facilities', facilities)
  }, [city, facilities])


  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  
  return (
    <div>
        просто карта
    </div>
    // <YMaps>
    //   <div>
    //     <h1>Спортивные учреждения в {city}</h1>

    //     <input
    //       type="text"
    //       value={city}
    //       onChange={handleCityChange}
    //       placeholder="Введите город"
    //     />

    //     <Map
    //       defaultState={{ center: [55.751244, 37.618423], zoom: 10 }}
    //       width="100%"
    //       height="400px"
    //     >
    //       {facilities.map((facility, index) => (
    //         <Placemark
    //           key={index}
    //           geometry={facility.coordinates}
    //           properties={{
    //             balloonContent: `${facility.name}<br/>${facility.address}`,
    //           }}
    //         />
    //       ))}
    //     </Map>
    //   </div>
    // </YMaps>
  );
};
