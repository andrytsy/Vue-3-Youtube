export namespace ClientSize {
	export interface ScreenSizes {
		size: number
		setScreenSize(size: number): void
		getScreenSize(): number
	}
	export class Screen implements ScreenSizes {
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

