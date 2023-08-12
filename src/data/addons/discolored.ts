import type { Addon } from '$types/addon';
import Nyria from '../devs/nyria';

const addon: Addon = {
	name: 'Discolored',
	description: `Colorize Discord's boring SVGs.`,
	developer: Nyria,
	imports: ['https://nyri4.github.io/Discolored/main.css'],
	previewUrl: ['https://nyri4.github.io/Discolored/main.css'],
	group: 'svgs',
	selector: 'discolored',
	use: false
};

export default addon;
