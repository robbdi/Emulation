ST-V BIOS (Sega Titan Video)

Hardware : 171-6847D (Sega 1984)
Number : 834-11579

Eprom 17951 is the japanese version of the bios.
Eprom 17952 is the united sates version.

There is just 4 differents bytes between the two versions.

Offset       JP      US

00809        4A      55
03069        10      40
7FFFE        18      1D
7FFFF        99      FD

ST-V hardware description :

	CPU	2 x HITACHI SH-2 (HD6417095)
	SNDCPU	1 x MC68EC000FN12 (68000)
	SOUND	1 x 315-5687 (YMF292-F)
		  + 315-5689 (HD64440F) ???
	OTHER	1 x 315-5690 (FH3006)
		1 x 315-5688 (FH3007)
		1 x 315-5778
		1 x 315-5744

The board is Jamma, the test and service switches are located on the board itself.

Dumped and provided to you by Gerald Coy and Thierry ShinobiZ.

November 17th, 1999.