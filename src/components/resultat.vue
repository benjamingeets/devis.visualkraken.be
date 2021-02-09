<template>
    <div class="resultat">
        <h1>Résultat estimé pour votre demande:</h1>
        <p>{{$store.state.choix}} :</p>
        <!-- Partie CSW -->
        <div v-if="$store.state.choix === 'Création de site web'">
            <ul>
                <li>Type de site : {{$store.state.site.type}}</li>
                <li>Fournissez-vous le contenu : {{$store.state.site.contenu}}</li>
                <li>Accès aux statistiques : {{$store.state.site.stats}}</li>
                <li>Avez-vous déjà un nom de domaine : {{$store.state.site.domain}}</li>
                <li>Fonctionnalités : 
                    <ul>
                        <li v-if='$store.state.site.fonctions.contact'>Formulaire de contact</li>
                        <li v-if='$store.state.site.fonctions.form'>Formulaire personnalisé</li>
                        <li  v-if='$store.state.site.fonctions.booking'>Prise de rendez-vous</li>
                    </ul>
                </li>
                <li v-if="$store.state.site.logo == 'oui'">Nouveau logo</li>
            </ul>
            <p>Ce qui est inclus dans notre offre : </p>
            <ul>
                <li>Un site écologique et léger</li>
                <li>Responsie web design</li>
                <li>Optimisation SEO</li>
                <li>Design unique</li>
                <li>Site sécurisé avec le protocle SSL</li>
            </ul>
        </div>

        <!-- Partie comm -->

        <div v-if="$store.state.choix === 'Communication' || $store.state.choix === 'Graphisme'">
            {{$store.state.site.type}} <!--Ca devrait pas être le truc du prix ici mais ça marche-->
        </div>

        <p id="prix">Estimation : <span class="bold">à partir de {{$store.state.prix}}<span v-if="$store.state.site.type != 'Assistance' && $store.state.site.type != 'Gestion de réseaux sociaux'">€</span></span> (tarif indicatif et HTVA)</p>
        <!-- Ici mettre le submit-->
        
        <form 
        name="devis" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="devis" />
            <input type="text" v-model="$store.state.choix" name="choix">
            <input type="text" v-model="$store.state.site.type" name="type">
            <input type="text" v-model="$store.state.prix" name="prix">
            <input type="text" v-model="$store.state.site.fonctions.booking" name="Options_site_booking">
            <input type="text" v-model="$store.state.site.fonctions.contact" name="Options_site_contact">
            <input type="text" v-model="$store.state.site.fonctions.form" name="Options_site_form">
            <input type="text" v-model="$store.state.site.stats" name="Options_site_gAnalytics">
            <input type="text" v-model="$store.state.site.contenu" name="Options_site_contenu">
            <input type="text" v-model="$store.state.site.domain" name="Options_site_domain">
            <button type="submit">
                <div class="button button-gradient">
                    <p>Envoyer votre demande et contact</p>
                </div>
            </button>
        </form>
        <div id="back">
            <a href="https://visualkraken.be">
            <p>Ou revenir sur <span class="underline">visualkraken.be</span></p>
        </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"resultat",
}
</script>

<style lang="scss" scoped>
input{
    display: none;
}
.resultat{
    margin:100px 0;
}
button{
    border:0;
    background: none;
    margin:auto;
    width:100%;
}
.button{
    margin:auto;
}
    ul{
        margin-left:20px;
    }
    li{
        margin:5px 0;
        &::before{
            content:"- "
        }
    }
    .button{
        margin:auto;
        margin-top:30px;
    }
    
    .underline{
    text-decoration: underline;
    }
    .bold{
        font-weight: bolder;
    }
    #back{
        text-align: center;
    }
</style>