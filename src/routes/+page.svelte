<script lang="ts">
	import {
		mcuTimeline,
		mediaTypeLabels,
		mediaTypeColors,
		phaseColors,
		type McuEntry,
		type MediaType,
		type Phase
	} from '$lib/data/mcu-timeline';

	// ── State ───────────────────────────────────────────────────────────────────
	let sortMode = $state<'chronological' | 'release'>('chronological');
	let filterType = $state<MediaType | 'all'>('all');
	let filterPhase = $state<Phase | 'all'>('all');
	let expandedId = $state<string | null>(null);

	// ── Derived ─────────────────────────────────────────────────────────────────
	const filtered = $derived(
		mcuTimeline.filter((entry) => {
			const typeOk = filterType === 'all' || entry.type === filterType;
			const phaseOk = filterPhase === 'all' || entry.phase === filterPhase;
			return typeOk && phaseOk;
		})
	);

	const sorted = $derived(
		[...filtered].sort((a, b) =>
			sortMode === 'chronological'
				? a.chronologicalOrder - b.chronologicalOrder
				: a.releaseDate.localeCompare(b.releaseDate)
		)
	);

	/** Group entries by year label for the chosen sort mode */
	const grouped = $derived(() => {
		const map = new Map<string, McuEntry[]>();
		for (const entry of sorted) {
			const key =
				sortMode === 'chronological'
					? entry.inUniverseYear
					: new Date(entry.releaseDate).getFullYear().toString();
			if (!map.has(key)) map.set(key, []);
			map.get(key)!.push(entry);
		}
		return [...map.entries()];
	});

	const phases: Phase[] = [1, 2, 3, 4, 5, 6];
	const mediaTypes: MediaType[] = ['movie', 'series', 'disney+', 'one-shot', 'special'];

	function formatDate(iso: string): string {
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function toggleExpand(id: string) {
		expandedId = expandedId === id ? null : id;
	}
</script>

<svelte:head>
	<title>MCU Guide — Complete Marvel Cinematic Universe Timeline</title>
</svelte:head>

<!-- ═══ HEADER ═══════════════════════════════════════════════════════════════ -->
<header class="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
	<div class="mx-auto max-w-6xl px-4 py-4">
		<div class="flex flex-wrap items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<!-- Marvel-style logo mark -->
				<div
					class="flex h-10 w-10 items-center justify-center rounded bg-red-600 font-bold text-white shadow-lg"
					style="font-family: 'Oswald', sans-serif; font-size: 1.1rem; letter-spacing: -1px;"
				>
					MCU
				</div>
				<div>
					<h1
						class="text-xl font-bold tracking-wide text-white"
						style="font-family: 'Oswald', sans-serif; letter-spacing: 0.05em;"
					>
						MCU GUIDE
					</h1>
					<p class="text-xs text-zinc-500">Marvel Cinematic Universe Timeline</p>
				</div>
			</div>

			<!-- Sort toggle -->
			<div class="flex rounded-lg border border-zinc-700 bg-zinc-900 p-1">
				<button
					onclick={() => (sortMode = 'chronological')}
					class="rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 {sortMode ===
					'chronological'
						? 'bg-red-600 text-white shadow'
						: 'text-zinc-400 hover:text-white'}"
				>
					⏱ Chronological
				</button>
				<button
					onclick={() => (sortMode = 'release')}
					class="rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 {sortMode ===
					'release'
						? 'bg-red-600 text-white shadow'
						: 'text-zinc-400 hover:text-white'}"
				>
					📅 Release Date
				</button>
			</div>
		</div>
	</div>
</header>

<!-- ═══ FILTERS ══════════════════════════════════════════════════════════════ -->
<div class="border-b border-zinc-800 bg-zinc-900/60">
	<div class="mx-auto max-w-6xl px-4 py-3">
		<div class="flex flex-wrap items-center gap-4">
			<!-- Type filter -->
			<div class="flex flex-wrap items-center gap-2">
				<span class="text-xs font-semibold uppercase tracking-widest text-zinc-500">Type</span>
				<button
					onclick={() => (filterType = 'all')}
					class="rounded-full border px-3 py-0.5 text-xs font-medium transition-all {filterType ===
					'all'
						? 'border-zinc-400 bg-zinc-700 text-white'
						: 'border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'}"
				>
					All
				</button>
				{#each mediaTypes as type}
					<button
						onclick={() => (filterType = filterType === type ? 'all' : type)}
						class="rounded-full border px-3 py-0.5 text-xs font-medium transition-all {filterType ===
						type
							? `${mediaTypeColors[type].bg} ${mediaTypeColors[type].text} border-transparent`
							: 'border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'}"
					>
						{mediaTypeLabels[type]}
					</button>
				{/each}
			</div>

			<!-- Phase filter -->
			<div class="flex flex-wrap items-center gap-2">
				<span class="text-xs font-semibold uppercase tracking-widest text-zinc-500">Phase</span>
				<button
					onclick={() => (filterPhase = 'all')}
					class="rounded-full border px-3 py-0.5 text-xs font-medium transition-all {filterPhase ===
					'all'
						? 'border-zinc-400 bg-zinc-700 text-white'
						: 'border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'}"
				>
					All
				</button>
				{#each phases as phase}
					<button
						onclick={() => (filterPhase = filterPhase === phase ? 'all' : phase)}
						class="rounded-full border px-3 py-0.5 text-xs font-medium transition-all {filterPhase ===
						phase
							? `bg-zinc-700 border-zinc-400 ${phaseColors[phase]}`
							: 'border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'}"
					>
						Phase {phase}
					</button>
				{/each}
			</div>

			<!-- Count -->
			<span class="ml-auto text-xs text-zinc-600">{sorted.length} entries</span>
		</div>
	</div>
