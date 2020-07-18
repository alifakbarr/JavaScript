var	nilai;

nilai = prompt('Masukkan Angka : ');
if (nilai % 2==0) {
	alert(nilai + ' adalah genap');
}else if(nilai % 2==1){
	alert(nilai + ' adalah ganjil');
}else{
	alert('Yang anda masukkan bukan angka');
}