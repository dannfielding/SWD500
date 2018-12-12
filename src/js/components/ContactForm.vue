<template>

    <div class="example">
        
<form>
    <p>
        Name: <input :class="{ error: errors.has('name') }" type="text" v-validate="'required|alpha_num'" name="name">
        <span v-show="errors.has('name')" class="error">{{ errors.first('name') }}</span>
    </p>
    
    <p>
        Email: <input :class="{ error: errors.has('email') }" type="text" v-validate="'required|email'" name="email">
        <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
    </p>
</form>


    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello world!'
            }
        },
        
        mount: function() {
            
            console.log('running');
        }
    }
</script>
<style lang="scss" scoped>
   
   h2 {
       font-size: 50px;
   }
   
</style>