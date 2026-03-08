export type MediaType = 'movie' | 'series' | 'disney+' | 'one-shot' | 'special';

export type Phase = 1 | 2 | 3 | 4 | 5 | 6;

export interface McuEntry {
	id: string;
	title: string;
	type: MediaType;
	phase: Phase;
	/** Release date (publishing order) */
	releaseDate: string;
	/** In-universe chronological order index */
	chronologicalOrder: number;
	/** Approximate in-universe year(s) */
	inUniverseYear: string;
	description: string;
	duration?: string;
	director?: string;
	/** Streaming / theatrical note */
	note?: string;
}

export const mcuTimeline: McuEntry[] = [
	// ─── PHASE 1 ────────────────────────────────────────────────────────────────
	{
		id: 'captain-america-first-avenger',
		title: 'Captain America: The First Avenger',
		type: 'movie',
		phase: 1,
		releaseDate: '2011-07-22',
		chronologicalOrder: 1,
		inUniverseYear: '1943–1945',
		description:
			'Steve Rogers, a sickly young man, is transformed into a super-soldier to fight the villainous HYDRA and its leader, the Red Skull, during World War II.',
		duration: '2h 4m',
		director: 'Joe Johnston'
	},
	{
		id: 'captain-marvel',
		title: 'Captain Marvel',
		type: 'movie',
		phase: 3,
		releaseDate: '2019-03-08',
		chronologicalOrder: 2,
		inUniverseYear: '1995',
		description:
			'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
		duration: '2h 3m',
		director: 'Anna Boden, Ryan Fleck'
	},
	{
		id: 'iron-man',
		title: 'Iron Man',
		type: 'movie',
		phase: 1,
		releaseDate: '2008-05-02',
		chronologicalOrder: 3,
		inUniverseYear: '2010',
		description:
			'Tony Stark, genius billionaire weapons manufacturer, builds a powered armored suit and becomes Iron Man after being taken captive by terrorists.',
		duration: '2h 6m',
		director: 'Jon Favreau'
	},
	{
		id: 'iron-man-2',
		title: 'Iron Man 2',
		type: 'movie',
		phase: 1,
		releaseDate: '2010-05-07',
		chronologicalOrder: 4,
		inUniverseYear: '2011',
		description:
			'Tony Stark faces pressure from the government and a new enemy, Whiplash, while dealing with the palladium in his arc reactor poisoning him.',
		duration: '2h 4m',
		director: 'Jon Favreau'
	},
	{
		id: 'incredible-hulk',
		title: 'The Incredible Hulk',
		type: 'movie',
		phase: 1,
		releaseDate: '2008-06-13',
		chronologicalOrder: 5,
		inUniverseYear: '2011',
		description:
			'Bruce Banner, on the run from the military, searches for a cure to his gamma radiation–induced transformations into the Hulk.',
		duration: '1h 52m',
		director: 'Louis Leterrier'
	},
	{
		id: 'thor',
		title: 'Thor',
		type: 'movie',
		phase: 1,
		releaseDate: '2011-05-06',
		chronologicalOrder: 6,
		inUniverseYear: '2011',
		description:
			'Thor, the powerful but arrogant god of thunder, is cast out of Asgard to live on Earth as punishment, where he must prove himself worthy.',
		duration: '1h 55m',
		director: 'Kenneth Branagh'
	},
	{
		id: 'consultant',
		title: 'The Consultant',
		type: 'one-shot',
		phase: 1,
		releaseDate: '2011-09-13',
		chronologicalOrder: 7,
		inUniverseYear: '2011',
		description:
			'Agent Coulson and Agent Sitwell discuss a mission that requires sending a "consultant" to deal with General Ross and the World Security Council.',
		duration: '4m',
		note: 'Included on Thor Blu-ray'
	},
	{
		id: 'funny-thing-happened',
		title: "A Funny Thing Happened on the Way to Thor's Hammer",
		type: 'one-shot',
		phase: 1,
		releaseDate: '2011-10-25',
		chronologicalOrder: 8,
		inUniverseYear: '2011',
		description:
			'Agent Coulson stops at a gas station on his way to New Mexico and single-handedly foils a robbery in very un-dramatic fashion.',
		duration: '4m',
		note: 'Included on Captain America: The First Avenger Blu-ray'
	},
	{
		id: 'avengers',
		title: 'The Avengers',
		type: 'movie',
		phase: 1,
		releaseDate: '2012-05-04',
		chronologicalOrder: 9,
		inUniverseYear: '2012',
		description:
			'Nick Fury assembles Iron Man, Captain America, Thor, the Hulk, Black Widow, and Hawkeye to stop Loki from using the Tesseract to conquer Earth.',
		duration: '2h 23m',
		director: 'Joss Whedon'
	},
	{
		id: 'item-47',
		title: 'Item 47',
		type: 'one-shot',
		phase: 1,
		releaseDate: '2012-09-25',
		chronologicalOrder: 10,
		inUniverseYear: '2012',
		description:
			'A couple uses a Chitauri weapon recovered after the Battle of New York to rob banks, forcing S.H.I.E.L.D. to hunt them down.',
		duration: '12m',
		note: 'Included on The Avengers Blu-ray'
	},
	// ─── PHASE 2 ────────────────────────────────────────────────────────────────
	{
		id: 'iron-man-3',
		title: 'Iron Man 3',
		type: 'movie',
		phase: 2,
		releaseDate: '2013-05-03',
		chronologicalOrder: 11,
		inUniverseYear: '2012–2013',
		description:
			'Tony Stark faces a powerful enemy called the Mandarin while dealing with PTSD after the events of the Battle of New York.',
		duration: '2h 10m',
		director: 'Shane Black'
	},
	{
		id: 'agent-carter-one-shot',
		title: 'Agent Carter',
		type: 'one-shot',
		phase: 2,
		releaseDate: '2013-09-24',
		chronologicalOrder: 12,
		inUniverseYear: '1946',
		description:
			'Peggy Carter, one year after the end of WWII, is given a top-secret mission involving Howard Stark\'s stolen weapons while struggling against sexism at the SSR.',
		duration: '15m',
		note: 'Included on Iron Man 3 Blu-ray'
	},
	{
		id: 'thor-dark-world',
		title: 'Thor: The Dark World',
		type: 'movie',
		phase: 2,
		releaseDate: '2013-11-08',
		chronologicalOrder: 13,
		inUniverseYear: '2013',
		description:
			'Thor must protect the universe from the Dark Elves led by Malekith, who seeks the Aether, an ancient weapon capable of destroying the universe.',
		duration: '1h 52m',
		director: 'Alan Taylor'
	},
	{
		id: 'captain-america-winter-soldier',
		title: 'Captain America: The Winter Soldier',
		type: 'movie',
		phase: 2,
		releaseDate: '2014-04-04',
		chronologicalOrder: 14,
		inUniverseYear: '2014',
		description:
			'Steve Rogers teams up with Black Widow and a new ally, the Falcon, to expose a conspiracy within S.H.I.E.L.D. and battle a deadly assassin called the Winter Soldier.',
		duration: '2h 16m',
		director: 'Anthony Russo, Joe Russo'
	},
	{
		id: 'all-hail-the-king',
		title: 'All Hail the King',
		type: 'one-shot',
		phase: 2,
		releaseDate: '2014-02-04',
		chronologicalOrder: 15,
		inUniverseYear: '2014',
		description:
			'Trevor Slattery, the actor who posed as the Mandarin, is interviewed in prison by a documentary filmmaker who has an ulterior motive.',
		duration: '15m',
		note: 'Included on Thor: The Dark World Blu-ray'
	},
	{
		id: 'guardians-of-the-galaxy',
		title: 'Guardians of the Galaxy',
		type: 'movie',
		phase: 2,
		releaseDate: '2014-08-01',
		chronologicalOrder: 16,
		inUniverseYear: '2014',
		description:
			'Peter Quill and his misfit team of alien outlaws—Gamora, Drax, Rocket, and Groot—must unite to stop Ronan the Accuser from destroying a planet.',
		duration: '2h 1m',
		director: 'James Gunn'
	},
	{
		id: 'guardians-of-the-galaxy-vol-2',
		title: 'Guardians of the Galaxy Vol. 2',
		type: 'movie',
		phase: 3,
		releaseDate: '2017-05-05',
		chronologicalOrder: 17,
		inUniverseYear: '2014',
		description:
			'Peter Quill and the Guardians struggle to keep their newfound family together while unraveling the mystery of his true parentage.',
		duration: '2h 16m',
		director: 'James Gunn'
	},
	{
		id: 'avengers-age-of-ultron',
		title: 'Avengers: Age of Ultron',
		type: 'movie',
		phase: 2,
		releaseDate: '2015-05-01',
		chronologicalOrder: 18,
		inUniverseYear: '2015',
		description:
			'Tony Stark\'s artificial intelligence creation, Ultron, turns against humanity, forcing the Avengers to reassemble and take him down.',
		duration: '2h 21m',
		director: 'Joss Whedon'
	},
	{
		id: 'ant-man',
		title: 'Ant-Man',
		type: 'movie',
		phase: 2,
		releaseDate: '2015-07-17',
		chronologicalOrder: 19,
		inUniverseYear: '2015',
		description:
			'Scott Lang, a thief, must help his mentor Hank Pym don the Ant-Man suit and protect the technology—which allows its user to shrink in scale but increase in strength.',
		duration: '1h 57m',
		director: 'Peyton Reed'
	},
	// ─── PHASE 3 ────────────────────────────────────────────────────────────────
	{
		id: 'captain-america-civil-war',
		title: 'Captain America: Civil War',
		type: 'movie',
		phase: 3,
		releaseDate: '2016-05-06',
		chronologicalOrder: 20,
		inUniverseYear: '2016',
		description:
			'Political pressure mounts to install a system of accountability for the Avengers, fracturing them into opposing factions—Captain America vs. Iron Man.',
		duration: '2h 27m',
		director: 'Anthony Russo, Joe Russo'
	},
	{
		id: 'black-panther',
		title: 'Black Panther',
		type: 'movie',
		phase: 3,
		releaseDate: '2018-02-16',
		chronologicalOrder: 21,
		inUniverseYear: '2016',
		description:
			'T\'Challa returns home to Wakanda to claim the throne after his father\'s death but finds his kingship challenged by a powerful enemy.',
		duration: '2h 14m',
		director: 'Ryan Coogler'
	},
	{
		id: 'spider-man-homecoming',
		title: 'Spider-Man: Homecoming',
		type: 'movie',
		phase: 3,
		releaseDate: '2017-07-07',
		chronologicalOrder: 22,
		inUniverseYear: '2016',
		description:
			'Peter Parker, mentored by Tony Stark, tries to balance his life as a high school student while fighting crime as Spider-Man and facing the Vulture.',
		duration: '2h 13m',
		director: 'Jon Watts'
	},
	{
		id: 'doctor-strange',
		title: 'Doctor Strange',
		type: 'movie',
		phase: 3,
		releaseDate: '2016-11-04',
		chronologicalOrder: 23,
		inUniverseYear: '2016–2017',
		description:
			'Brilliant but arrogant surgeon Stephen Strange discovers the hidden world of magic and alternate dimensions after a career-ending accident.',
		duration: '1h 55m',
		director: 'Scott Derrickson'
	},
	{
		id: 'thor-ragnarok',
		title: 'Thor: Ragnarok',
		type: 'movie',
		phase: 3,
		releaseDate: '2017-11-03',
		chronologicalOrder: 24,
		inUniverseYear: '2017',
		description:
			'Thor is imprisoned on the other side of the universe and must escape to save Asgard from Ragnarök, the prophesied destruction, at the hands of Hela.',
		duration: '2h 10m',
		director: 'Taika Waititi'
	},
	{
		id: 'avengers-infinity-war',
		title: 'Avengers: Infinity War',
		type: 'movie',
		phase: 3,
		releaseDate: '2018-04-27',
		chronologicalOrder: 25,
		inUniverseYear: '2018',
		description:
			'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat Thanos before his blitz of devastation and ruin puts an end to half the universe.',
		duration: '2h 29m',
		director: 'Anthony Russo, Joe Russo'
	},
	{
		id: 'ant-man-and-the-wasp',
		title: 'Ant-Man and the Wasp',
		type: 'movie',
		phase: 3,
		releaseDate: '2018-07-06',
		chronologicalOrder: 26,
		inUniverseYear: '2018',
		description:
			'Scott Lang grapples with his choices as both a superhero and a father, while teaming up with Hope van Dyne and Hank Pym to retrieve Janet van Dyne from the Quantum Realm.',
		duration: '1h 58m',
		director: 'Peyton Reed'
	},
	{
		id: 'avengers-endgame',
		title: 'Avengers: Endgame',
		type: 'movie',
		phase: 3,
		releaseDate: '2019-04-26',
		chronologicalOrder: 27,
		inUniverseYear: '2018–2023',
		description:
			'After Thanos wiped out half the universe, the remaining Avengers travel through time to undo the snap and restore what was lost, in one final confrontation.',
		duration: '3h 1m',
		director: 'Anthony Russo, Joe Russo'
	},
	{
		id: 'spider-man-far-from-home',
		title: 'Spider-Man: Far From Home',
		type: 'movie',
		phase: 3,
		releaseDate: '2019-07-02',
		chronologicalOrder: 28,
		inUniverseYear: '2024',
		description:
			'Peter Parker goes on a school trip to Europe where he is recruited by Nick Fury to battle Mysterio, who claims to be from an alternate Earth.',
		duration: '2h 9m',
		director: 'Jon Watts'
	},
	// ─── PHASE 4 ────────────────────────────────────────────────────────────────
	{
		id: 'wandavision',
		title: 'WandaVision',
		type: 'disney+',
		phase: 4,
		releaseDate: '2021-01-15',
		chronologicalOrder: 29,
		inUniverseYear: '2023',
		description:
			'Wanda Maximoff and Vision live a seemingly idyllic suburban life but begin to suspect that everything is not as it seems in the town of Westview.',
		duration: '9 episodes',
		director: 'Matt Shakman'
	},
	{
		id: 'falcon-winter-soldier',
		title: 'The Falcon and the Winter Soldier',
		type: 'disney+',
		phase: 4,
		releaseDate: '2021-03-19',
		chronologicalOrder: 30,
		inUniverseYear: '2024',
		description:
			'Sam Wilson and Bucky Barnes team up for a global adventure that puts their abilities to the test as they battle the Flag Smashers.',
		duration: '6 episodes',
		director: 'Kari Skogland'
	},
	{
		id: 'black-widow',
		title: 'Black Widow',
		type: 'movie',
		phase: 4,
		releaseDate: '2021-07-09',
		chronologicalOrder: 31,
		inUniverseYear: '2016',
		description:
			'Natasha Romanoff confronts her past when a dangerous conspiracy with ties to the Red Room resurfaces. Set between Civil War and Infinity War.',
		duration: '2h 14m',
		director: 'Cate Shortland'
	},
	{
		id: 'loki',
		title: 'Loki',
		type: 'disney+',
		phase: 4,
		releaseDate: '2021-06-09',
		chronologicalOrder: 32,
		inUniverseYear: '2012+ (TVA)',
		description:
			'After stealing the Tesseract in Avengers: Endgame, Loki is captured by the Time Variance Authority and forced to assist in stopping a greater threat.',
		duration: '6 episodes',
		director: 'Kate Herron',
		note: 'Season 1'
	},
	{
		id: 'what-if',
		title: 'What If...?',
		type: 'disney+',
		phase: 4,
		releaseDate: '2021-08-11',
		chronologicalOrder: 33,
		inUniverseYear: 'Multiverse',
		description:
			'An anthology series exploring alternate realities where pivotal MCU moments unfold differently, narrated by The Watcher.',
		duration: '9 episodes',
		note: 'Season 1'
	},
	{
		id: 'shang-chi',
		title: 'Shang-Chi and the Legend of the Ten Rings',
		type: 'movie',
		phase: 4,
		releaseDate: '2021-09-03',
		chronologicalOrder: 34,
		inUniverseYear: '2024',
		description:
			'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
		duration: '2h 12m',
		director: 'Destin Daniel Cretton'
	},
	{
		id: 'eternals',
		title: 'Eternals',
		type: 'movie',
		phase: 4,
		releaseDate: '2021-11-05',
		chronologicalOrder: 35,
		inUniverseYear: '5000 BC–2024',
		description:
			'A group of immortal beings who have secretly lived on Earth for thousands of years reunite to protect humanity from their ancient enemies.',
		duration: '2h 37m',
		director: 'Chloé Zhao'
	},
	{
		id: 'hawkeye',
		title: 'Hawkeye',
		type: 'disney+',
		phase: 4,
		releaseDate: '2021-11-24',
		chronologicalOrder: 36,
		inUniverseYear: '2024',
		description:
			'Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Complications arise when a threat from his past shows up.',
		duration: '6 episodes',
		director: 'Rhys Thomas, Bert & Bertie'
	},
	{
		id: 'spider-man-no-way-home',
		title: 'Spider-Man: No Way Home',
		type: 'movie',
		phase: 4,
		releaseDate: '2021-12-17',
		chronologicalOrder: 37,
		inUniverseYear: '2024',
		description:
			'Peter Parker asks Doctor Strange to help him restore his secret identity, but when the spell goes wrong, villains from other universes begin to arrive.',
		duration: '2h 28m',
		director: 'Jon Watts'
	},
	{
		id: 'doctor-strange-multiverse',
		title: 'Doctor Strange in the Multiverse of Madness',
		type: 'movie',
		phase: 4,
		releaseDate: '2022-05-06',
		chronologicalOrder: 38,
		inUniverseYear: '2024',
		description:
			'Doctor Strange teams up with a mysterious teenager who can travel the multiverse, but her ability could make her a powerful enemy and target.',
		duration: '2h 6m',
		director: 'Sam Raimi'
	},
	{
		id: 'moon-knight',
		title: 'Moon Knight',
		type: 'disney+',
		phase: 4,
		releaseDate: '2022-03-30',
		chronologicalOrder: 39,
		inUniverseYear: '2025',
		description:
			'Marc Spector, a mercenary with multiple personality disorder, becomes an avatar of the Egyptian moon god Khonshu.',
		duration: '6 episodes',
		director: 'Mohamed Diab, Justin Benson, Aaron Moorhead'
	},
	{
		id: 'ms-marvel',
		title: 'Ms. Marvel',
		type: 'disney+',
		phase: 4,
		releaseDate: '2022-06-08',
		chronologicalOrder: 40,
		inUniverseYear: '2025',
		description:
			'Kamala Khan, a Pakistani-American teenager and huge fan of the Avengers, discovers she has shape-shifting superpowers.',
		duration: '6 episodes',
		director: 'Adil El Arbi, Bilall Fallah, Meera Menon, Sharmeen Obaid-Chinoy'
	},
	{
		id: 'thor-love-and-thunder',
		title: 'Thor: Love and Thunder',
		type: 'movie',
		phase: 4,
		releaseDate: '2022-07-08',
		chronologicalOrder: 41,
		inUniverseYear: '2025',
		description:
			'Thor enlists the help of Valkyrie, Korg, and Jane Foster—who now wields Mjolnir—to stop Gorr the God Butcher, who is seeking the extinction of the gods.',
		duration: '1h 59m',
		director: 'Taika Waititi'
	},
	{
		id: 'she-hulk',
		title: 'She-Hulk: Attorney at Law',
		type: 'disney+',
		phase: 4,
		releaseDate: '2022-08-18',
		chronologicalOrder: 42,
		inUniverseYear: '2025',
		description:
			'Jennifer Walters, a lawyer specializing in superhuman-oriented legal cases, becomes the Hulk after a car crash causes an exchange of blood with her cousin Bruce Banner.',
		duration: '9 episodes',
		director: 'Kat Coiro, Anu Valia'
	},
	{
		id: 'black-panther-wakanda-forever',
		title: 'Black Panther: Wakanda Forever',
		type: 'movie',
		phase: 4,
		releaseDate: '2022-11-11',
		chronologicalOrder: 43,
		inUniverseYear: '2025',
		description:
			'Queen Ramonda and the people of Wakanda fight to protect their nation from intervening world powers after the death of King T\'Challa, and confront the new underwater kingdom of Talokan.',
		duration: '2h 41m',
		director: 'Ryan Coogler'
	},
	{
		id: 'guardians-holiday-special',
		title: 'The Guardians of the Galaxy Holiday Special',
		type: 'special',
		phase: 4,
		releaseDate: '2022-11-25',
		chronologicalOrder: 44,
		inUniverseYear: '2025',
		description:
			'Drax and Mantis go on a mission to Earth to find the perfect Christmas gift for Peter Quill: Kevin Bacon.',
		duration: '44m',
		director: 'James Gunn',
		note: 'Disney+ Special Presentation'
	},
	// ─── PHASE 5 ────────────────────────────────────────────────────────────────
	{
		id: 'ant-man-quantumania',
		title: 'Ant-Man and the Wasp: Quantumania',
		type: 'movie',
		phase: 5,
		releaseDate: '2023-02-17',
		chronologicalOrder: 45,
		inUniverseYear: '2025',
		description:
			'Scott Lang, Hope Van Dyne, Hank Pym, Janet Van Dyne, and Cassie Lang are sucked into the Quantum Realm and encounter Kang the Conqueror.',
		duration: '2h 4m',
		director: 'Peyton Reed'
	},
	{
		id: 'guardians-vol-3',
		title: 'Guardians of the Galaxy Vol. 3',
		type: 'movie',
		phase: 5,
		releaseDate: '2023-05-05',
		chronologicalOrder: 46,
		inUniverseYear: '2025',
		description:
			'The Guardians embark on a mission to protect Rocket from his dark past, one that will test the team\'s bonds and potentially threaten the fabric of the universe.',
		duration: '2h 30m',
		director: 'James Gunn'
	},
	{
		id: 'secret-invasion',
		title: 'Secret Invasion',
		type: 'disney+',
		phase: 5,
		releaseDate: '2023-06-21',
		chronologicalOrder: 47,
		inUniverseYear: '2026',
		description:
			'Nick Fury learns of a secret invasion of Earth by a faction of shapeshifting Skrulls who have been infiltrating every aspect of life on Earth for years.',
		duration: '6 episodes',
		director: 'Ali Selim'
	},
	{
		id: 'loki-season-2',
		title: 'Loki Season 2',
		type: 'disney+',
		phase: 5,
		releaseDate: '2023-10-06',
		chronologicalOrder: 48,
		inUniverseYear: 'TVA (Multiverse)',
		description:
			'Loki finds himself in a battle for the soul of the Time Variance Authority after time-slipping through the past and future of the organization.',
		duration: '6 episodes',
		director: 'Justin Benson, Aaron Moorhead'
	},
	{
		id: 'the-marvels',
		title: 'The Marvels',
		type: 'movie',
		phase: 5,
		releaseDate: '2023-11-10',
		chronologicalOrder: 49,
		inUniverseYear: '2026',
		description:
			'Carol Danvers, Kamala Khan, and Monica Rambeau discover they swap places whenever they use their powers and must team up to stop a powerful villain.',
		duration: '1h 45m',
		director: 'Nia DaCosta'
	},
	{
		id: 'echo',
		title: 'Echo',
		type: 'disney+',
		phase: 5,
		releaseDate: '2024-01-09',
		chronologicalOrder: 50,
		inUniverseYear: '2026',
		description:
			'Maya Lopez, a deaf Native American woman, must reconnect with her Cherokee roots and reconcile with her past after leaving New York City.',
		duration: '5 episodes',
		director: 'Sydney Freeland, Catriona McKenzie'
	},
	{
		id: 'agatha-all-along',
		title: 'Agatha All Along',
		type: 'disney+',
		phase: 5,
		releaseDate: '2024-09-18',
		chronologicalOrder: 51,
		inUniverseYear: '2025',
		description:
			'The infamous Agatha Harkness finds herself in a difficult situation and must rely on a ragtag coven of witches to navigate the dangerous Witches\' Road.',
		duration: '9 episodes',
		director: 'Jac Schaeffer'
	},
	{
		id: 'deadpool-wolverine',
		title: 'Deadpool & Wolverine',
		type: 'movie',
		phase: 5,
		releaseDate: '2024-07-26',
		chronologicalOrder: 52,
		inUniverseYear: 'Multiverse',
		description:
			'Wade Wilson, a.k.a. Deadpool, teams up with Logan, a.k.a. Wolverine, on a mission that will change the history of the Marvel Cinematic Universe.',
		duration: '2h 7m',
		director: 'Shawn Levy'
	},
	// ─── PHASE 6 ────────────────────────────────────────────────────────────────
	{
		id: 'captain-america-brave-new-world',
		title: 'Captain America: Brave New World',
		type: 'movie',
		phase: 6,
		releaseDate: '2025-02-14',
		chronologicalOrder: 53,
		inUniverseYear: '2026',
		description:
			'Sam Wilson, the new Captain America, finds himself in the center of an international incident and must uncover a conspiracy that goes far deeper than he imagined.',
		duration: '1h 58m',
		director: 'Julius Onah'
	},
	{
		id: 'thunderbolts',
		title: 'Thunderbolts*',
		type: 'movie',
		phase: 6,
		releaseDate: '2025-05-02',
		chronologicalOrder: 54,
		inUniverseYear: '2026',
		description:
			'A ragtag group of antiheroes and villains—including Yelena Belova, Bucky Barnes, Ghost, Taskmaster, US Agent, and Red Guardian—are brought together on a dangerous mission.',
		duration: '2h 7m',
		director: 'Jake Schreier'
	}
];

export const mediaTypeLabels: Record<MediaType, string> = {
	'movie': 'Movie',
	'series': 'Series',
	'disney+': 'Disney+',
	'one-shot': 'One-Shot',
	'special': 'Special'
};

export const mediaTypeColors: Record<MediaType, { bg: string; text: string; border: string }> = {
	'movie':    { bg: 'bg-red-600',    text: 'text-white',      border: 'border-red-500' },
	'series':   { bg: 'bg-blue-600',   text: 'text-white',      border: 'border-blue-500' },
	'disney+':  { bg: 'bg-blue-800',   text: 'text-blue-100',   border: 'border-blue-600' },
	'one-shot': { bg: 'bg-amber-600',  text: 'text-white',      border: 'border-amber-500' },
	'special':  { bg: 'bg-purple-600', text: 'text-white',      border: 'border-purple-500' }
};

export const phaseColors: Record<Phase, string> = {
	1: 'text-yellow-400',
	2: 'text-orange-400',
	3: 'text-red-400',
	4: 'text-blue-400',
	5: 'text-purple-400',
	6: 'text-green-400'
};
