<template>
  <div> <!-- style="width: 600px; max-width: 80vw;" -->
    <q-field icon="face">
      <q-input  float-label="Votre nom" v-model="user.name" />
    </q-field>
    <q-field icon="email" :error="$v.user.email.$error" :error-label="emailError">
      <q-input float-label="Votre email*" v-model="user.email" @blur="$v.user.email.$touch" />
    </q-field>
    <q-field icon="phone" :error="$v.user.phone.$error" :error-label="requiredLabel">
      <q-input float-label="Votre numéro de téléphone*" v-model="user.phone" @blur="$v.user.phone.$touch" />
    </q-field>
    <q-field icon="business">
      <q-input  float-label="Votre code postal" v-model="user.zipCode" />
    </q-field>
    <q-field icon="message" helper="500 caractères max." :count="500" :error="$v.user.message.$error" :error-label="messageError">
      <q-input float-label="Ecrivez votre message ici.*" type="textarea" :rows="5" v-model="user.message" @blur="$v.user.message.$touch" />
    </q-field>
    <div class="no-icon-padding-sub">
      <sub>*Champs requis.</sub>
    </div>
    <div class="row justify-center no-icon-padding">
      <q-btn size="md" label="Envoyer" color="primary" :disable="$v.user.$invalid" @click="sendRequest" />
    </div>
  </div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        message: '',
        phone: '',
        zipCode: ''
      },
      requiredLabel: 'Champ requis.'
    }
  },
  validations: {
    user: {
      message: {
        required,
        maxLength: maxLength(500)
      },
      email: {
        required,
        email
      },
      phone: { required }
    }
  },
  computed: {
    messageError () {
      if (!this.$v.user.message.required) {
        return 'Champ requis';
      } else if (!this.$v.user.message.maxLength) {
        return '500 caractères maximum.'
      }
    },
    emailError () {
      if (!this.$v.user.email.required) {
        return 'Champ requis';
      } else if (!this.$v.user.email.email) {
        return 'Email invalide'
      }
    }
  },
  methods: {
    async sendRequest () {
      try {
        await this.$axios.post(`${process.env.API_HOSTNAME}/email/sendUserRequest`, { user: this.user });
        this.$q.notify({
          message: 'Votre demande a bien été prise en compte',
          type: 'positive',
          timeout: 2500
        });
      } catch (e) {
        /* handle error */
        console.error(e.response);
        this.$q.notify({
          message: "Erreur lors de l'envoi de votre message, si le problème persiste, contactez notre support a l'adresse suivante: support@alenvi.io",
          type: 'negative',
          timeout: 7000
        });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .q-field
    margin: 0 0 20px 0

  .no-icon-padding
    padding-left: 44px
    &-sub
      padding-left: 44px
      margin: 0 0 20px 0
</style>
