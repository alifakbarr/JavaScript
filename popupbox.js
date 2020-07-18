// alert('Hello World');
// var nama = prompt('Masukkan Nama : ');
// alert(nama);

// var conf =confirm('Kamu yakin?');
// if (conf === true) {
// 	alert('user menekan OK');
// }else {
// 	alert('User menekan CANCEL');
// }

alert('Selamat Datang');

var lagi = true;

while(lagi === true){
	var nama =prompt('Masukkan Nama');
	alert(nama);

	lagi = confirm('Selesai ?');
}

alert('Terima kasih '+ nama);