<template>
  <div class="app">
    <form class="form" @submit="addTodo">
      <input v-model="inputVal" class="input form__input">
      <button class="btn form-submit-btn" type="submit">添加</button>
    </form>
    <transition-group tag="ol" name="list" class="todo-list">
      <li
        v-for="(todo, index) in filteredTodos"
        :key="index"
        class="todo-list__item"
        :class="{ complete: todo.complete }"
      >
        <span>{{ todo.text }}</span>
        <div class="right-handle-btn">
          <el-button v-show="!todo.complete" type="success" icon="el-icon-check" circle @click="toggleTodo(todo)" />
          <el-button v-show="todo.complete" type="success" icon="el-icon-refresh-left" circle @click="toggleTodo(todo)" />
          <el-button type="danger" icon="el-icon-close" circle @click="deleteTodo(index)" />
        </div>
      </li>
    </transition-group>
    <div class="filters">
      <button
        class="btn filters__btn filters__btn--all"
        @click="filterTodos('all')"
      >
        全部
      </button>
      <button
        class="btn filters__btn filters__btn--complete"
        @click="filterTodos('complete')"
      >
        已完成
      </button>
      <button
        class="btn filters__btn filters__btn--incomplete"
        @click="filterTodos('incomplete')"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
var filters = {
  all: function(todos) {
    return todos
  },
  complete: function(todos) {
    return todos.filter(function(todo) {
      return todo.complete
    })
  },
  incomplete: function(todos) {
    return todos.filter(function(todo) {
      return !todo.complete
    })
  }
}

var STORAGE_KEY = 'vue-js-todo-P7oZi9sL'
var todoStorage = {
  fetch: function() {
    // 在HTML5新加入了一个localStorage特性，这个特性主要是用来作为本地存储来使用的，
    // 解决了cookie存储空间不足的问题(cookie中每条cookie的存储空间为4k)
    // localStorage中一般浏览器支持的是5M大小，这个在不同的浏览器中localStorage会有所不同
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    if (JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]').length === 0) {
      todos.push({
        text: '今天你学习了吗~',
        complete: true
      },
      {
        text: '月入过万',
        complete: false
      },
      {
        text: '脱单',
        complete: false
      },
      {
        text: '有房有车',
        complete: true
      })
    }
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default {
  data() {
    return {
      inputVal: '',
      todos: todoStorage.fetch(),
      visibility: 'all',
      visible: true
    }
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos)
    }
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos)
      }
    }
  },
  methods: {
    addTodo: function(e) {
      e.preventDefault()
      if (this.inputVal) {
        this.todos.push({
          text: this.inputVal,
          complete: false
        })
      }
      this.inputVal = ''
    },
    toggleTodo: function(todo) {
      todo.complete = !todo.complete
    },
    filterTodos: function(filter) {
      this.visibility = filter
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1)
      this.visible = false
    }
  }
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

button {
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
}
button:focus {
  outline: none;
}
button:hover {
  cursor: pointer;
}

.app {
  min-height: 50vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: justify;
          justify-content: space-between;
  border-radius: 1em;
}

.btn {
  font-size: 14px;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  border: 1px solid;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  border: #4fc08d 1px solid;
  -webkit-transition: 250ms ease-out;
  transition: 250ms ease-out;
}
.form-submit-btn{
 width: 30%;
}
.btn:hover, .btn:focus {
  color: #fff;
  background: #4fc08d;
}

.form {
  width: 100%;
  padding: 1.5rem 1rem 0 1rem;
  display: -webkit-box;
  display: flex;
}
.form__input {
  width: 100%;
  font-size: 14px;
  margin: 0 .5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  background: none;
  font-family: "Source Sans Pro", sans-serif;
  border: #e3e3e3 1px solid;
  -webkit-transition: border 250ms ease-out;
  transition: border 250ms ease-out;
}
.form__input:focus {
  border: #4fc08d 1px solid;
  outline: none;
}

.todo-list {
  width: 100%;
  padding: 0 1rem;
  -webkit-box-flex: 1;
          flex: 1;
}
.todo-list__item {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
          align-items: center;
  padding: .5em;
  margin-bottom: .5em;
  border-radius: 3px;
  -webkit-transition: 200ms;
  transition: 200ms;
  color: #4fc08d;
}
.todo-list__item:last-child {
  margin-bottom: 0;
}
.todo-list__item.complete {
  color: grey;
}
.todo-list__item.complete span{
  text-decoration:line-through;
}
.todo-list__item.complete .todo-list__item-content:after {
  background: lightgreen;
}
.todo-list__item-content {
  position: relative;
}
.todo-list__item-content:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background: #4fc08d;
  -webkit-transition: 250ms ease-out;
  transition: 250ms ease-out;
  -webkit-transform-origin: center;
          transform-origin: center;
  -webkit-transform: scalex(0);
          transform: scalex(0);
}
.todo-list__item-content:hover:after, .todo-list__item-content:focus:after {
  -webkit-transform: scalex(1);
          transform: scalex(1);
}
.todo-list__item-remove {
  margin-left: .5em;
  background: none;
  border: 1px solid;
  color: inherit;
  padding: 0;
  line-height: 1;
  width: 2em;
  height: 2em;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  border-radius: 50%;
  font-size: 80%;
}

.filters {
  width: 100%;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  padding: 0 1rem 1.5rem 1rem;
}

.list-move,
.list-leave-active,
.list-enter-active {
  -webkit-transition: 500ms cubic-bezier(0.87, -0.41, 0.19, 1.44);
  transition: 500ms cubic-bezier(0.87, -0.41, 0.19, 1.44);
}

.list-enter,
.list-leave-active {
  -webkit-transform: translate(100%, 0);
          transform: translate(100%, 0);
  opacity: 0;
}

</style>
