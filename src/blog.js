import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>HEADER</div>;

const Footer = () => <div>Footer</div>;

function Blog() {
	return (
		<>
			<Header />
			<Content>
				<H2>MAIN CONTENT</H2>
				<Routes>
					<Route path="/" element={<div>Главная Страница</div>} />
					<Route path="/login" element={<div>Страница Авторизации</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Список Пользователей</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="/post" element={<div>Новая Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
}

export default Blog;
