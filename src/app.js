import tpl from './info.tpl'

const App = document.getElementById('app')

const info = tpl({
    name: '战三',
    age: 12
})


App.innerHTML = info
console.log('info', info)