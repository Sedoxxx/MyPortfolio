<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<main class="middle-container">
	<div class="profile">
		<img class="profile-picture" src="images/aymen-circle.png" alt="aymen-profile" />
		<h2>Hi.</h2>
		<p class="bio-parag">
			My name is Mohamed Aymen Daassi and I am currently pursuing a Bachelor's degree in Computer
			Science at <a class="work-companies" href="https://innopolis.university/"
				>Innopolis University</a
			>. Outside of my studies, I enjoy a variety of hobbies including Music, DJing, Basketball, TV
			shows, Typeracing, and Problem Solving. I'm fond of computer hardware, and I enjoy building
			custom pcs and diagnosing problems. As a student, I am eager to gain experience and skills to
			help me achieve my future career goals, which I am still exploring.
		</p>
	</div>
	<hr />
	<div class="skills">
		<h2>My Skills.</h2>
		<img class="code-skills-img" src="images/code.png" alt="code-skills-img" />
		<div class="skill-tab">
			<div>Java</div>
			<div>☕☕☕☕</div>
			<div>C++</div>
			<div>🌶️🌶️🌶️🌶️</div>
			<div>Python</div>
			<div>🐍🐍🐍</div>
			<div>HTML</div>
			<div>🥒🥒</div>
			<div>JavaScript</div>
			<div>🍌</div>
			<div>Photoshop</div>
			<div>🌻🌻🌻🌻</div>
		</div>
	</div>
	<div class="education">
		<h2>Education.</h2>
		<img class="grad-cap-img" src="images/graduation-cap.png" alt="grad-cap-img" />
		<ul id="education-bullets">
			<li>Khaznadar Primary private school 2008-2015</li>
			<li>Manouba Pioneer Prep School 2016-2018</li>
			<li>
				Sadiki HighSchool 2018-2022
				<ul>
					<li>Bac Math</li>
				</ul>
			</li>
			<li>
				Innopolis University 2022-2026
				<ul>
					<li>Bachelor Degree of Computer Science</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="work-experience">
		<h2>Work Experience.</h2>
		<img class="portfolio-bag-img" src="images/portfolio.png" alt="portfolio-bag-img" />
		<table class="work-table">
			<thead>
				<tr>
					<th>Period</th>
					<th>Work</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2019-2021</td>
					<td
						>PC Builder at <a class="work-companies" href="https://www.scoopgaming.com.tn/"
							><em>Scoop Informatique</em></a
						></td
					>
				</tr>
				<tr>
					<td>2020-2022</td>
					<td
						>Media Manager at <a
							class="work-companies"
							href="https://www.facebook.com/groups/706037119815247"
							><em>Leo Club Bueno Mercado</em></a
						></td
					>
				</tr>
				<tr>
					<td>2021-2022</td>
					<td
						>Chef Design at <a
							class="work-companies"
							href="https://www.facebook.com/MicrosoftPiloteAriana"
							><em>Microsoft Club Pilote Ariana</em></a
						></td
					>
				</tr>
			</tbody>
			<tfoot />
		</table>
	</div>

	<div class="projects">
		<h2>Projects.</h2>

		<a
			class="contact-btn"
			aria-current={$page.url.pathname === '/comic' ? 'page' : undefined}
			href="{base}/comic">Comic of the Day</a
		>
	</div>

	<hr />
	<div class="contact-me">
		<h2>Get In Touch</h2>
		<h3>If you want to learn the mastery of procrastination</h3>
		<p class="procra-para">
			You want to learn how to become a king of procrastination, with meeting all your deadlines and
			not dropping from Innopolis !
		</p>
		<a class="contact-btn" href="mailto:aymounadaassi@gmail.com">Contact Me</a>
	</div>
</main>
