// chercher class dans élément ou document entier
document.getElementsByClassName = function(className, elmt) {
   var selection = new Array();
   var regex = new RegExp("\\b" + className + "\\b");
   // le second argument, facultatif
   if(!elmt)
      elmt = document;
   else if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   // on sélectionne les éléments ayant la bonne classe
   var elmts = elmt.getElementsByTagName("*");
   for(var i=0; i<elmts.length; i++)
      if(regex.test(elmts[i].className))
         selection.push(elmts[i]);

   return selection;
};

var btnAvis = document.getElementsByClassName('js-btn-avis');

function masquer (argument) {
   var argL = argument.length;
   for (var i = 0; i < argL; i++) {
      argument[i].style.display = 'none'
   };
};

function afficher (argument) {
   var argL = argument.length;
   for (var i = 0; i < argL; i++) {
      argument[i].style.display = 'block'
   };
};

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

// ajout du gestionnaire d'evnmt sur btn "Voir tous les avis"
btnAvis[0].addEventListener('click', function(e){
   toggleDisplay(btnAvis);
} , false);