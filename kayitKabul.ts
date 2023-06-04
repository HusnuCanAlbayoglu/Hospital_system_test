const {  } = inject();

module.exports = {
fields :{},
select:{},
buttons:{},

hastaAra: function(){
 
  I.switchTo('src*="../PationAdmission/ObjectViewers/PationAdmission/pationadmissionviewer.htm"')
  I.waitForElement('//input[@id="edtPatientSearch"]')
  console.log(I.gererateTCKimlikNo())
  I.fillField('//input[@id="edtPatientSearch"]',I.generateTCKimlikNo())
  I.pressKey('Enter')

},

hastaKayit :function(){

//hasta kayıt
I.waitForElement('//span[contains(text(),"Hasta bulunamadı.")]')
I.waitForElement('//button[text()="Evet"]')
I.click('//button[text()="Evet"]')

I.waitForElement('//span[contains(text(),"Belirtilen adresi kullanmak istiyor musunuz?")]')
I.waitForElement('//button[text()="Evet"]')
I.click('//button[text()="Evet"]')

I.waitForElement('#cmbInstutionID')
I.fillField('#cmbInstutionID','1');

I.waitForElement('#editCellPhone')
I.fillField('#editCellPhone','1111111111111');

I.waitForElement('#cmbWorkingStatus')
I.click('#cmbWorkingStatus');
I.pressKey('Enter')

},

kabulAlma : function(){

  //kabul Alma 
    
  I.waitForElement('#cmbBuildingID')
  I.fillField('#cmbBuildingID','MERKEZ')
  I.pressKey('Enter')

  I.waitForElement('#cmbSendUnitID')
  I.click('#cmbSendUnitID')
  I.fillField('#cmbSendUnitID','ACİL YESİL ALAN')
  I.pressKey('Enter')

  I.waitForElement('#cmbSendDoctotID')
  I.click('#cmbSendDoctotID')
  I.fillField('#cmbSendDoctotID','MK')
  I.pressKey('Enter')
  
},

kayitEtme :function(){

   //Kaydet Butonu 

   I.waitForElement('#smallSaveButton')
   I.waitForEnable('#smallSaveButton')
   I.click('#smallSaveButton')
   I.wait(2)


},

kabulKontrol :function(){

 //kabul kontrol 

 I.waitForElement('.x-grid3-row.x-grid-row-collapsed.x-grid3-row-first.x-grid3-row-last.x-grid3-row')
 I.seeElement('.x-grid3-row.x-grid-row-collapsed.x-grid3-row-first.x-grid3-row-last.x-grid3-row')

}

  // insert your locators and methods here
}
