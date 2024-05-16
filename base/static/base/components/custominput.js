Vue.component('custom-input',{
    
    props:['address', 'firstname'],

    data(){
        return{
            city_name: ''
        }
    },

    methods:{
       updateAddress(data){
        this.$emit('update:address', data)
       },

       updateFirstName(data){
        this.$emit('update:firstname', data)
       }
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"></label>
                <input 
                type="text" 
                    :value="address"
                    @input="updateAddress($event.target.value)"
                    class="form-control"
                >
            </div>
           
            <div class="mb-3">
                <label class="form-label"></label>
                <input 
                type="text" 
                    :value="firstname"
                    @input="updateFirstName($event.target.value)"
                    class="form-control"
                >
            </div>
           
        </div>  
    `

})
