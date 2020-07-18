var item = prompt('Masukkan makanan : ');

switch(item){
	case 'nasi' :
	case 'soto' :
		alert('makanan sehat');
		break;
	case 'pizza' :
	case 'hamburger' :
		alert('makanan tidak sehat');
		break;
	default :
		alert('yang anda masukkan bukan makanan');
		break;
}