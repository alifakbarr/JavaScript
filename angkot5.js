var jmlangkot = 10;
var angkotberoperasi = 6;
var noangkot=1;

for (noangkot;noangkot<=jmlangkot;noangkot++){
	if (noangkot <= angkotberoperasi && noangkot !== 5) {
		console.log('angkot no '+noangkot+' beroperasi dengan baik');
	}
	else if(noangkot == 8 || noangkot == 10 || noangkot ==5 ){
		console.log('angkot no '+noangkot+' sedang lembur');
	}else{
		console.log('angkot no '+noangkot+' tidak beroperasi');
	}
}