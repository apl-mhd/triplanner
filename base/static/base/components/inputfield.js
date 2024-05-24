Vue.component('input-field',{
    
    props:['city', 'startDate', 'endDate', 'title'],

      data(){
        return{
            cityName: '',
            options: [],
            isSelect: false
        }
    },
    methods:{

        citySearch(cityName){
            axios
            .get(`http://127.0.0.1:8000/country/?q=${cityName}`)
            .then(response => {
               this.options = response.data

            })
            .catch(error =>{
                console.error(error)
            })
                this.$emit('update:city', null)
                this.isSelect = false
            },

        selectCity(data){
            this.cityName = data.name
            this.$emit('update:city', data.id)
            this.isSelect = true
        },
        searchCity(){
            this.citySearch(this.cityName)
        }
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"> {{title}}</label>
                <input @focus="searchCity" type="text" v-model="cityName" @input="citySearch(cityName)" class="form-control">
                <div v-if="!isSelect">
                    <ul>
                        <li v-for="option in options" :key="option.id">
                        <div  @click="selectCity(option)">
                            <p>{{option.name}}</p>
                            <span>{{option.country_name}}</span>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-start mb-3">
                <div class="col-auto">
                    <input type="date" :value="startDate" @input="$emit('update:startDate', $event.target.value)" class="form-control">
                </div>
                <div class="col-auto">
                    <input type="date" :value="endDate" @input="$emit('update:endDate', $event.target.value)" class="form-control">
                </div>
            </div>  
            
        </div>  
    `
})
//khan fair mart 1250