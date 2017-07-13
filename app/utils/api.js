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

//TODO add petType to url

module.exports = {
  getPets: function (props) {
    console.log('$$$$$ getPets api.js props:', props);


    let location = `location=${props.selectedLocation}`

    let petType = '&animal='
    if(props.selectedPetType && props.selectedPetType !== 'all'){
       petType += props.selectedPetType
    }

    let petAge = `&age=`
    if(props.selectedAge && props.selectedAge !== 'all'){
      petAge += props.selectedAge
    }

    let petSex = `&sex=`
    if(props.selectedSex && props.selectedSex !== 'all'){
      petSex += props.selectedSex
    }

    let url = `${baseURL}pets?${location}${petType}${petAge}${petSex}`
    var encodedURI = window.encodeURI(url);

    console.log('getPets url', url);
    return axios.get(encodedURI) // returns promise
      .then(function (response) {
        console.log('getPets response.data.items',response.data);
        return response.data;
      });
  }
};

// "animal=smallfurry&breed=Hamster&size=M&location=98101&sex=&age=young"
