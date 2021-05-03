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