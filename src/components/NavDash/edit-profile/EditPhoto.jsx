import React from "react";
import "./EditPhoto.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import ButtonPurple from "../buttons/ButtonPurple ";
import photo from "../../images/train1.jpg";

const EditPhoto = () => {
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
};

export default EditPhoto;
