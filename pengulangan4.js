var ulangi = confirm('Apakah anda ingin mengulangi?');
var counter = 0;

do{
	counter++;
	ulangi = confirm('Apakah anda ingin mengulangi?');
}while(ulangi){
	document.write("Anda sudah melakukan pengulangan "+counter+" kali");
}