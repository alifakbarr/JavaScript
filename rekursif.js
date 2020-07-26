function tampilAngka(n) {
	// basecase
	if (n === 0) return;

	console.log(n);
	tampilAngka(n-1);
}

console.log(tampilAngka(10));