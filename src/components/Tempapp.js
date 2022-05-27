import React, { useEffect, useState } from "react";
import "./css/style.css";
import { Form, FormControl } from "react-bootstrap";
// import background from "./clouds.jpg";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=939239178aa125da504a7639ca1f4d00`
      const response = await fetch(url);
      const resJson = await response.json()
      // console.log(resJson);
      setCity(resJson.main);

    };
    fetchApi();
  }, [search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <Form className="d-flex">
            <FormControl
              type="search"
              value={search}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => { setSearch(event.target.value) }}
            />
            {/* <input
              type="search"
              value={search}
              className="inputFeild"
              // onChange={(event) => { setSearch(event.target.value) }}
               /> */}
            {/* <Button variant="outline-primary">Search</Button> */}
          </Form>
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
              </h2>
              <h1 className="temp">
                {city.temp}°Cel
              </h1>
              <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
            </div>
            <div className="wave - one"></div>
            <div className="wave - two"></div>
            <div className="wave - three"></div>
          </div>
        )}
      </div>
    </>
  );
}
export default Tempapp;