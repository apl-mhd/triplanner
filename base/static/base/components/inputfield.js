Vue.component('input-field',{
    
    props:['city', 'startDate', 'endDate', 'title'],

      data(){
        return{
            cities: [
                {id: 1, country:"Bangladesh", city: "Dhaka"},
                {id: 2, country:"Bangladesh", city: "Rajshahi"},
                {id: 3, country:"Bangladesh", city: "Khulna"},
                {id: 4, country:"Bangladesh", city: "CTG"},
                {id: 5, country:"Bangladesh", city: "Barishal"},
                {id: 6, country:"Bangladesh", city: "Shylet"},
            ]
        }
    },
    methods:{
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"> {{title}}</label>
                <input type="text" :value="city" @input="$emit('update:city', $event.target.value)" class="form-control">


                <div v-for="city in cities" :key="city.id">
                    <p>{{city.city}}</P>
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
