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

  const handleChange = event => {
    console.log("EVENT TARGET VALUE", event.target.value)
    setState(prev => ({ ...prev, baseDay: new Date(event.target.value) }))
  };

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

  // gets Sunday as the start of week for the graph
  const getSunday = (inputDay) => {
    let dayOfWeek = inputDay.getDay()
    let startOfWeek = new Date();
    startOfWeek.setDate(inputDay.getDate() - dayOfWeek)
    return startOfWeek
  }

  // makes an array for the week, key is the actual date object, value is a string to put in the graph
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

  // console.log("meditation array for user", meditationArray)
  // needs to result in an array that's just the minutes for each day in weekobject
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
  let weekStartArray = [];
  for (let i = 0; i < 6; i++) {
    let weekStart = new Date()
    weekStart.setDate(getSunday(weekStart).getDate() - 7 * i)
    weekStartArray.push(weekStart)
  }
  console.log("week start array", weekStartArray)

  const weekStartOptions = weekStartArray.map(day => {
    return <MenuItem key={day.toDateString()} value={day.toDateString()}>{day.toDateString()}</MenuItem>
  })

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
