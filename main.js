Vue.component('todo', {
  data: () => {
    return {
      newTodo: '',
      
      idForTodo: 3,
      todos: [
        {
          'id': 1,
          'title': 'This title',
          'completed': false,
          'seen': true,
        },
        {
          'id': 2,
          'title': 'Lord of the rings',
          'completed': false,
          'seen': true,
        },
      ]
    }
  },
  methods: {
    addTodo(){
      if (this.newTodo.trim().length == 0){
      return
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        seen: true,
      })
      this.newTodo = ''
      this.idForTodo++
    },
    removeTodo(index){
      this.todos.splice(index, 1)
    },
    test(todo){
      todo.seen = !todo.seen
    }

  },
  template: ` 
  <div class="row h-100">
  <div class=" col-md-8 col-sm-10 offset-sm-1 offset-md-2">
  <img class="mx-auto d-block" style="width: 200px;" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg">
  <input type="text" v-model="newTodo" class="mb-4 form-control" id="inputtodo" placeholder="Enter ToDo">
  <button v-on:click="addTodo" type="button" class="mb-4 btn btn-primary btn-lg btn-block">Add</button>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.id" class="">
    <div class="mb-2 row">
      <div class="col-11"  @dblclick="test(todo)" v-if="todo.seen">{{todo.title}}</div>
      <input @dblclick="test(todo)" type="text" v-if="!todo.seen" v-model="todo.title" class="col-11 form-control" id="inputtodo" >
      <div class="remove-item col-1 text-right hoverpointer" @click="removeTodo(index)">&times;</div>
      
    </div>
      </div>
  </div>
  </div>
  </div>

  `

})

Vue.component('navbar', {
  data: () => {
    return {
    isActive: false,
    links: [
      {
        name: 'Home',
        url: '#',
        id: 1,
      },
      {
        name: 'About',
        url: '#',
        id: 2,
      }
    ],
    }
  },
  methods: {
    toogle () {
        this.isActive = !this.isActive
    }
},
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue</a>
  <button v-on:click="toogle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div :class="[{ 'collapse': this.isActive }, 'navbar-collapse']" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" v-for="link in links" :key="link.id">
      <a class="nav-link" :href="link.url">{{ link.name }} <span class="sr-only">(current)</span></a>
      
      </li>
      
    </ul>
  </div>
</nav>`
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});