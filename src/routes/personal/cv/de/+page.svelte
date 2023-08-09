<script>
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<h1>Lebenslauf</h1>
<GoBack />
<details>
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#person">Zur Person</a></li>
		<li><a href="#school">Schulausbildung</a></li>
		<li><a href="#language">Sprachkentnisse</a></li>
		<li><a href="#qualification">Weitere Qualifikationen</a></li>
	</ol>
</details>
<h2 id="person">Zur Person</h2>
<div>
	<p class="head">Name</p>
	<p>Julian Hammer</p>
	<p class="head">Anschrift</p>
	<p>Katrepeler Landstraße 59a</p>
	<p>28357 Bremen</p>
	<p>Deutschland</p>
	<p class="head">Geburtsdatum</p>
	<p>22.01.2007</p>
	<p class="head">Geburtort</p>
	<p>Bremen</p>
	<p class="head">Eltern</p>
	<p>Corinna Hammer - Steuerberater</p>
	<p>Thorsten Hammer - Wirtschaftprüfer, Steuerberater</p>
</div>
<h2 id="school">Schulausbildung</h2>
<div>
	<p class="head">2013 bis 2017</p>
	<p>Grundschule Borgfeld</p>
	<p class="head">2017 bis 2022</p>
	<p>Ökumenisches Gymnasium zu Bremen</p>
	<p class="head">2022 bis heute</p>
	<p>Worksop College</p>
	<div>
		<h3>Angestrebte Abschlüsse</h3>
		<p>GCSE - 2024</p>
		<p>A-Level 2026</p>
	</div>
</div>
<h2 id="language">Sprachkentnisse</h2>
<div>
	<p class="head">Deutsch</p>
	<p>Muttersprache</p>
	<p class="head">Englisch</p>
	<p>Fortgeschritten</p>
	<p class="head">Latein</p>
	<p>Grundkenntnisse</p>
</div>
<h2 id="qualification">Weitere Qualifikationen</h2>
<div>
	<p>Jugend forscht Beteiligung 2020</p>
	<p>Schüler Praktikum 2022</p>
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
