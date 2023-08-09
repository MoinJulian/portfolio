<script lang="ts">
	import logo from '$lib/assets/MoinJulian.png';
	import Socials from '$lib/components/Socials.svelte';
</script>

<svelte:head>
	<title>MoinJulian</title>
</svelte:head>

<h1>MoinJulian</h1>

<p>Welcome! I'm Julian, I like to develop Web Apps, I'm studying for my GSCE's in England.</p>
<p>
	Here you find more <a href="/about">about myself</a> and my
	<a href="/projects">personal projects</a>.
</p>

<div class="img">
	<img src={logo} alt="" />
</div>

<Socials />

<style lang="scss">
	.img {
		margin-block: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 128px;
		border-radius: 50%;
		box-shadow: 0 0 2rem var(--light-color);
	}
</style>
