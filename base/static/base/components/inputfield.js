Vue.component('input-field',{
    
    props:['city', 'startDate', 'endDate', 'title'],

      data(){
        return{
            
        }
    },
    methods:{
    },

    template: `
        <div>
            <div class="mb-3">
                <label class="form-label"> {{title}}</label>
                <input type="text" :value="city" @input="$emit('update:city', $event.target.value)" class="form-control">
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
