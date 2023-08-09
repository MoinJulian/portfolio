<script>
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<h1>Curriculum Vitae</h1>
<GoBack />
<details>
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#person">To Person</a></li>
		<li><a href="#school">School Education</a></li>
		<li><a href="#language">Linguistic Proficiency</a></li>
		<li><a href="#qualification">Other Qualifications</a></li>
	</ol>
</details>
<h2 id="person">To Person</h2>
<div>
	<p class="head">Name</p>
	<p>Julian Hammer</p>
	<p class="head">Address</p>
	<p>Katrepeler Landstraße 59a</p>
	<p>28357 Bremen</p>
	<p>Germany</p>
	<p class="head">Date of Birth</p>
	<p>22.01.2007</p>
	<p class="head">Place of Birth</p>
	<p>Bremen</p>
	<p class="head">Parents</p>
	<p>Corinna Hammer - Tax Consultant</p>
	<p>Thorsten Hammer - Auditor, Tax Consultant</p>
</div>
<h2 id="school">School Education</h2>
<div>
	<p class="head">2013 until 2017</p>
	<p>Borfeld elementary school</p>
	<p class="head">2017 until 2022</p>
	<p>Ecumenical Gymnasium in Bremen</p>
	<p class="head">2022 until present</p>
	<p>Worksop College</p>
	<div>
		<h3>Desired Degrees</h3>
		<p>GCSE - 2024</p>
		<p>A-Level 2026</p>
	</div>
</div>
<h2 id="language">Linguistic Proficiency</h2>
<div>
	<p class="head">German</p>
	<p>Native Language</p>
	<p class="head">English</p>
	<p>Advanced</p>
	<p class="head">Latin</p>
	<p>Basic Knowledge</p>
</div>
<h2 id="qualification">Other Qualifications</h2>
<div>
	<p>Jugend forscht participation 2020</p>
	<p>Student Internship 2022</p>
	<p>CCF (Combined Cadet Force) 2023 - present</p>
</div>

<style>
	div {
		margin-left: 2.5rem;
	}

	.head {
		font-weight: 700;
	}
</style>
