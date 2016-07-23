new Vue({
  el:'#app',
  data:{
    todos:[
      {text: 'Example'},
      {text: 'Example'},
      {text: 'Example'}
    ]
  },
  methods:{
    // Metodo remover item
    removeTodos: function(index){
      this.todos.splice(index,1);
    },
    //Metodo para adicionar item
    addTodo: function(){
      var text = this.newTodo.trim();
      if(text){
        this.todos.push({text:text});
        this.newTodo = '';
      }
    }
  }

})
