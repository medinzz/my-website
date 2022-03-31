import emoji from "react-easy-emoji"
import rightvalley from "./assets/images/rightvalley.png"


export const greetings = {
	name: "Joshua Merwin Medina",
	title: "Hi, I'm Joshua",
	description:
		"A passionate Software Developer having experience in building Web applications with JavaScript / Node / Python / PHP and some other cool libraries and frameworks. I've also worked on Cross-Platform Mobile Apps With Flutter.",
	resumeLink: "https://github.com/medinzz/ojt-portfolio/raw/main/src/assets/RESUME.pdf",
}

export const socialLinks = {
	facebook: "https://www.facebook.com/medinz30",
	twitter: "https://twitter.com/JoshuaMerwin",
	github: "https://github.com/medinzz",
	linkedin: "https://www.linkedin.com/in/medinzzz/",
}

export const skillsSection = {
	title: "WHAT I DO?",
	subTitle:
		"EAT, CODE, SLEEP, REPEAT",
	skills: [
		emoji(
			"⚡ Develop quality APIs for your web and mobile applications."
		),
		emoji(
			"⚡ Integrate various technologies to the current system."
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			icon: <i className="fab fa-html5"></i>,
		},
		{
			skillName: "css3",
			icon: <i className="fab fa-css3-alt"></i>,
		},
		{
			skillName: "JavaScript",
			icon: <i className="fab fa-js"></i>,
		},
		{
			skillName: "reactjs",
			icon: <i className="fab fa-react"></i>,
		},
		{
			skillName: "npm",
			icon: <i className="fab fa-npm"></i>,
		},
		{
			skillName: "nodejs",
			icon: <i className="fab fa-node"></i>,
		},
		{
			skillName: "sql-database",
			icon: <i className="fas fa-database"></i>,
		},
		{
			skillName: "flask",
			icon: <i className="fa fa-flask"></i>,
		},
		{
			skillName: "python",
			icon: <i className="fab fa-python"></i>,
		},
		{
			skillName: "git",
			icon: <i className="fab fa-git-alt"></i>,
		},
	],
}

export const SkillBars = [
	{
		Stack: "Frontend/Design",
		progressPercentage: "50",
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
]

export const educationInfo = [
	{
		schoolName: "Polytechnic University of the Philippines",
		subHeader: "Diploma in Information Communication Technology",
		duration: "June 2019 - Present",
		desc: "Participated in NASA Space Apps Challenge last november 2019",
		descBullets: [
			"Team leader at Software Development Projects.",
			"Analytical Hands-on experience in weekly school activities.",
		],
	},
	{
		schoolName: "STI College Marikina",
		subHeader: "TVL MAWD Information in Communication technology",
		duration: "June 2017 - April 2019",
		desc: "Mobile Application and Web Development SHS Course",
		descBullets: [
			"Participated at internal hackathons.",
		],
	},
]

export const workExperience = [
	{
		cardHeader: "RightValley",
		image: rightvalley,
		title: "Former Associate Software Developer",
		date: "September 2020 - August 2021",
		desc: 'RightValley is a software company focus on providing solutions to different businesses.',
		website: <a href="https://rightvalley.com/">RightValley website </a>,
		descBullets: [
			"Provide production issue fix.",
			"Feature integration.",
			"Custom backend development.",
		],
	},
	{
		cardHeader: "Signant Health",
		image: "https://www.signanthealth.com/wp-content/uploads/2021/02/new_logo.svg",
		title: "Software Developer",
		date: "September 2021 - Present",
		desc: 'Signant Health is the global evidence generation company. We help you modernize clinical trials by meeting patients where they are and reimagining the path to proof.',
		website: <a href="https://www.signanthealth.com/">Signant Health website </a>,
	}
]

