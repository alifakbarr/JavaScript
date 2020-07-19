var ulangi   = confirm('Apakah anda mau mengulang?');
var counter = 0;

while(ulangi){
	counter++;
	ulangi = confirm('Apakah anda mau mengulang?');
}

document.write("pengulangan sudah dilakukan "+counter+" kali");