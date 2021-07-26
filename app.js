const App = {
    data () {
        return {
            appTitle: "Список заметок",
            placeholder: "Введите текст",
            inputValue: "",
            notes: ['Заметка 1', 'Заметка 2'],

        }
    },
    methods: {
        inputListener (e) {
            this.inputValue = e.target.value
        },
        addNewNote () {
            this.notes.push(this.inputValue)
            this.inputValue = '';
        },
        itemDelete (e, idx) {
            this.notes.splice(idx, 1)
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')