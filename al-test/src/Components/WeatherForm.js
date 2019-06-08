import React, { useState } from 'react'; //para utilizar Hooks

function WeatherForm({searchData}){
//state del componente con hooks
//ventajas de utilizar Hooks: código más legible, en menos cantidad de código se puede realizar la app
//state: search y setState: setSearch
const [search, setSearch] = useState({
  // country : "",
  city : ""
})
// console.log(searchData)

const handleChange = e => {
  //cambiar el state
  setSearch({
    ...search,
    [e.target.name] : e.target.value
  });
  console.log(search) //el search es para ver el nuevo estado (ya que arriba lo utilizamos como nuestro 'state') 
}

  const consultWeather = e => {
    e.preventDefault();
    //toma los datos que el usuario está buscando y los pasa al componente principal
    searchData(search); //en vez de poner this.state.nombre_de_la_propiedad
  
  }


    return (
        <form
          onSubmit={consultWeather}
        >
          {/* <div className="input-field col s12">
            <input
              type= "text"
              name= "country"
              id="country"
              onChange={handleChange}
            />
            <label htmlFor="country">Country: </label>
          </div> */}

          <div className="input-field col s12 m6">
            <select onChange={handleChange} name="city">
              <option value="">Select a City</option>
              <option value="CL">Santiago</option>
              <option value="CH">Zurich</option>
              <option value="NZ">Auckland</option>
              <option value="AU">Sydney</option>
              <option value="UK">Londres</option>
              <option value="USA">Santiago</option>
            </select>
          </div>
          <div className="input-field col s12 m6">
            <input type="submit" className="waves-effect waves-light btn-large btn-block light-blue accent-4" value="Search"/>
          </div>
        </form>
    );
}

export default WeatherForm;