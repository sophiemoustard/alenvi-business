<template>
  <q-page padding>
    <breadcrumb class="col-12 breadcrumb"/>
    <div class="row">
      <section id="vision">
        <h1 class="col-12 text-center title-margin-bottom">Valorisons le métier d'auxiliaire pour mieux accompagner les personnes âgées</h1>
        <p>Il y a en France 1 million de personnes touchées par la maladie d’Alzheimer et les troubles apparentés. Ces personnes seront 2 millions dans 20 ans. Pour la plupart, elles souhaiteront vieillir chez elles et auront besoin de l’aide de professionnels formés et profondément empathiques pour continuer au maximum leurs activités et passer de bons moments.</p>
        <p>Chez Alenvi, nous pensons qu’être en vie, c’est aussi avoir envie. Nous réinventons l’accompagnement à domicile des personnes âgées autour du concept d’&nbsp;«&nbsp;auxiliaire d’envie&nbsp;». Nous avons créé un cadre de travail épanouissant et responsabilisant pour les auxiliaires. C’est en effet en valorisant le métier d’auxiliaire qu’on peut garantir un accompagnement stimulant et de qualité à toutes les personnes âgées.</p>
        <p>Les auxiliaires d’envie travaillent en communautés autonomes d’une dizaine de personnes, dans un cadre unique :</p>
        <div class="row items-center">
          <div class="col-lg-7">
            <ul>
              <li><q-icon name="keyboard arrow right"/> CDI 35h garanti et rémunération revalorisée par rapport au secteur</li>
              <li><q-icon name="keyboard arrow right" /> Autonomie dans la gestion du planning et des bénéficiaires</li>
              <li><q-icon name="keyboard arrow right" /> Formation continue effectuée par un réseau de neurologues</li>
              <li><q-icon name="keyboard arrow right" /> Coopération entre collègues et réunions de communauté toutes les 2 semaines</li>
              <li><q-icon name="keyboard arrow right" /> Participation au développement de la communauté (prospection, recrutement, suivi de la qualité…)</li>
              <li><q-icon name="keyboard arrow right" /> Partages sur Messenger</li>
            </ul>
          </div>
          <div class="col-lg-5" style="height: 40vh">
            <iframe id="auxiliary-iframe" src="https://www.youtube.com/embed/nzxsz7NmeJk" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <br>
        <p>L’autonomie des communautés est possible grâce à Pigi, l’assistant virtuel mobile que nous avons développé pour elles. Il met à la portée de tous les informations concernant les plannings, les bénéficiaires, les formations, les indicateurs de l’entreprise. Chaque auxiliaire peut ainsi être acteur de son métier, sans dépendre d’une personne qui centralise l’information.</p>
        <p>Actuellement présents en Île-de-France, nous avons pour ambition de créer un acteur national de référence pour le cadre de travail des auxiliaires de vie et la qualité de l’accompagnement des personnes âgées. Nous évaluons le succès d’Alenvi à l’aune d’indicateurs d’impact (bien-être au travail des auxiliaires, qualité ressentie des services) que nous mettons sur le même plan que les indicateurs financiers.</p>
        <p>Le vieillissement de la population doit être l’occasion de créer des dizaines de milliers d’emplois valorisants et qualifiés, grâce à la technologie et à un modèle d’organisation innovant. C’est l’ambition qui nous anime chez Alenvi. Si vous la partagez, <router-link to="/recrutement" class="secondary">rejoignez-nous</router-link> !</p>
      </section>
    </div>
  </q-page>
</template>

<script>
import Breadcrumb from '../components/Breadcrumbs.vue'

export default {
  metaInfo: {
    title: 'Vision',
    meta: [
      { name: 'description', content: 'Alenvi réinvente l’accompagnement à domicile des personnes âgées grâce à la valorisation des auxiliaires de vie et aux technologies mobiles.' }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Organization", "name": "Vision", "description": "Alenvi réinvente l\'accompagnement à domicile des personnes âgées", "url": "https://www.alenvi.io/vision" }', type: 'application/ld+json' }
    ]
  },
  components: {
    Breadcrumb
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.breadcrumb
  padding-left: 1%
  @media (max-width: 1024px) and (min-width: 320px)
    padding-left: 0%
  @media (min-width: 1199px)
    padding-left: 2.3%

.title-margin-bottom
  margin-bottom: 3%

ul
  list-style: none
  li
    font-size: 1.3em
    line-height: 1.7em

#vision
  //padding-left: 5%
  //padding-right: 5%
  @media (max-width: 991px)
    padding-bottom: 5%

.primary
  color: $primary

.secondary
  color: $secondary

.quaternary
  color: $quaternary
</style>
