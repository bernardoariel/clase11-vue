<template>
    <div class="container">
        <form @submit.prevent="checkearUsuario()">
            <div class="form-group">
                <label for="user">
                    <input type="text" class="form-control mb-3" name="user" v-model="user" placeholder="Ingresa Usuario">
                </label>
            </div>
            <div class="form-group">
                <label for="password">
                    <input type="text" class="form-control mb-3" name="password" v-model="password" placeholder="Ingresa Contraseña">
                </label>
            </div>
            <button class="btn btn-primary">Log-In</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'HomeComponent',

    data() {
        return {
            user:'',
            password:''
        };
    },

    methods: {
        ...mapMutations(['modificarUsuActivo']),
        checkearUsuario(){
            const encontrado = this.$store.state.listaUsuarios.find((usuario) => (usuario.nombre==this.user && usuario.password==this.password))
            
            console.log(encontrado)
            if(encontrado){
                //acceder al store y modificar usuario activo
                this.modificarUsuActivo(encontrado.nombre)
                Object.assign(this.$data, this.$options.data)
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>