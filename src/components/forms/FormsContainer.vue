<template>
    <FormLogin v-if="showModalLogin"/>
    <FormRegister v-if="showModalRegister"/>
</template>

<script>
import FormLogin from './FormLogin.vue'
import FormRegister from './FormRegister.vue'
import { mapState} from 'vuex';

export default{
    name: 'FormsContainer',
    components: {
        FormLogin,
        FormRegister,
    },
    computed: {
        ...mapState({
        showModalLogin: state => state.showModalLogin,
        showModalRegister: state => state.showModalRegister
        })
    },
};
</script>