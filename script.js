var kartBody=document.querySelector(".card-body");

kartBody.addEventListener("click",uyari);

localStorage.setItem("gün","pazartesi");//localStorage bilgi ekleme
function uyari(e){
    console.log(e.target);
    //e.target.remove();
   console.log(localStorage.getItem("gün"));//localStorage'dan bilgi çekme
}

var ekleBtn=document.getElementById("ekle");

ekleBtn.addEventListener("click",ekle);

function ekle(){
    var paragraf=document.createElement("p");
    paragraf.innerText="Selamlar ben yeni yazıyım.";
    document.querySelector(".card-body").appendChild(paragraf);

}

document.getElementById("sil").addEventListener("click",function(){
    localStorage.removeItem("gün");
});

document.getElementById("hepsiniTemizle").addEventListener("click",function(){
    localStorage.clear();
});

document.getElementById("sessionEkle").addEventListener("click", function () {
//     var d = new Date();
// var tarih = d.toLocaleString();
// sessionStorage.setItem("Ziyaret Tarihi",tarih);
var meyveler=["elma","armut","karpuz"];
//sessionStorage.setItem("meyveler",meyveler);//bu şekilde atarsak dizi özelliği kaybolur..
sessionStorage.setItem("meyveler",JSON.stringify(meyveler));//dizi özelliği kaybolmadan stringe dönüştürdü.

})
document.getElementById("sessionGoster").addEventListener("click",function(){
   //alert(sessionStorage.getItem("Ziyaret Tarihi"));
   console.log(sessionStorage.getItem("meyveler"));
   console.log(JSON.parse(sessionStorage.getItem("meyveler")));//dizi görünümlü string ifadeyi diziye dönüştürür.
});
document.getElementById("sessionSil").addEventListener("click",function(){
    //sessionStorage.removeItem("Ziyaret Tarihi");
});

/* ECMASCRIPT6/ES2015 */

/* Arrow Functions */

function yaz1(a){
   return "yazı yazıldı." + a;
}

const yaz2 =(a) => {
   return "yazı yazıldı." + a;
};

const yaz3 = (a) => console.log("yazı yazıldı." + a);//eğer function içinde tek satır varsa süslü parenteze gerek yoktur.

const yaz4 = a => console.log("yazı yazıldı." + a);//eğer 1 tane parametre varsa normal parenteze gerek yoktur.

const yaz5 = a => "yazı yazıldı." + a;//eğer function içinde tek satır varsa ve geri değer döndürülecekse return yazılmaz.

console.log(yaz1("Normal Function"));
console.log(yaz2("Arrow Function-1"));
console.log(yaz3("Arrow Function-2"));
yaz4("Arrow Function-3");
console.log(yaz5("Arrow Function-4"));

//Parametreden gönderdiğmiiz sayının arrow function ile karesini alıp geri gönderelim.
var kareAl = sayi => sayi*sayi;

//alert(kareAl(5));

/* Destructing */
// dizi ya da obje içinde ki elemanları kolayca parçalara ayırma işlemini yapar.
let sayi1,sayi2,sayi3;
let sayilar=[25,30,25];
// let sayi1=sayilar[0];
// let sayi2=sayilar[1];
// let sayi3=sayilar[2];

[sayi1,sayi2,sayi3]=sayilar;//destructing işlemi yapılıyor.
console.log(sayi1);

var takimlar={"gs":"Fatih","bjk":"Sergen","fb":"Emre"};

// takim1=takimlar.gs;
// takim2=takimlar.bjk;
// takim3=takimlar.fb;

//var {takim1,takim2,takim3 } = takimlar;//obje destructing işlemi
//var{gs,bjk,fb}=takimlar;// obje parçalarken(destructing) değişken isimleri key'lerle aynı olmalı.

//var{fb:takim3,gs:takim1}=takimlar;//obje parçalarken(destructing) değişken isimleri key'lerden farklı olacaksa bu yöntem kullanılır.
//console.log(takim1);


/* Spread Operatörü */

const sebzeler=["domates","patates","havuç","maydonoz"];
//console.log(sebzeler[0], sebzeler[1]);

console.log(...sebzeler);

console.log("marul",...sebzeler);

const sebzeler2=["kabak",...sebzeler,"patlıcan"];
console.log(...sebzeler2);
