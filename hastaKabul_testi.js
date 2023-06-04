Feature('login ');
Before ((I)=>{
    I.login();

})

Scenario('test something', async  ({ I , girisPagePage, kayitKabulPage}) => {
    await girisPagePage.mesajKutusuKapat();
    girisPagePage.kayitKabulEkranAc();
    kayitKabulPage.hastaAra();
    kayitKabulPage.hastaKayit();
    kayitKabulPage.kabulAlma();
    kayitKabulPage.kayitEtme();
    kayitKabulPage.kabulKontrol();

});
