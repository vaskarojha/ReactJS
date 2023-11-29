// const counterButton = document.getElementById('counterButton')
// const counterDisplay = document.getElementById('counterDiv')

// console.log(counterButton.innerText)
// console.log(counterDisplay.innerText)

// let incrementCounter = 0

// counterButton.addEventListener('click',() =>{
//     incrementCounter ++
//     counterDisplay.innerText = incrementCounter

// })

// console.log(React)
// console.log(ReactDOM)

const reactContentRoot = document.getElementById('root')
// ReactDOM.render('Hello', reactContentRoot )

// const myFirstElement = React.createElement('ul', null, 
//     [React.createElement('li', null, "Item01"),
//     React.createElement('li', null, "Item02")])
// ReactDOM.render(myFirstElement, reactContentRoot)

// const myItem = "Item03"
// const myJXSElement = (
//     <ul>
//         <li>Item011</li>
//         <li>Item02</li>
//         <li>{myItem}</li>
//     </ul>
// )
// ReactDOM.render(myJXSElement, reactContentRoot)

const App = ()=>{
    const myItem = "Item033"
    return (
    <ul>
        <li>Item011</li>
        <li>Item02</li>
        <li>{myItem}</li>
    </ul>
    )
}
ReactDOM.render(<App />, reactContentRoot)