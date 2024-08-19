<template>
    <div class="modal" @click.self="closeModal">
      <div class="modal-content" ref="modalContent">
        <span class="close" @click="closedModalRegister">&times;</span>
        <h2>Registrate</h2>
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="idType">Tipo de identificación:</label>
            <select id="idType" v-model="idType" required>
              <option value="" disabled>Seleccione uno</option>
              <option v-for="type in idType" :key= "type.value" :value= "type.value">{{ type.label }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="identification">numero de Identificación:</label>
            <input type="Number" id="identification" v-model="identification" @input="validateNumeric($event, 'identification')" required>
          </div>
          <div class="form-group">
            <label for="firstName">Nombre:</label>
            <input type="text" id="firstName" v-model="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName">Apellido:</label>
            <input type="text" id="lastName" v-model="lastName" required>
          </div>
          <div class="form-group">
            <label for="city">Ciudad:</label>
            <input type="text" id="city" v-model="city" required>
          </div>
          <div class="form-group">
            <label for="congregation">Congregación a la que asiste:</label>
            <input type="text" id="congregation" v-model="congregation">
          </div>
          <div class="form-group">
            <label for="phoneNumber">Número Telofonico:</label>
            <input type="text" id="phoneNumber" v-model="phoneNumber" @input="validateNumeric($event, 'phoneNumber')" required>
          </div>
          <div class="form-group">
            <label for="birthDate">Fecha de Nacimiento:</label>
            <input type="date" id="birthDate" v-model="birthDate" @change="validateAge" required>
          </div>
          <button type="submit">Registrarte</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';

  export default {
    name: 'FormRegister',
    data() {
      return {
        idType: '',
        identification: '',
        firstName: '',
        lastName: '',
        city: '',
        congregation: '',
        phoneNumber: '',
        birthDate: ''
      };
    },

    computed: {
      ...mapGetters(['idTypes'])
    },

    mounted() {
      this.fetchIdTypes();
    },
    
    methods: {
      ...mapActions(['closedModalRegister', 'fetchIdTypes']),

      async loadData() {
        try {
          const data = await this.fetchData();
          this.idTypes = data; // Ajusta según el campo que necesites
        } catch (error) {
          console.error('Error loading data:', error);
        }
      },

      validateNumeric(event, field) {
        this[field] = event.target.value.replace(/\D/g, '');
      },

      validateAge() {
        const birthDate = new Date(this.birthDate);
        const ageDiffMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age < 13) {
          alert('Debe ser mayor de 13 años.');
          this.birthDate = '';
        }
      },

      handleRegister() {
        // Aquí puedes agregar la lógica para manejar el registro
        console.log(`Registrando: ${this.idType}, ${this.identification}, ${this.firstName}, ${this.lastName}, ${this.city}, ${this.congregation}, ${this.phoneNumber}, ${this.birthDate}`);
        // Restablecer formulario
        this.idType = '';
        this.identification = '';
        this.firstName = '';
        this.lastName = '';
        this.city = '';
        this.congregation = '';
        this.phoneNumber = '';
        this.birthDate = '';
        this.closeModal();
      }
    },
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px;
    border-radius: 10px;
    text-align: left;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  

