---
title: Golf games
published: 2023-08-10
updated: 2023-09-15
description: Some stuff about my Golf Games
---

## What is Golf Games

Golf Games are all my games I've developed in the context of golf, the first version was made with JavaScript, the second and currently used version was made with [SvelteKit](https://kit.svelte.dev), which is a JavaScript Framework and the full stack Verison of [Svelte](https://svelte.dev).

## Why did I decide to develop Golf Games?

I decided to develop Golf Games, because I love to play Golf and got an Handicap of 33.2, which is quite alright, I improved myself from 54, which is the start Handicap, to 36.6 in just one tournament, and then played a second one a few months later and improved to 34.5, then I played a third tournament and improved to 33.3, after one year of break playing tournaments, I played a fourth just a few weeks ago and got my current Handicap of **33.2**.

## Versions

There are two different versions of this game, the first version is the Server Version, which has a BackEnd and a user authentication, the second version is a full offline working version, the whole site is cached on the first load and can then be used without any network connection, so you can play the games on ships, planes or any where even if you don't have a network connection.

[Server](https://golf.moinjulian.com)  
[Offline](https://golf-offline.moinjulian.com)

## What is Golf games about?

Golf Games (Golf) is about three different Games, the first one is called 4 Winning, the second one is called Exact, the third and for now last game is Precision

### 4 Winning

4 Winning is like four in a row, with some modification, the first modifaction is, that the game board has more columns and rows then a normal four in row, a normal four in row has a game board of 4x4, my version of four in a row has 8 columns and 9 rows, including the columns at the full right and full left, which just show the lateral deviation you are allowed to play in one of the diffrent modes you can play the game in.

### Exact

Exact is a game which goal it is to play exact as possible to a few numbers, for example every tens give 3 points and all numbers with twice the same number are giving 3 Points, 100 meters gives 5 points, everything above 100 and below 5 gives -1 Points.

### Precision

Precision is the third game I have developed. The objective of the game is to get as close to the targets as possible. For every meter you miss the target, you will receive a deduction of one point. The winner of the game is the player with the highest points at the end. The game concludes when only one player has points remaining. You can observe the distance you need to shoot and the current team, along with the remaining points for each team.

## FAQ

### How can I create an account to play the games?

Creating an account to play Golf Games is a simple process. Follow these steps to get started:

1. **Navigate to Registration Page:**
   Open [Golf Games](https://golf.moinjulian.com) and go to the Register tab in the nav bar.

2. **Fill in Registration Details:**
   Enter an email, name, and password, then click on the register button.

3. **Complete Registration:**
   You will automatically be redirected to the Login tab. Log in using your email and password.

4. **Start Playing:**
   After logging in, you can play all three games and save your progress in the database.

By following these steps, you'll create an account that allows you to dive into the world of
Golf Games and enjoy the various challenges they provide. Have fun

### Are the games free to play?

Absolutely! Our games are completely free to play. All you need to do is create an account,
and you'll have access to all the exciting challenges and fun that Golf Games has to offer.
Get started today and enjoy the games without any cost.

### Can I contribute new Games to the project?

Your creative input is highly valued! If you have exciting new game ideas, we encourage you to get involved. Here's how:

- **Open an Issue on GitHub:** Feel free to open an Issue on our [GitHub](https://github.com/MoinJulian/Golf/issues) repository and label it with "game".
  Your idea will be reviewed and considered by our team.

- **Email Us:** You can also share your ideas via email to [info@moinjulian.com](mailto:info@moinjulian.com).
  We welcome your suggestions and will eagerly explore each one.

For your valuable contributions, your name will be recognized in our [Contributors.md](/Contributors.md) file.
Your ideas can shape the future of Golf Games, and we greatly appreciate your input.
Let's create amazing experiences together!

### How can I report bugs or suggest new features?

To report bugs, you can open an Issue on our [GitHub repository](https://github.com/MoinJulian/Golf/issues) and
label it with "bug." Alternatively, you can send an email to [info@moinjulian.com](mailto:info@moinjulian.com).

To suggest new features, you can also open an issue on our [GitHub repository](https://github.com/MoinJulian/Golf/issues)
and label it with "feature." You can also send your suggestions via email to [info@moinjulian.com](mailto:info@moinjulian.com).

### Is the project open source?

No, the project is not open source. However, you are still very welcome to contribute by creating an Issue as described above.
**We appreciate your input and suggestions!**

### How often are new updates or features added?

Rest assured, we're committed to providing a steady stream of new updates and exciting features.
Our team is dedicated to enhancing your experience, and you can expect frequent additions to keep the excitement alive.

### Can I play the offline version on all devices?

Absolutely! The offline version is designed to be accessible on a wide range of devices. It functions just like a website,
and it's pre-rendered upon opening to ensure seamless functionality even when there's no network connectivity.
This means you can enjoy the games on various devices without worrying about a network connection.

### What programming languages are used in the project?

Our project is built using a combination of powerful technologies:

- **Frontend Development**: We utilize the JavaScript Full Stack Framework, [SvelteKit](https://kit.svelte.dev),
  along with TypeScript and Sass for crafting engaging and dynamic user interfaces.

- **Backend Development**: For the server-side aspect, we've harnessed the capabilities of [MongoDB](https://www.mongodb.com)
  to securely store user data and ensure smooth interactions.

This versatile tech stack empowers us to create a seamless user experience and a robust backend infrastructure.

### Can I change my Password after registration?

Absolutely! You have the flexibility to change your password at any time. Here's how:

1. **Navigate to Account Settings:** Log in to your account and go to the "Account" tab.

2. **Update Password:** In the "Account" section, you'll find an option to change your password.
   Simply enter your new password in the designated input field.

3. **Save Changes:** After entering your new password, click on the "Update" button to save your changes.

By following these steps, you can easily update your password and keep your account secure.

### Is my Personal Information safe and secure?

Absolutely. We take the security and privacy of your personal information seriously. Here's how we ensure your data is safe:

- **Password Protection:** Your password is not stored in clear text on our servers.
  It's securely hashed to protect its confidentiality.

- **Limited Access:** Your password and personal information are not viewable by any team member.
  We implement strict access controls to ensure only authorized personnel can handle sensitive data.

We are committed to maintaining the highest standards of security to safeguard your personal information.

### Further Questions

If you have any additional questions, don't hesitate to reach out to us.
Simply send an email to [info@moinjulian.com](mailto:info@moinjulian.com) with your question.
We'll respond promptly and may even consider adding your question to this FAQ to help other users.

## Credits

### Tools

- SvelteKit
- MongoDB
- Netlify

### Packages

- Svelte
- SASS
- TypeScript
- Font Awesome
- bcrypt
- jsonwebtoken
- mongoose
- uuid

## How is Golf games made?

Golf games is made with Svelte and the whole gameboard is stored as an Object:

For example for 4 Winning the Object looks like this:

```typescript
interface Row {
	side: string;
	data: string[];
}

let rows: Row[] = [
	{
		side: '1 meter',
		data: ['10-11', '12-13', '14-15', '16-17', '18-19', '20-21', '22-23']
	},
	{
		side: '1 meter',
		data: ['24-25', '26-27', '28-29', '30-31', '32-33', '34-35', '36-37']
	},
	{
		side: '2 meters',
		data: ['38-40', '41-43', '44-46', '47-49', '50-52', '53-55', '56-58']
	},
	{
		side: '2 meters',
		data: ['59-61', '62-64', '65-67', '68-70', '71-73', '74-76', '77-79']
	},
	{
		side: '3 meters',
		data: ['80-82', '83-85', '86-88', '89-91', '92-94', '95-97', '98-100']
	},
	{
		side: '3 meters',
		data: ['101-103', '104-106', '107-109', '110-112', '113-115', '116-118', '119-121']
	},
	{
		side: '4 meters',
		data: ['122-124', '125-127', '128-130', '131-133', '134-136', '137-139', '140-142']
	},
	{
		side: '4 meters',
		data: ['143-145', '146-148', '149-151', '152-154', '155-157', '158-160', '161-163']
	}
];
```

The whole object is then rendered with a Svelte each loop in a table Element:

```svelte
<table>
	{#each rows as { side, data }, outerIndex}
		<tbody id={`row${outerIndex + 1}`}>
			<tr>
				<td class="points">{side}</td>
				{#each data as value, innerIndex}
					<td
						class="meters"
						id={`row${outerIndex + 1}-${innerIndex}`}
						on:click={() => HandleEvent(outerIndex, innerIndex)}
					>
						{value}
					</td>
				{/each}
				<td class="points">{side}</td>
			</tr>
		</tbody>
	{/each}
</table>
```

Then the all the functions got inplemented, the basis of the game is stored in a Svelte Component and gets the size of the game (so how many teams) from the +page.svelte, where the componet is implemented as follows:

```svelte
<script lang="ts">
	import FourWinning from '$lib/components/FourWinning.svelte';

	interface Team {
		color: string;
		data: string[];
	}

	let teams: Team[] = [
		{ color: 'red', data: [] },
		{ color: 'blue', data: [] }
	];
</script>

<FourWinning {teams} />
```

I also added a user authentication, so the user can store games in the database and if he wants he can delete one specific game or all games at once.
