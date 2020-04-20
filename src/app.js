import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [{name:"Buy Beer"},
              {name:"Wash Car"},
              {name: "Order Birthday Cake"}
             ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push({
          name: this.newTask
        });
        this.newTask = "";
      }
    }
  });
});
