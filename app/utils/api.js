var axios = require('axios');

var baseURL = "http://localhost:3000/";



// function getBreeds (prop) {
//   return axios.get( url ) //+ params)
//     .then(function (breed) {
//       return breed.data;
//     });
// }




function handleError (error) {
  console.warn(error);
  return null;
}


module.exports = {
  getPets: function (props) {
    console.log('getPets api.js props:', props);
    let url = `${baseURL}pets?location=${props}`
    console.log('getPets url', url);
    var encodedURI = window.encodeURI(url);

    return axios.get(encodedURI) // returns promise
      .then(function (response) {
        console.log('getPets response.data.items',response.data);
        return response.data;
      });
  }
};
