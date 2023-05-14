import frostedglass from './frostedglass';
import softx from './softx';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
// import reborn from './reborn';
// import tranquil from './tranquil';
import discordrecolor from './discordrecolor';
import comfy from './comfy';
import solana from './solana';
import materialdesign from './materialdesign';
import neutron from './neutron';
import operagxtheme from './operagxtheme';
import outlook from './outlook';
import cyan from './cyan';

export const themes = [
	frostedglass,
	softx,
	basicbackground,
	clearvision,
	comfy,
	solana,
	materialdesign,
	neutron,
	discordrecolor,
	// reborn,
	// tranquil,
	operagxtheme,
	outlook,
	cyan
];

export const fallbacks = themes.map((el) => el.name.replace(/ /g, '').toLowerCase());
