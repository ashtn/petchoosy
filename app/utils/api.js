var axios = require('axios');

var baseURL = "http://localhost:3000/";


// TODO
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
    console.log('$$$$$ getPets api.js props:', props);


    let location = `location=${props.selectedLocation}`

    let petType = '&animal='
    if(props.selectedPetType !== 'all'){
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

    let petSize = `&size=`
    if(props.selectedSize && props.selectedSize !== 'all'){
      petSize += props.selectedSize
    }

    let url = `${baseURL}pets?${location}${petType}${petAge}${petSex}${petSize}`

    var encodedURI = window.encodeURI(url);

    console.log('getPets url', url);
    return axios.get(encodedURI) // returns promise
      .then(function (response) {
        console.log('getPets response.data.items',response.data);
        return response.data;
      });
  },
  getLogin: function(formData) {

    console.log(formData);
    return axios.post(`${baseURL}login`, {
      formData
    }) // returns promise
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  createPetList: function(petListData){
    console.log(petListData);
    return axios.post(`${baseURL}pet_list/`, {
      petListData
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  getPetList: function(petListData){

    console.log(petListData);
    alert('getPetList')
    let url = `${baseURL}pet_list/${petListData.petListId}`

    var encodedURI = window.encodeURI(url);
    return axios.get(encodedURI, {petListData})
    .then(function (response){
      return response.data
    })
  }
};
