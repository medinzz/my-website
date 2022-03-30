import { Card, CardBody, Badge } from "reactstrap"


const EducationCard = (props: any) => {
	return (
		<Card className="mt-4 shadow card-lift--hover">
			<CardBody>
				<div className="px-3 d-flex">
					<div className="pl-4">
						<h5 className="text-info">
							{props.education.schoolName}
						</h5>
						<h6>{props.education.subHeader}</h6>
						<Badge color="info" className="mr-1">
							{props.education.duration}
						</Badge>
						<p className="mt-3 description">{props.education.desc}</p>
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
	);
};

export default EducationCard;
