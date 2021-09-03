import emoji from "react-easy-emoji"

export const greetings = {
	name: "Joshua Merwin Medina",
	title: "Hi, I'm Joshua",
	description:
		"A passionate Software Developer having an experience of building Web applications with JavaScript / Reactjs / Python / Django and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "#",
}

export const socialLinks = {
	facebook: "https://www.facebook.com/medinz30",
	twitter: "https://twitter.com/JoshuaMerwin",
	github: "https://github.com/medinzz",
	linkedin: "https://www.linkedin.com/in/medinzzz/",
}

export const skillsSection = {
	title: "What I do",
	subTitle:
		"ONE IN A MILLION DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly secured API for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
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
			skillName: "sql-database",
			icon: <i className="fas fa-database"></i>,
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

