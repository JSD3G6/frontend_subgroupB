/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

import { Container, Row, Col } from "react-bootstrap";
import EditPhoto from "./EditPhoto";
import EditUserData from "./EditUserData";
import "./EditProfile.css";

const EditProfile = () => {
	return (
		<Container>
			<Container className='edit-profile'>
				<h2 className='mt-5 mb-3 ms-5 ps-3'>Edit Profile</h2>
				<Container className='mx-auto edit-profile-card'>
					<Row>
						<Col className='col-lg-3 p-3 col-12'>
							<EditPhoto />
						</Col>
						<Col className='col-lg-9 p-3 col-12'>
							<EditUserData />
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
};

export default EditProfile;
