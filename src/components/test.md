{/* Paragraphe avec événement onCopy pour déclencher la fonction noCopy lors de la copie */}
    <p onCopy={this.noCopy}>lorem ipsum dolor sit amet, consectetur adip</p> 

    // Fonction déclenchée lorsqu'un utilisateur tente de copier du texte
    // noCopy = () => {
    //   alert("Merci de ne pas copier ce texte");
    // };


{/* Titre de la section avec événement onMouseOver pour ajouter ou supprimer une classe */}
    <h1 onMouseOver={addStyle} style={{ marginBottom: "50px" }}>{this.state.titre}</h1>

    // Fonction pour ajouter ou supprimer une classe CSS lorsqu'une balise est survolée : onMouseOver={this.addStyle}
    // addStyle = (e) => {
    //   console.log(e.target);
    //   if (e.target.classList.contains('styled')) {
    //     e.target.classList.remove('styled');
    //   } else {
    //     e.target.classList.add('styled');
    //   }
    // };
