export namespace ClientScreen {
	export interface Sizes {
		size: number
		setScreenSize(size: number): void
		getScreenSize(): number
	}

	export class Size implements Sizes {
		size: number

		constructor(size: number) {
			this.size = size
		}

		getScreenSize(): number {
			return this.size
		}

		setScreenSize(size: number) {
			this.size = size
		}
	}
}

