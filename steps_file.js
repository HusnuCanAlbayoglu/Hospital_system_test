// in this file you can append custom step methods to 'I' object

const generateTCKN = require('tcidgen');

module.exports = function() {

  let parameters = require('./Parameters/hastane1.js')



  return actor({

    fields:{
kullaniciAdi:'//input[@id="edtNickName"]',
sifre:'//input[@id="edtPassword"]'
    },
    buttons:{
girisYapBtn:'//div[@id="loginPanel"]//div[@class="login_button"]'
    },

getEnviromentParameters : function(key){
  return parameters[key];
},

    login:function (){
      this.amOnPage(this.getEnviromentParameters("url"));
      this.waitForElement(this.fields.kullaniciAdi);
      this.waitForElement(this.fields.sifre);
      this.fillField(this.fields.kullaniciAdi,this.getEnviromentParameters("kullaniciAdi"));
      this.fillField(this.fields.sifre,this.getEnviromentParameters("sifre"));
      this.waitForElement(this.buttons.girisYapBtn);
      this.click(this.buttons.girisYapBtn);
    },

    generateTCKimlikNo:function(){
      const generateTCKN=require('tcidgen');
      const tckn=generateTCKN();
      return;

    }
 
  });
}
