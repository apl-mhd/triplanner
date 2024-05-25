Vue.component('input-field',{
    
    props:['city', 'startDate', 'endDate', 'title'],

      data(){
        return{
            cityName: '',
            options: [],
            isSearch: false,
            isOptionSelect: false
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
                //this.isSearch = true
            },

        selectCity(data){
            this.cityName = data.name
            this.$emit('update:city', data.id)
            this.isSearch =false
        },
        searchCity(){
            this.isSearch = true
            this.citySearch(this.cityName)
        },
        inputFocusOut(){
            if(this.isOptionSelect){
                this.isSearch =false
            }
        },
        optionMouseDown(){
            this.isOptionSelect = true
        },
        optionMouseUp(){
            this.isOptionSelect = false
            this.isSearch = false
        }
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"> {{title}}</label>
                <input @focusout="inputFocusOut" @focus="searchCity" type="text" v-model="cityName" @input="citySearch(cityName)" class="form-control">
                <div>
                <div class="auto-suggest-box w-25" v-if="isSearch">
                    <ul>
                        <li class="mb-1"  v-for="option in options" :key="option.id">
                        <div  @click="selectCity(option)">
                            <span>{{option.name}}</span> <br/>
                            <i>{{option.country_name}}</i>
                        </div>
                        </li>
                    </ul>
                </div>
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