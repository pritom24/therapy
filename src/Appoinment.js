import React, { useState, useCallback, Component } from "react";

import Axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import "./appointment.css";

const Appoinment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };
  // const url = "https://www.site.asrafulhoque.com/set-appoint";
  // const [data, setData] = useState(new Date(),  {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   date: "",
  //   time: "",

  // });

  // const submit =(e)=> {
  //   e.preventDeafault();
  //   Axios.post(url, {
  //     name: data.name,
  //     email: data.email,
  //     phone: data.phone,
  //     date: selectDate,
  //     time: selectDate,
  //   }).then((res) => {
  //     console.log(res.data);
  //    return res.data
  //   });
  // }

  // const handle= (e)=> {
  //   const newData = { ...data };
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);

  //   console.log(newData);
  // }
  function saveAppointment(e) {
    e.preventDefault();
    console.log({ name, email, phone, date });
    let data = { name, email, phone, date };
    fetch("https://www.site.asrafulhoque.com/set-appoint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "applicaiton/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("result", res);
    });
  }
  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title" id="modalRequestLabel">
            Make an Appointment
          </h5>
        </div>
        <div className="modal-body">
          <form onSubmit={saveAppointment}>
            <div className="form-group">
              <label for="appointment_name" className="text-black">
                Full Name
              </label>

              <input
                onChange={(e) => {
                  setName(e.target.value, e.preventDefault());
                }}
                type="text"
                className="form-control"
                name="appointment_name"
                id="name"
                value={name}
                placeholder="Full Name"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => {
                  setEmail(e.target.value, e.preventDefault());
                }}
                type="text"
                className="form-control"
                id="email"
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => {
                  setPhone(e.target.value, e.preventDefault());
                }}
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                value={phone}
                placeholder="Input Phone Number"
                required=""
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      onChange={handleDateChange}
                      format="dd/MM/yyy"
                      margin="normal"
                      id="date"
                      label-="Date picker"
                      value={date}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time"
                      label-="Date picker"
                      value={date}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
            </div>
            <div className="form-group float-right">
              <input
                type="submit"
                value="Make an Appointment"
                className="btn btn-primary sub-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
