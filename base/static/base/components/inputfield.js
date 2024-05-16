Vue.component('input-field',{
    
    props:['title'],

    data(){
        return{
            city_name: ''
        }
    },

    methods:{
        cityInput(){
            this.$emit('cityChange', this.city_name)
        }
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"> {{title}}</label>
                <input type="text" v-model="city_name" @input="cityInput" class="form-control">
            </div>
            <div class="row mb-4">
                <div class="col-auto">
                    <input type="date" class="form-control">
                </div>
                <div class="col-auto">
                    <input type="date" class="form-control">
                </div>
            </div>  
            
        </div>  
    `

})
