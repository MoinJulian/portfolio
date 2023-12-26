<script>
	import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faGolfBallTee } from '@fortawesome/free-solid-svg-icons';
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
		<a title="Real Golf" aria-label="Real Golf" href="/golf"><Fa icon={faGolfBallTee} /></a>
	</li>
	<li>
		<a href="mailto:jh@moinjulian.com" aria-label="Email">
			<Fa icon={faEnvelope} />
		</a>
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
