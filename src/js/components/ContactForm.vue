<template>

        
<form>
    <div class="contactform col-12 bg">
    <p>
        Name: <input :class="{ error: errors.has('name') }" type="text" v-validate="'required|alpha_num'" name="name">
        <span v-show="errors.has('name')" class="error">{{ errors.first('name') }}</span>
    </p>
        </div>
    
        <div class="contactform col-12 bg">
    <p>
        Email: <input :class="{ error: errors.has('email') }" type="text" v-validate="'required|email'" name="email">
        <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
    </p>
        </div>
    
        <div class="contactform col-12 bg">
    <p>
        Message: <textarea class="contacttextarea" :class="{ error: errors.has('message') }" type="textarea" v-validate="'required|message'" name="message"></textarea>
        <span v-show="errors.has('message')" class="error">{{ errors.first('message') }}</span>
    </p>
    </div>
    
    <div class="contactbutton col-2 offset-5 bg">
    <p>
        <button class="button" type="submit">Submit</button>
    </p>
    </div>
</form>

            
    </div>

</template>

<script>
    export default {
        data() {
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
</style>