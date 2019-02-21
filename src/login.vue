<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>

        <b-form @submit="onSubmit" v-if="show">

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
          show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.router.push('/');
      }
    }
  }
</script>