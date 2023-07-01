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
      <Typography variant="h6" component="h2">
        {props.item.name}
      </Typography>
      <Button variant="contained" onClick={NewVoiting}>
        {props.item.voice}
      </Button>
    </div>
  );
};

export default Voice;
