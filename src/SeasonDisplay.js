import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Typography, Box, makeStyles, createStyles } from '@material-ui/core'

import { red } from '@material-ui/core/colors'

const seasonConfig = {
  summer: {
    text: 'Lets hit the beact',
    iconName: 'beach_access'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'ac_unit'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summber' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const useStyles = makeStyles(() =>
  createStyles({
    seasonDisplay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    winter: {
      backgroundColor: 'aliceblue',
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?winter)'
    },
    summer: {
      backgroundColor: 'orange',
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?beach)'
    },
    materialIcons: {
      fontFamily: 'Material Icons'
    },
    iconRight: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      fontSize: '60px'
    },
    iconLeft: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      fontSize: '60px'
    }
  })
)

const SeasonDisplay = props => {
  const classes = useStyles()
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]
  return (
    <div
      style={{ backgroundImage: 'res.data' }}
      className={(classes.season, classes.seasonDisplay)}
    >
      <i className={`material-icons ${classes.iconRight}`}>{iconName}</i>
      <h1>{text}</h1>
      <i className={`material-icons ${classes.iconLeft}`}>{iconName}</i>
    </div>
  )
}

export default SeasonDisplay
