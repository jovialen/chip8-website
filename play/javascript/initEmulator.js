import init from '../assets/wasm/emulator/chip8_emu.js';

// Attach start function to the starting element
document
	.getElementById('emulatorStarter')
	.addEventListener('click', startEmulator);

function startEmulator() {
	// Hide starting element to prevent re-initialization
	document.getElementById('emulatorStarter').classList.add('hide');

	// Run the webassembly
	init().then(() => {
		console.log('Loaded WASM');

		// Scale the canvas to its parent
		let parent = document.getElementById('wasm-chip8-canvas');
		parent.lastElementChild.style.width = '100%';
		parent.lastElementChild.style.height = '100%';

		// Focus on the canvas
		parent.lastElementChild.focus();
	});
}
