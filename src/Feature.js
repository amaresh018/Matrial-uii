import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Feature = () => {
  return (
    <div>
      <Card>
        <CardContent>
            <Typography>Title of a longer feature blog post</Typography>
            <Typography variant="h5">Title of a longer feature blog post Title of a longer feature blog post</Typography>
        </CardContent>
        <CardActions>
            <Button
            variant='contained'
            color='primary'
            >Click me</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Feature