</div>

<!-- ═══ TIMELINE ═════════════════════════════════════════════════════════════ -->
<main class="mx-auto max-w-6xl px-4 py-8">
	{#if sorted.length === 0}
		<div class="flex flex-col items-center justify-center py-24 text-center">
			<div class="mb-4 text-5xl">🔍</div>
			<p class="text-xl font-semibold text-zinc-400">No entries match your filters</p>
			<p class="mt-2 text-sm text-zinc-600">Try adjusting your filter settings</p>
		</div>
	{:else}
		{#each grouped() as [yearLabel, entries]}
			<!-- Year marker -->
			<div class="relative mb-2 flex items-center gap-4">
				<div class="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
				<div
					class="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1 text-sm font-bold tracking-widest text-zinc-400"
					style="font-family: 'Oswald', sans-serif;"
				>
					{yearLabel}
				</div>
				<div class="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
			</div>

			<!-- Cards in this year group -->
			<div class="relative mb-8 ml-4 border-l-2 border-zinc-800 pl-6">
				<!-- Timeline dot -->
				<div
					class="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full border-2 border-red-600 bg-zinc-950"
				></div>

				<div class="flex flex-col gap-3 pt-2">
					{#each entries as entry (entry.id)}
						{@const colors = mediaTypeColors[entry.type]}
						{@const isExpanded = expandedId === entry.id}

						<div
							class="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-black/40 {isExpanded
								? 'border-zinc-600 bg-zinc-800/80'
								: ''}"
						>
							<!-- Phase accent bar -->
							<div
								class="absolute left-0 top-0 bottom-0 w-1 {entry.phase === 1
									? 'bg-yellow-500'
									: entry.phase === 2
										? 'bg-orange-500'
										: entry.phase === 3
											? 'bg-red-500'
											: entry.phase === 4
												? 'bg-blue-500'
												: entry.phase === 5
													? 'bg-purple-500'
													: 'bg-green-500'}"
							></div>

							<button
								class="w-full px-5 py-4 pl-6 text-left"
								onclick={() => toggleExpand(entry.id)}
								aria-expanded={isExpanded}
							>
								<div class="flex flex-wrap items-start justify-between gap-2">
									<!-- Left: title + badges -->
									<div class="flex flex-1 flex-wrap items-center gap-2">
										<!-- Type badge -->
										<span
											class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold {colors.bg} {colors.text}"
										>
											{mediaTypeLabels[entry.type]}
										</span>

										<!-- Phase badge -->
										<span
											class="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs font-medium {phaseColors[entry.phase]}"
										>
											Phase {entry.phase}
										</span>

										<!-- Title -->
										<span
											class="text-base font-semibold text-white group-hover:text-red-400 transition-colors duration-200"
											style="font-family: 'Oswald', sans-serif; letter-spacing: 0.02em;"
										>
											{entry.title}
										</span>
									</div>

									<!-- Right: release date + duration + expand arrow -->
									<div class="flex items-center gap-3 text-xs text-zinc-500">
										{#if entry.duration}
											<span class="hidden sm:block">{entry.duration}</span>
										{/if}
										<span class="hidden sm:block">{formatDate(entry.releaseDate)}</span>
										<span
											class="transition-transform duration-300 text-zinc-600 {isExpanded
												? 'rotate-180'
												: ''}"
										>
											▼
										</span>
									</div>
								</div>

								<!-- Short description always visible -->
								<p class="mt-1.5 text-sm text-zinc-500 line-clamp-2 text-left">
									{entry.description}
								</p>
							</button>

							<!-- Expanded details -->
							{#if isExpanded}
								<div class="border-t border-zinc-800 px-5 py-4 pl-6">
									<div class="grid gap-4 sm:grid-cols-2">
										<div>
											<p class="text-sm text-zinc-300 leading-relaxed">{entry.description}</p>
											{#if entry.note}
												<p class="mt-2 text-xs italic text-zinc-500">ℹ {entry.note}</p>
											{/if}
										</div>
										<div class="flex flex-col gap-2 text-sm">
											<div class="flex justify-between">
												<span class="text-zinc-500">Release Date</span>
												<span class="text-zinc-300">{formatDate(entry.releaseDate)}</span>
											</div>
											{#if entry.duration}
												<div class="flex justify-between">
													<span class="text-zinc-500">Duration</span>
													<span class="text-zinc-300">{entry.duration}</span>
												</div>
											{/if}
											{#if entry.director}
												<div class="flex justify-between">
													<span class="text-zinc-500">Director</span>
													<span class="text-zinc-300 text-right">{entry.director}</span>
												</div>
											{/if}
											<div class="flex justify-between">
												<span class="text-zinc-500">In-Universe Year</span>
												<span class="text-zinc-300">{entry.inUniverseYear}</span>
											</div>
											<div class="flex justify-between">
												<span class="text-zinc-500">Chron. Order</span>
												<span class="font-mono text-zinc-300">#{entry.chronologicalOrder}</span>
											</div>
										</div>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</main>

<!-- ═══ FOOTER ═══════════════════════════════════════════════════════════════ -->
<footer class="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-xs text-zinc-600">
	<p>
		MCU Guide — Fan-made timeline. Marvel characters and titles are property of Marvel
		Studios / The Walt Disney Company.
	</p>
	<p class="mt-1">Data accurate as of 2025 · {mcuTimeline.length} total entries</p>
</footer>

