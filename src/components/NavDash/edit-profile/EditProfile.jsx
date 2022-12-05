import React from "react";
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
