import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { Button } from '../button/button';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalIsOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		background-color: rgba (0, 0, 0, 0.9);
		width: 100%;
		height: 100%;
		position: absolute;
	}

	& .box {
		position: relative;
		width: 400px;
		margin: 0 auto;
		padding:0  20px  20px;
		text-align: center;
		top: 50%;
		transform: translate(0, -50%)
		position: relative;
		z-index: 30;
		border: 1px solid rgba(255, 255, 255, 0.81);

	}

	& .buttons {
		display: flex;
		justify-content: center;
	}
	& .buttons button {
		margin: 0 10px;
	}
`;
