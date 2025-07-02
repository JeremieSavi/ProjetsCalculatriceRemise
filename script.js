function verifierValeurEntrer(){
    let montantOriginal=Number(document.getElementById('prix_original').value);
    let valeurRemise=Number(document.getElementById('remise').value);
    if(montantOriginal<=0 || valeurRemise<=0 ){
        paragraphe=document.querySelector('.paragraphe_montant_original');
        paragraphe.innerHTML="Remplissez correctement les champs !"

    }
}


// Sélection de l'espace de résultat 
let paragraphe_resultat=document.querySelector('.paragraphe_resultat');
function afficherResultat(calculerMontantAvecRemise){
    calculerMontantAvecRemise()
}

function calculerMontantAvecRemise(){
    let montantOriginal=Number(document.getElementById('prix_original').value);
    let valeurRemise=Number(document.getElementById('remise').value);
    let resultat= montantOriginal * valeurRemise / 100;
    // paragraphe_resultat.innerHTML= "Le prix après remise est de :" + resultat;
    alert("Le prix avec remise est "+ resultat);
    
     
    // alert(valeurRemise);

    
}
