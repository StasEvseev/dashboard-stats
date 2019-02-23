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
            <span v-if="!is_valid">Пользователь не существует</span>
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
                is_valid: true,
                instance: this.instanceA,
            }
        },
        props: ['instanceA'],
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if(this.map.hasOwnProperty(this.form.name)){
                    this.instance.user = this.map[this.form.name];
                    localStorage.user = JSON.stringify(this.instance.user);
                    this.$router.push('/');
                } else {
                    this.is_valid = false;
                }
            }
        }
    }
</script>