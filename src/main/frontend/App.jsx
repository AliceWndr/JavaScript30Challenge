import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'semantic-ui-react'

ReactDOM.render(
    <Button basic content="Click Me!" color="teal" icon="heart" labelPosition="right"/>,
    document.getElementById("app")
);