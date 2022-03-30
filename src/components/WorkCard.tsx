import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { Fade } from "react-awesome-reveal"


const WorkCard = ({data}: any) => {

	return (
		<Fade direction="right" duration={500}>
			<Card className="mt-4 shadow card-lift--hover">
				<CardHeader className="py-3 text-center bg-primary">
					<h5 className="text-white">{data.cardHeader}</h5>
				</CardHeader>
				<CardBody className="py-5">
					<img className="mb-3 bg-transparent img-center img-fluid w-50" src={data.image} style={{ width: "100px" }} alt="" />
					<CardTitle tag="h5">{data.title}</CardTitle>
					<CardSubtitle>{data.date}</CardSubtitle>
					<CardText className="my-3 text-left description">
						{data.desc}
						<br />
						{data.website}
						<ul>
							{
								data.descBullets ?
									data.descBullets.map((desc: string) => {
										return <li key={desc}>{desc}</li>
									}) : null
							}
						</ul>
					</CardText>
					<div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	)
}

export default WorkCard
