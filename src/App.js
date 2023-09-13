import { useState } from 'react';
import './App.css';

function App() {

//   const[firstName, setFirstName] = useState("");
//   const[lastName, setLastName] = useState("");

// function changeFirstNameHandler(event) {
//   setFirstName(event.target.value);
// }

// function changeLastNameHandler(event) {
//   setLastName(event.target.value);
// }

const [formData, setFormData] = useState(
  {
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isVisible:true,
    mode:"",
    favCar:""
  }
);

// console.log(formData)


// function changeHandler(event) {
//   setFormData(prevFormData => {
//     return {
//       ...prevFormData,
//       [event.target.name] : event.target.value
//     }
//   })
// }

function changeHandler(event) {
  const {name, value, type, checked} = event.target
  setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
        }
      })
}

function submitHandler(event){
  event.preventDefault();
  console.log(formData)

}

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='first name' onChange={changeHandler}
         name="firstName" value={formData.firstName}></input>

        <br/><br/>

        <input type='text' placeholder='last name' onChange={changeHandler}
         name="lastName" value={formData.lastName}></input>

        <br/><br/>

        <input type="email" placeholder='email' onChange={changeHandler}
         name='email' value={formData.email} />

        <br/><br/>

        <textarea placeholder='Enter Your Comments Here' onChange={changeHandler}
        name='comments' value={formData.comments} />

        <br/><br/>

        <input type='checkbox' onChange={changeHandler} name='isVisible'
         id='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible</label>

        <br/><br/>

        <fieldset>
          <legend>Mode:</legend>
          <input type='radio' onChange={changeHandler} name='mode'
          value='online-mode' id='online-mode' checked={formData.mode === "online-mode"} />
          <label htmlFor='online-mode'>Online-mode</label> 


          <input type='radio' onChange={changeHandler} name='mode'
          value='offline-mode' id='offline-mode' checked={formData.mode === "offline-mode"} />
          <label htmlFor='offline-mode'>Offline-mode</label>
        </fieldset>

        <label htmlFor='favCar'>Tell me your fav car </label>

        <select onChange={changeHandler} name='favCar' id='favCar' value={formData.favCar}>
          <option value='scorpio'>Scorpio</option>
          <option value='fortuner'>fortuner</option>
          <option value='Thar'>Thar</option>
          <option value='Legender'>Legender</option>
          <option value='Defender'>Defender</option>
          
        </select>

        <br/><br/>
       
        {/* <input type='submit' value='submit' /> */}

        <button>Submit</button>
        

      </form>
    </div>
  );
}

export default App;
