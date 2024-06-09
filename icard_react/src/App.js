import React from 'react'
import {Navigation} from "./routes"
import { Button} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';

import {ClientLayout} from "./layouts"

export default function App() {
  return (
    <div>
      <Navigation />
      <Button primary>Click me</Button>
    </div>
  )
}
