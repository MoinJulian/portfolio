<script>
	import { faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { faGolfBallTee } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<ul class="no-bullets socials">
	<li>
		<a title="YouTube" aria-label="YouTube" target="_blank" href="https://youtube.com/@moinjulian"
			><Fa icon={faYoutube} /></a
		>
	</li>
	<li>
		<a title="GitHub" aria-label="GitHub" target="_blank" href="https://github.com/moinjulian"
			><Fa icon={faGithub} /></a
		>
	</li>
	<li>
		<a
			title="Instagram"
			aria-label="Instagram"
			target="_blank"
			href="https://www.instagram.com/julian_hammer_07/"><Fa icon={faInstagram} /></a
		>
	</li>
	<li>
		<a title="Golf Games" aria-label="Golf Games" target="_blank" href="https://golf.moinjulian.com"
			><Fa icon={faGolfBallTee} /></a
		>
	</li>
</ul>

<style lang="scss">
	.socials {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
		font-size: 1.5rem;
	}
</style>
