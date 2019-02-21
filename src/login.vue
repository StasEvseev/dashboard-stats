<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>

        <b-form @submit="onSubmit">

          <b-form-group id="exampleInputGroup2" label="Ваше имя:" label-for="exampleInput2">
            <b-form-input
                    id="exampleInput2"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Введите имя"/>
          </b-form-group>

          <b-button type="submit" variant="primary">Войти</b-button>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                },
                map: {
                    admin: {name: 'Админ Админович', identities: ['edit_dashboard', 'view_dashboard']},
                    user: {name: 'Обычный пользователь', identities: ['view_dashboard']},
                },
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if(this.map.hasOwnProperty(this.form.name)){
                    localStorage.user = JSON.stringify(this.map[this.form.name]);
                    this.$router.push('/');
                }
            }
        }
    }
</script>