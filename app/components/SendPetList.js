var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import SelectionFilter from './SelectionFilter';
import PetPreview from './PetPreview';
import { Redirect } from 'react-router';
import PetGrid from './PetGrid';

class SendPetList extends React.Component {
  constructor(props) {
    console.log('sendPetList props', props);
    super();
    this.state = {
      // selectedPetType: 'all',
      // selectedLocation: '',
      // locationSelected: false,
      // // selectedBreed: null,
      // selectedAge: 'all',
      // selectedSex: 'all',
      // selectedSize: 'all',
      redirect: false,
      userId: props.location.state.userId,
      savedPets: props.location.state.savedPets,
      petListId: props.location.state.petListId,
      pets: null
    };
    this.getPetList = this.getPetList.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);

    this.onUpdatePetList = this.onUpdatePetList.bind(this);
  }
  componentDidMount(props){
    // const savedPets = this.state.savedPets;
    let savedPets = []
    let petObject = {}

    const pets = this.state.savedPets;
    const userId = this.state.userId;
    const petListId = this.state.petListId;
    const petListData = {userId, petListId, savedPets};

    for(var propName in pets) {
        if(pets.hasOwnProperty(propName)) {
          console.log('pets:',pets);
          console.log('propName:', propName);
            var pet = pets[propName];

            for(var key in pet){

              if(pet.hasOwnProperty(key)){

                savedPets.push({isFav: pet[`${key}`]['isFav'], pet_id: pet[`${key}`]['pet_id'] })
              }
            }
        }
    }
    console.log('savedPets:', savedPets);
    this.getPetList(petListData)
  }

  handleUserChange(event) {

    var value = event.target.value;

    var newState = Object.assign({}, this.state, { selectedLocation: value })

    this.setState(function(){return newState})
  };
  handleUserSubmit(event) {

    event.preventDefault();

    var newState = Object.assign({}, this.state, { locationSelected: true })

    this.setState(function(){return newState})

    this.updatePetType(this.state);
  }
  onUpdatePetList(event){
    event.preventDefault();


    const pets = this.state.savedPets;
    const savedPets = pets.map((pet)=>{
      alert('onUpdatePetList')
        console.log(pet);

    })


    const userId = this.state.userId;
    const petListId = this.state.petListid;
    const petListData = { savedPets, userId, petListId};

    // api.updatePetList(petListData)
    // .then((response) =>{
    //   this.setState(function(){
    //     return {
    //       savedPets: response.savedPets,
    //       petListId: response.petListId,
    //       redirect: true,
    //     }
    //   })
    // })
  }
  getPetList(props){
    // QUESTION componentDidUpdate() inplace of updatePetType?
    api.getPetList(props)
    .then((response) => {
      console.log('response:', response);
      this.setState(function(){
        return {
          pets: response.savedPets
        }
      })
    })}
  render(){
    console.log('SENDPETLIST.STATE:', this.state);
    const from = `/petlist`
    const { redirect } = this.state
    return (
      // TODO spread op.
        <div>
          { this.state.pets ? <PetGrid pets={this.state.pets}
            onChange={this.handleSaveToBoard}
            onFavChange={this.handleFav}/> : null}


          {(this.state.locationSelected && !this.state.pets) &&
            <Loading text='Searching' speed={300}/> }
          { redirect && (
            <Redirect to={`${from}/${this.state.petListId}`}/>
          )}
      </div>
    )
  }
}


module.exports = SendPetList;
