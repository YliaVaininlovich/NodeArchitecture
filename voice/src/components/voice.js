import "./voice.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Voice = (props) => {
  const NewVoiting = () => {
    props.cbNewVoiting(props.keyID);
  };

  return (
    <div class="container">
      <Button variant="contained" onClick={NewVoiting}>
        {props.item.name}
      </Button>
      <Typography variant="h6" component="h2">
        {props.item.voice}
      </Typography>
    </div>
  );
};

export default Voice;
