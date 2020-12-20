import React from "react"
import ReactDOM from "react-dom"

const App: React.FC = () => {
  console.log("hello?")
  return <div>App will go here.</div>
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById("root"))
}
