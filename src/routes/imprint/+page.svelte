<script lang="ts">
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
</script>

<svelte:head>
	<title>MoinJulian - Imprint</title>
</svelte:head>

<PageShell
	label="Imprint"
	title="Legal information and contact details."
	description="The required legal information for this website, presented in the same layout as the rest of the portfolio."
>
	<div class="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
		<section class="surface-panel text-gray-300">
			<p class="text-sm font-mono uppercase tracking-[0.3em] text-indigo-300">Contact</p>
			<div class="mt-4 space-y-2 text-gray-400">
				<p translate="no">MoinJulian</p>
				<p>c/o Julian Hammer</p>
				<p>Katrepeler Landstraße 59a</p>
				<p>28357 Bremen</p>
				<p class="pt-4">E-Mail: jh@moinjulian.com</p>
			</div>
		</section>

		<section class="surface-panel portfolio-prose">
			<h2>According to § 5 TMG (German Telemedia Law)</h2>
			<p>
				As a service provider, we are responsible for our own content on these pages according
				to Section 7, Paragraph 1 of the German Telemedia Act (TMG). According to §§ 8 to 10
				TMG, however, we are not obliged to monitor transmitted or stored third-party
				information or investigate circumstances that indicate illegal activity.
			</p>
			<p>
				Obligations to remove or block the use of information according to general laws remain
				unaffected. Liability in this regard is only possible from the point in time at which
				knowledge of a specific infringement becomes known. As soon as we become aware of any
				violations of the law, we will remove this content immediately.
			</p>

			<h2>Responsible according to § 55 Abs. 2 RStV</h2>
			<p translate="no">MoinJulian, c/o Julian Hammer, Katrepeler Landstraße 59a, 28357 Bremen</p>

			<h2>Liability for links</h2>
			<p>
				Our offer contains links to external websites over which we have no influence.
				Therefore we cannot assume any liability for this external content. The respective
				provider or operator of the pages is always responsible for the content of the linked
				pages.
			</p>
			<p>
				The linked pages were checked for possible legal violations at the time of linking.
				Illegal content was not recognizable at the time of linking. A permanent control of the
				content of the linked pages is not reasonable without concrete evidence of an
				infringement. As soon as we become aware of legal violations, we will remove such links
				immediately.
			</p>

			<h2>Copyright</h2>
			<p>
				The content and works on these pages created by the site operators are subject to German
				copyright law. Duplication, editing, distribution and any kind of exploitation outside
				the limits of copyright require the written consent of the respective author or creator.
				Downloads and copies of this site are only permitted for private, non-commercial use.
			</p>
			<p>
				Insofar as the content on this site was not created by the operator, the copyrights of
				third parties are observed. Should you nevertheless become aware of a copyright
				infringement, we ask that you inform us accordingly. As soon as we become aware of legal
				violations, we will remove such content immediately.
			</p>
			<p>Copyright © 2023 MoinJulian</p>
			<p>Germany 04.07.23</p>
		</section>
	</div>
</PageShell>
