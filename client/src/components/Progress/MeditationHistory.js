import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const BackButton = styled(Button)`
  height: 100px;
  width: 100px;
`;
const BackImg = styled.img`
  height: 100px;
  width: 100px;
`;

const Title = styled.h1`
  text-align: center;
  margin-left: 30%;
`;
const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 3%;
  margin-top: 3%;
`;

const StyledTitle = styled.h1`
  color: #ffd882;
`;
const NotePaper = styled(Paper)`
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
  padding: 3%;
  background-color: #353c52;
`;

export default function MeditationHistory(props) {
  const [state, setState] = useState({
    meditations: [],
    baseDay: new Date()
  });
  const classes = useStyles();

  const handleChange = event => {
    setState(prev => ({ ...prev, baseDay: new Date(event.target.value) }));
  };

  // gets the user's meditation history
  useEffect(() => {
    axios
      .request({
        url: "/user_meditations",
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
        console.log(response);
        let results = response.data;
        setState(prev => ({ ...prev, meditations: results })); // if no meditations, then state.meditations is just an empty array
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.user.id]);

  // gets Sunday for a given day
  const getSunday = day => {
    let dayOfWeek = day.getDay();
    day.setDate(day.getDate() - dayOfWeek);
    return day;
  };

  // makes an object for the week to use as data for the graph
  let weekObject = {};
  for (let i = 0; i < 7; i++) {
    let weekday = state.baseDay;
    weekday.setDate(getSunday(state.baseDay).getDate() + i);
    weekObject[weekday.toDateString()] = {
      displayDate: weekday.toDateString().substr(4, 6),
      time: 0
    };
  }

  // builds an array objects of user's meditations: key is the date and value is the time
  let meditationArray = [];
  for (let meditation of state.meditations) {
    meditationArray.push({
      [meditation.created_at]: meditation.meditation.time_in_minutes
    });
  }

  // adds the user's meditations to the week object
  for (let meditation of meditationArray) {
    let formatMeditationDay = new Date(
      Object.keys(meditation)[0]
    ).toDateString();
    if (formatMeditationDay in weekObject) {
      weekObject[formatMeditationDay].time += Object.values(meditation)[0];
    }
  }

  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: Object.values(weekObject).map(
          ({ displayDate }) => displayDate
        ),
        title: {
          text: `Week of ${getSunday(state.baseDay).toDateString()}`,
          style: {
            fontSize: "1rem"
          }
        }
      },
      yaxis: {
        title: {
          text: "Minutes",
          style: {
            fontSize: "1rem"
          }
        },
        forceNiceScale: true
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
    let sunday = new Date();
    sunday.setDate(getSunday(sunday).getDate() - 7 * i);
    sundayArray.push(sunday);
  }

  const weekStartOptions = sundayArray.map(sunday => {
    return (
      <MenuItem key={sunday.toDateString()} value={sunday.toDateString()}>
        {sunday.toDateString()}
      </MenuItem>
    );
  });

  return (
    <main className="MeditationHistory">
      <StyledDiv>
        <BackButton
          onClick={() => {
            props.goToProgressPage("HOME");
          }}
        >
          <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
        </BackButton>
        <Title>Meditation Tracker</Title>
      </StyledDiv>

      <NotePaper elevation={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <StyledTitle>
                  Choose a week to see how many minutes you have meditated:{" "}
                </StyledTitle>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="week-picker">Week</InputLabel>
                  <Select
                    value={getSunday(state.baseDay).toDateString()}
                    onChange={handleChange}
                    color="black"
                  >
                    {weekStartOptions}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            {state.meditations.length > 0 ? (
              <Chart
                type="bar"
                options={chartData.options}
                series={chartData.series}
                width="100%"
              />
            ) : (
              <StyledTitle>
                Do a meditation to start tracking your progress!
              </StyledTitle>
            )}
          </Grid>
        </Grid>
      </NotePaper>
    </main>
  );
}
