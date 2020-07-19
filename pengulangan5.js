var ulangi = confirm('Apakah anda ingin mengulangi ?');
var counter = 0;

while(ulangi){
	counter++;
	var bintang = "*".repeat(counter)+"<br>";
	document.write(counter +": "+bintang);
	ulangi =confirm('Apakah anda ingin mengulangi ?');
}