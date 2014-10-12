(function(){
  //ief pour protéger les variables
  // chercher class dans élément ou document entier
  document.getElementsByClassName = function(className, elmt) {
    var selection = new Array();
    var regex = new RegExp('(^| )'+className+'( |$)');
    // le second argument, facultatif
    if(!elmt)
      elmt = document;
    else if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
    // on sélectionne les éléments ayant la bonne classe
    var elmts = elmt.getElementsByTagName("*");
    for(var i=0; i<elmts.length; i++){
      if(regex.test(elmts[i].className))
        selection.push(elmts[i]);
      };
      return selection;
  };

  function masquer (argument) {
    var argL = argument.length;
    for (var i = 0; i < argL; i++) {
      argument[i].style.display = 'none';
    };
  };

  // fct descendre ascenseur (sroll y) pour voir les avis lors de leur ouverture
  var elmntHeight,
      obj = document.getElementsByClassName('avis')[0];
  // console.log(document.getElementsByClassName('avis'))
  if(obj.offsetHeight){
   elmntHeight=obj.offsetHeight;
  }else if(obj.style.pixelHeight){
   elmntHeight=obj.style.pixelHeight;
  };
  function fct_scroller(y) {
    // console.log(y)
    window.scrollBy(0,y);
  }
  // AFFICHER + scroll
  function afficher (argument) {
    var argL = argument.length;
    for (var i = 0; i < argL; i++) {
      argument[i].style.display = 'block';
    };
    fct_scroller(elmntHeight+45);// 45 = taille pagination avis
  };

  var btnAvis = document.getElementsByClassName('js-btn-avis');

  function toggleDisplay(elmt) {
    var count = 0,
    elmntToHide = document.getElementsByClassName('line');
    if(btnAvis[0].className == 'js-btn-avis avis-off'){
      // ajout class avis-on sur btn "Voir tous les avis"
      while(count<elmntToHide.length){
        elmt[0].className = 'js-btn-avis avis-on';
        count+=1;
      };
      afficher(elmntToHide);
    }else{
      elmt[0].className = 'js-btn-avis avis-off';
      masquer(elmntToHide);
    };
  };
  // on masque les avis au chargement du doc > JS est activé
  toggleDisplay(btnAvis)
  // addEvent ie + modern browser
  function addEvent(el, e, f) {
    if (el.attachEvent) {
      return el.attachEvent('on'+e, f);
    }
    else {
      return el.addEventListener(e, f, false);
    };
  };
  // ajout du gestionnaire d'evnmt sur btn "Voir tous les avis"
  addEvent(btnAvis[0],'click',function (e) {
    toggleDisplay(btnAvis);
  });

})();