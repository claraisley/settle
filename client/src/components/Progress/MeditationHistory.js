import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MeditationHistory(props) {
  const [state, setState] = useState({
    meditations: [],
    baseDay: new Date()
  })
  const classes = useStyles();
  // console.log("STATE BASE DAY", state.baseDay)

  const handleChange = event => {
    console.log("EVENT TARGET VALUE", event.target.value)
    setState(prev => ({ ...prev, baseDay: new Date(event.target.value) }))
  };

  // gets the user's meditation history
  useEffect(() => {
    axios.request({
      url: "http://localhost:3001/meditations",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true
      },
      params: {
        user_id: props.user.id
      },
      withCredentials: true
    })
      .then(response => {
        let results = response.data
        setState(prev => ({ ...prev, meditations: results })) // if no meditations, then state.meditations is just an empty array
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.user.id]);

  // gets Sunday for a given day
  const getSunday = (day) => {
    let dayOfWeek = day.getDay();
    day.setDate(day.getDate() - dayOfWeek);
    return day;
  };

  // makes an object for the week to use as data for the graph
  let weekObject = {}
  for (let i = 0; i < 7; i++) {
    let weekday = new Date()
    weekday.setDate(getSunday(state.baseDay).getDate() + i)
    weekObject[weekday.toDateString()] = {
      displayDate: weekday.toDateString().substr(4, 6),
      time: 0
    }
  }

  // builds an array objects of user's meditations: key is the date and value is the time
  let meditationArray = [];
  for (let meditation of state.meditations) {
    meditationArray.push({ [meditation.created_at]: meditation.meditation.time_in_minutes })
  }


  // adds the user's meditations to the week object
  for (let meditation of meditationArray) {
    let formatMeditationDay = new Date(Object.keys(meditation)[0]).toDateString()
    if (formatMeditationDay in weekObject) {
      weekObject[formatMeditationDay].time += Object.values(meditation)[0]
    }
  }

  const chartData = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: Object.values(weekObject).map(({ displayDate }) => displayDate)
      }
    },
    series: [
      {
        name: "series-1",
        data: Object.values(weekObject).map(({ time }) => time)
      }
    ]
  };

  // creates array of the last 5 Sundays
  let sundayArray = [];
  for (let i = 0; i < 6; i++) {
    let sunday = new Date()
    sunday.setDate(getSunday(sunday).getDate() - 7 * i)
    sundayArray.push(sunday)
  }
  // console.log("week start array", sundayArray)

  const weekStartOptions = sundayArray.map(sunday => {
    return <MenuItem key={sunday.toDateString()} value={sunday.toDateString()}>{sunday.toDateString()}</MenuItem>
  })

  // console.log("value of select", getSunday(state.baseDay).toDateString())

  return (
    <main className="MeditationHistory">
      <h2>My Previous Meditations</h2>
      <span>This is how long you've meditated for the week of </span>
      <FormControl className={classes.formControl}>
        <InputLabel id="week-picker">Week</InputLabel>
        <Select
          value={getSunday(state.baseDay).toDateString()}
          onChange={handleChange}
        >
          {weekStartOptions}
        </Select>
      </FormControl>
      {state.meditations.length > 0 ?
        <Chart
          type="bar"
          options={chartData.options}
          series={chartData.series}
          width="500" /> : <p>Do a meditation to start tracking your progress!</p>
      }
    </main>
  )
}
