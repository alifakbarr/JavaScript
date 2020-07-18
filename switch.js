// prompt akan merubah apaun menjadi string
//parseInt akan merubah yang diinputkan menjadi angka
var angka = parseInt(prompt('Masukkan angka : '));

switch(angka){
	case 1 :
	alert('yang anda masukkan 1');
	break;
	case 2 :
	alert('yang anda masukkan 2');
	break;
	case 3 :
	alert('yang anda masukkan 3');
	break;

	default:
	alert('yang anda masukkan bukan angka');
	break;
}