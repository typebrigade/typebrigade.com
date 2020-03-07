import React, { Fragment } from "react"
import "./Schedule.css"
import LinkDuo from "./LinkDuo"

const Schedule = props => {
  return (
    <table class="Schedule">
      {props.data.map(line => {
        let classes = `Schedule-line ${
          line.break ? "Schedule-line--break" : ""
        }`
        let label = (
          <Fragment>
            {line.break ? line.name : <strong>{line.name}</strong>}

            {line.team ? (
              <div className="Schedule-team">{line.team}</div>
            ) : null}
          </Fragment>
        )
        if (line.url) {
          label = <LinkDuo to={line.url}>{label}</LinkDuo>
        }

        return (
          <tr>
            <td className={classes}>
              <span class="">
                {line.start}
                {line.end ? <Fragment>—{line.end}</Fragment> : ""}
              </span>
            </td>
            <td className={classes}>{label}</td>
          </tr>
        )
      })}
    </table>
  )
}

Schedule.defaultProps = {
  data: [
    {
      start: "09:30",
      end: "10:00",
      name: "Registration & Coffee",
      break: true,
    },
    { start: "10:30", end: "10:40", name: "Welcome" },
    {
      start: "10:40",
      end: "11:20",
      name: "Bianca Berning",
      team: "Creative Director, Dalton Maag",
      url: "https://daltonmaag.com",
    },
    {
      start: "11:20",
      end: "11:50",
      name: "Alvin Kwan & Vince Lo",
      team: "Co-founders, Studio Faculty",
      url: "https://studiofaculty.com/",
    },
    { start: "11:50", end: "01:30", name: "Lunch on your own", break: true },
    {
      start: "01:30",
      end: "02:00",
      name: "Angela Bains & Chas Bains",
      team: "Co-founders, TransformExp",
      url: "https://transformexp.com/",
    },
    {
      start: "02:00",
      end: "02:30",
      name: "Kisyuu",
      team: "Japanese Calligraphy performance",
      url: "http://www.kisyuu-calligraphy.com/",
    },
    { start: "02:30", end: "03:00", name: "Coffee break", break: true },
    {
      start: "03:00",
      end: "03:30",
      name: "Phoebe Glasfurd",
      team: "Co-founder, Glasfurd & Walker",
      url: "https://glasfurdandwalker.com",
    },
    {
      start: "03:30",
      end: "04:30",
      name: "Paul Barnes",
      team: "Co-founder, Commercial Type & Commercial Classics",
      url: "https://commercialclassics.com/",
    },
  ],
}

export default Schedule
