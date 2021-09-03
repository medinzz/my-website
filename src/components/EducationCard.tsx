import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-awesome-reveal";

const EducationCard = (props: any) => {
	return (
		<Fade direction="right" duration={1000} fraction={1}>
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">
								{props.education.schoolName}
							</h5>
							<h6>{props.education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{props.education.duration}
							</Badge>
							<p className="description mt-3">{props.education.desc}</p>
							<ul>
								{props.education.descBullets
									? props.education.descBullets.map((desc: string) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EducationCard;
