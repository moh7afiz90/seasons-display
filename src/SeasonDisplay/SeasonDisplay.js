import React from 'react'

import useStyles from './useStyles'

const seasonConfig = {
  summer: {
    text: 'Lets hit the beact',
    iconName: 'beach_access',
    bgImage: 'https://source.unsplash.com/1600x900/?beach'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'ac_unit',
    bgImage: 'https://source.unsplash.com/1600x900/?winter'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summber' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = props => {
  const classes = useStyles()
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName, bgImage } = seasonConfig[season]
  return (
    <div
      style={{
        backgroundImage: `url( ${bgImage} )`,
        height: '100%',
        width: '100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className={(classes.season, classes.seasonDisplay)}>
        <i
          className={`material-icons ${(classes.iconStyle, classes.iconRight)}`}
        >
          {iconName}
        </i>
        <div></div>
        <h1 className={classes.text}>{text}</h1>
        <i
          className={`material-icons ${(classes.iconiconStyle,
          classes.iconLeft)}`}
        >
          {iconName}
        </i>
      </div>
    </div>
  )
}

export default SeasonDisplay
