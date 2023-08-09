<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Login</h1>

<svelte:head>
	<title>MoinJulian - Login</title>
</svelte:head>

<form method="POST">
	<lable>
		Username
		<input type="text" name="username" />
	</lable>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
</form>

{#if form && !form.password_is_correct}
	<p>The password is not correct</p>
{/if}

<style>
	input {
		width: 100%;
		padding: 0.5rem;
		border: 0.1rem solid gray;
		font-size: inherit;
		font-family: inherit;
		color: var(--font-color);
		background-color: var(--primary-color);
	}

	input:focus {
		border-color: var(--primary-color);
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}

	button {
		background-color: grey;
		border: 1px solid var(--border-color);
		color: white;
		font-family: inherit;
		border: none;
		padding: 0.5rem 1rem;
		font-size: inherit;
		cursor: pointer;
		outline-offset: 0.1rem;
	}
</style>
