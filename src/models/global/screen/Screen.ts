import IScreen from '@/models/global/screen/Screen.interface';

export default class Screen implements IScreen {
	size: number

	constructor(size: number) {
		this.size = size
	}

	getSize(): string {
		return 'S' || 'M' || 'L'
	}
}
