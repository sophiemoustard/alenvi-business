<template lang="html">
  <div class="">
    <breadcrumb class="col-12 breadcrumb"/>
    <div class="row">
      <h1 class="col-12 text-center title-margin-bottom">Mentions légales et confidentialité</h1>
    </div>
    <section id="legal-notices">
      <p>Le site www.alenvi.io est édité par :</p>
      <ul>
        <li><q-icon name="keyboard arrow right" />Home SAS</li>
        <li><q-icon name="keyboard arrow right" />RCS : 814998779</li>
        <li><q-icon name="keyboard arrow right" />Agrément SAP : 814998779</li>
        <li><q-icon name="keyboard arrow right" />Déclaration CNIL : 1947535</li>
        <li><q-icon name="keyboard arrow right" />Société au capital de 60 000€</li>
        <li><q-icon name="keyboard arrow right" />Siège social : 8 rue de Cotte 75012 Paris</li>
        <li><q-icon name="keyboard arrow right" />Président et directeur de la publication : Guillaume Desnoës</li>
        <li><q-icon name="keyboard arrow right" />Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par Home SAS pour Gestion des demandes d'information.</li>
        <li><q-icon name="keyboard arrow right" />Elles sont conservées pendant 3 ans et sont destinées Service commercial Alenvi - Home SAS </li>
        <li><q-icon name="keyboard arrow right" />Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : Guillaume Desnoës 8 rue de Cotte 75012 Paris</li>
        <li><q-icon name="keyboard arrow right" />Nous vous informons de l’existence de la liste d'opposition au démarchage téléphonique « Bloctel », sur laquelle vous pouvez vous inscrire ici : https://conso.bloctel.fr/</li>
      </ul>
      <p>Le site www.alenvi.io est hébergé par :</p>
      <ul>
        <li><q-icon name="keyboard arrow right" />Gandi SAS</li>
        <li><q-icon name="keyboard arrow right" />RCS : 423093459</li>
        <li><q-icon name="keyboard arrow right" />Téléphone : 01 70 37 76 61</li>
        <li><q-icon name="keyboard arrow right" />Société au capital de 300 000€</li>
        <li><q-icon name="keyboard arrow right" />Siège social : 63-65 boulevard Massena 75013 Paris</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { QIcon } from 'quasar'
import Breadcrumb from '../Breadcrumbs.vue'

export default {
  components: {
    Breadcrumb,
    QIcon
  }
}
</script>

<style lang="stylus">

  ul
    list-style: none

</style>
