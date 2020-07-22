
var tanya=true;

while(tanya){
//menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang');

//menangkap pilihan computer
//membangkitkan bilangan random
var comp= Math.random();

if (comp <0.34) {
	comp ='gajah';
}else if(comp >= 0.34 && comp <0.67){
	comp = 'orang';
}else{
	comp = 'semut';
}

//menetukan rules
var hasil ='';

if (p==comp) {
	hasil ='seri';
}else if(p == 'gajah'){
	hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
}else if (p == 'orang'){
	hasil = (comp =='gajah') ? 'Kalah' : 'Menang';
}else if (p == 'semut'){
	hasil = (comp =='orang') ? 'Kalah' : 'Menang';
}else {
	hasil = 'Memasukkan pilihan yang salah';
}


//tampilakan hasilnya

alert('Kamu memilih '+p+' dan komputer memilih '+comp+'\nmaka hasilnya '+hasil);

tanya = confirm('Ingin bermain lagi ?');
}

alert('Terima kasih');