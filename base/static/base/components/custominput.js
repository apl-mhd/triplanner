Vue.component('custom-input',{
    
    props:['address', 'firstName'],

    data(){
        return{
            city_name: ''
        }
    },

    methods:{

    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"></label>
                <input 
                type="text" 
                    :value="address"
                    @input="$emit('update:address', $event.target.value)"
                    class="form-control"
                >
            </div>
           
            <div class="mb-3">
                <label class="form-label"></label>
                <input 
                type="text" 
                    :value="firstName"
                    @input="$emit('update:firstName', $event.target.value)"
                    class="form-control"
                >
            </div>
           
        </div>  
    `

})
