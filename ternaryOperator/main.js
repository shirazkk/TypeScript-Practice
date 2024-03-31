var weather1 = false;
var go = weather1 ? "go outside" : "stay home";
console.log(go);
var weather4 = false;
var weather5 = false;
var answer = (weather4 ? "go Outside" : "stay home") || (weather5 ? "go inside" : "get out");
console.log(answer);
var barish_Hoti_Ha = true;
var barish_Nhi_Hoti_Ha = false;
var Too_kiya_Hota_Ha = (barish_Hoti_Ha ? "Ziyada_Pani_Ata_Ha" : "Thora_Pani_Ata_Ha") ||
    (barish_Nhi_Hoti_Ha ? "Garmi_Nhi_Hoti_Ha" : "Garmi_Hoti_Ha");
console.log(Too_kiya_Hota_Ha);
