/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

import "./EditPhoto.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import ButtonPurple from "../buttons/ButtonPurple";
import photo from "../../images/train1.jpg";

function EditPhoto() {
	return (
		<Container className='edit-photo'>
			<Row>
				<Col className='mx-auto my-3 text-center'>
					<Image
						className='user-photo rounded-circle img-responsive img-fluid'
						src={photo}
						alt={`name`}
					/>
				</Col>
			</Row>
			<Row>
				<Col className='mx-auto my-3 text-center'>
					<ButtonPurple text={`Edit Photo`} />
				</Col>
			</Row>
		</Container>
	);
}

export default EditPhoto;
