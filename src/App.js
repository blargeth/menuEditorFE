import './App.css';
import Button from './components/button';
import axios from 'axios';

let APIgetRequest = () => {
  console.log('running the api request!!')

  return axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=potato`, {
    headers: {
        'x-app-id': 'a68bfb58',
        'x-app-key': '873ad07273ee8534c33943bf98f26e23',
      }
    })
    .then(result => {
      console.log(result)
      return result})
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello! I'm the test app!
          <Button clickFunc={APIgetRequest}/>
        </p>

      </header>
    </div>
  );
}

export default App;