export const getProfileData = () => {
	let profile = {
		name: 'David',
		location: 'Waltham, MA',
		github: 'https://github.com/DavidNoftsier',
		linkedIn: 'https://www.linkedin.com/in/davidnoftsier/',
		title: 'Software Developer',
		degree: 'B.A. Computer Science, University at Albany',
		tech: 'JS, CSS3, HTML5, C#, SQL',
		email: 'dnoftsier@gmail.com',
	} 

	return profile;
}

export const getProjectsData = () => {
	let projects = [{
		name: "Goodbye HTML",
		date: "August 2018",
	   	description: `Goodbye HTML is a Google Chrome extension that allows users to block elements from appearing
									when they visit a website. Multiple options exist for blocking elements temporarily or permanently
									on limited sites or all sites. A robust UI was developed to allow the use of mouse movemenets 
									to discover and choose elements.`,
		tech: "Chrome Extension, CSS, JS, HTML",
	}];

	return projects;
}