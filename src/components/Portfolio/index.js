import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Movie Madness',
			description:
				'an App that lets you look up movie titles and find its ratings and info for that movie ',
			image: 'movie-madness\ proj-1.png',
			technologies: [
				'HTML/CSS',
				'Front End',
				
			],
			github: 'https://github.com/ianzyvith/Group1FrontEndProject.git',
			
		},
		{
			name: 'PassWord Gen',
			description:
				'creates random passwords with what-ever symbol and number you desire ',
			image: 'images/password-gen.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				
			],
			github: 'https://github.com/Amatos201/password-gen',
			
		},
		{
			name: 'Code A Break',
			description:
				'Need help with coding this website helps you post Questions or how you feel about coding so others can help or support you.',
			image: 'code-break\ proj-2.jpeg',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/OhDangBro/Code-A-Break.git',
			deployed: 'https://codeabreak.herokuapp.com/',
		},
		{
			name: 'Travel-Mate',
			description:
				'This website helps you plan and keep track of your vacation trips all in one location.',
			image: 'travel-mate\ proj\ 3.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/ahuber25/travel-mate.git',
			deployed: 'https://travel-mategr1.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://amatos201.github.io/peanuts-weather-dash/',
			
		},
		{
			name: 'Run Buddy',
			description:
				'its a website that display a gym and workout routine .',
			image: 'run-buddy.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Amatos201/run-buddy.git',
			
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;