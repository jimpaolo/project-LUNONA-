angular.module('Lunona').constant("API",{
	baseURL:"http://lunona.com/api/TranslatorService.svc/",
	frontURL:"http://lunona.com/api/FrontEndServices.svc/",
	getURL:function(){
		return this.baseURL;
	},
	getStringsForLang:function(language){
		return this.baseURL+"GetStringsForLang?langiso="+language;
	},
	getLanguage:function(){
		return this.baseURL+"GetSupportedSiteLanguages";
	},
	checkLogin:function(uname, language){
		return this.frontURL+"CheckEmailOrNickname?EoN="+uname+"&LanguageISO="+language;
	},
	doLogin:function(){
		return this.frontURL+"LogInUser";
	}
});