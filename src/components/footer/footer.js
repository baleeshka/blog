import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeightText = styled.div`
	line-height: 35px;
`;

export const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&lang=ru&appid=adbadc8abc45ead874db46e88fa9cd5b',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<HeightText>
				<div>Блог Азиатской культуры</div>
				<div>Почта - asian@culture.com</div>
			</HeightText>
			<div>
				<div>
					Город - {city}. Дата -{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>Погода - {weather}</div>
				<div>Температура - {temperature}°C </div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	height: 120px;
	padding: 20px 40px;
	background-color: rgb(25, 25, 25);
	box-shadow: 0px -15px 10px -15px rgba(255, 255, 255, 0.81);
	font-weight: 600;
`;
