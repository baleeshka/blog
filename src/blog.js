import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Header } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: rgb(25, 25, 25);
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

function Blog() {
	return (
		<AppColumn>
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
		</AppColumn>
	);
}

export default Blog;
