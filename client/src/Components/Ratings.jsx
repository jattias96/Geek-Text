import React from 'react'
import { Rating } from 'semantic-ui-react'
import { Container, Button, Typography, TextField } from '@material-ui/core';

const rating = () => (
  <Rating icon='star' defaultRating={0} maxRating={5} size='huge' />
)

export default function Ratings() {return(
    <Container style={{ margin: 20 }}>
    <Typography variant="h1" component="h2" gutterBottom>
        Reviews!
      </Typography>
    <Typography variant="h3" component="h3" gutterBottom>
    Place a rating:
      </Typography>
   <div><Rating icon='star' defaultRating={0} maxRating={5} size='huge' /></div>  <div>
   <Typography variant="h3" component="h3" gutterBottom>
    Place a comment:
      </Typography>
      <TextField
          id="outlined-textarea"
          placeholder="Leave your review here."
          multiline
          variant="outlined"
          rows={5}
          style = {{
            width: 800,
          }}
        />
</div>

<div>
<Button 
  variant="contained" 
  color="primary"
  style = {{
    margin_left: 300
}}
>
 Submit 
</Button>
</div>

  </Container>

);
}