const { I } = inject();

module.exports = {
fields : {},
select:{},
buttons:{
  mesajKutuKapatmaBtn:'//div=[@class="x-tool x-tool-close"',
  kayitKabulBtn:'//tablo[@id="patientAdmissionMainBtn"'
},


mesajKutusunuKapat : async function() {
  //mesaj kutusunu kapat 
  I.switchTo('//iframe[@id="bafExplorer"');
    let mesajKutusu = await I.grabNumberOfVisibleElements(this.buttons.mesajKutuKapatmaBtn);

    if (mesajKutusu !==0){
        I.click(this.buttons.mesajKutuKapatmaBtn);
    }
  
},

kayitKabulEkranAc : function(){

  //kayıt kabul ekranı 
  I.waitForElement(this.buttons.kayitKabulBtn)
  I.click(this.buttons.kayitKabulBtn)


}
  // insert your locators and methods here
}
