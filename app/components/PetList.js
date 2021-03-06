var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import SelectionFilter from './SelectionFilter';
import PetPreview from './PetPreview';
import { Redirect } from 'react-router';

function PetGrid (props){
  return (
    // <ul className='pet-list'>
      <div className="py-5 text-center">
        <div className="container">
          <div className="row">
            { props.pets.map(function (pet, index){

              return <PetPreview name={pet.name}
                photo={ pet.media.photos ? pet.media.photos.photo[2]['$t'] : 'app/assets/placeholder.png' }
                // breed={pet.breed}
                sex={pet.sex}
                age={pet.age}
                key={pet.api_id}
                id={pet.api_id}
                onChange={props.onChange}
                onFavChange={props.onFavChange} />
            })}
          </div>
        </div>
      </div>

  )
}

PetGrid.propTypes = {
  pets: PropTypes.array.isRequired,
}

class PetList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedPetType: 'all',
      selectedLocation: '',
      locationSelected: false,
      // selectedBreed: null,
      selectedAge: 'all',
      selectedSex: 'all',
      selectedSize: 'all',
      redirect: false,
      userId: props.location.state.userId,
      savedPets: []
      // pets: null,
    };
    this.updatePetType = this.updatePetType.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
    this.handleSelectAge = this.handleSelectAge.bind(this);
    this.handleSelectPetType = this.handleSelectPetType.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleSelectSex = this.handleSelectSex.bind(this);
    this.handleSaveToBoard = this.handleSaveToBoard.bind(this);
    this.handleFav = this.handleFav.bind(this);
    this.onCreatePetList = this.onCreatePetList.bind(this);
  }
  // componentDidMount(props){
  //   console.log('=== PetList componentDidMount state:', this.state);
  //   console.log('=== PetList componentDidMount this.props:', this.props);
  // }
  handleFav(event){
    // TODO fix bug
    console.log('handleFav event.target.name:', event.target.name);
    console.log('handleFav event.target.value:', event.target.value);

    var id = event.target.id;
    var savedPets = this.state.savedPets;
    var saved = false;

    if( savedPets.length > 0 ){
      savedPets.map((pet)=>{
        if(pet[id]){
          pet[id].isFav = true
      }}
    )}

    var newState = Object.assign({}, this.state, savedPets);
    this.setState(()=>{newState});
  }
  handleSaveToBoard(event){

    console.log('handleSaveToBoard event.target.name', event.target.name);
    console.log('handleSaveToBoard event.target.value', event.target.value);

    var id = event.target.id;
    var savedPets = this.state.savedPets;
    var saved = false;


    if( savedPets.length > 0 ){
      savedPets.map((pet)=>{
        if(pet[id]){
          saved = true
          return saved };
        }
      )
    }

    if (!saved){
      if(event.target.name == 'isSaved' && event.target.value == 'on'){

        savedPets.push({[id]: { pet_id: id, isSaved: true, isFav: false}});
      }
      var newState = Object.assign({}, this.state, {savedPets});
      this.setState(()=>{newState});
    }
  }
  handleLocationChange(event) {

    var value = event.target.value;

    var newState = Object.assign({}, this.state, { selectedLocation: value })

    this.setState(function(){return newState})
  };
  handleLocationSubmit(event) {

    event.preventDefault();

    var newState = Object.assign({}, this.state, { locationSelected: true })

    this.setState(function(){return newState})

    this.updatePetType(this.state);
  }
  handleSelectAge(event){

    var value = event.target.value;

    var newState = Object.assign({}, this.state, {selectedAge: value})

    this.setState(newState, this.updatePetType(newState));
  }
  handleSelectSize(event){
    var value = event.target.value

    var newState = Object.assign({}, this.state, {selectedSize: value})

    this.setState(newState, this.updatePetType(newState));
  }
  handleSelectSex(event){

    var value = event.target.value

    var newState = Object.assign({},this.state,{selectedSex: value})

    this.setState(newState, this.updatePetType(newState));
  }
  handleSelectPetType(event){

    var value = event.target.value

    var newState = Object.assign({}, this.state, {selectedPetType: value})

    this.setState(newState, () =>{this.updatePetType(newState)})
  }
  onCreatePetList(event){
    event.preventDefault();
    console.log(this.state.savedPets);
    console.log(this.state.userId);

    let savedPets = []
    let petObject = {}

    const pets = this.state.savedPets;
    const userId = this.state.userId;
    const petListData = {userId, savedPets};

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

    api.createPetList(petListData)
    .then((response) =>{
      this.setState(function(){
        return {
          savedPets: response.savedPets,
          petListId: response.petListId,
          redirect: true,
        }
      })
    })
  }
  updatePetType(props){
    // QUESTION componentDidUpdate() inplace of updatePetType?
    api.getPets(props)
    .then((pets) => {
      this.setState(function(){
        return {
          pets: pets
        }
      })
    })}
  render(){
    console.log('PETLIST.STATE:', this.state);
    const path = `/petlist`
    const { redirect } = this.state
    if(redirect){
        return <Redirect to={{      pathname:`${path}/${this.state.petListId}`,
          state: {savedPets: this.state.savedPets, userId: this.state.userId, petListId: this.state.petListId}
        }}/>}

    return (
      // TODO spread op.
        <div>
          <SelectionFilter selectedLocation={this.state.selectedLocation}
            selectedPetType={this.state.selectedPetType}
            selectedAge={this.state.selectedAge}
            selectedSex={this.state.selectedSex}
            selectedSize={this.state.selectedSize}
            onLocationChange={this.handleLocationChange}
            onLocationSubmit ={this.handleLocationSubmit}
            onSelectPetType={this.handleSelectPetType}
            onSelectAge={this.handleSelectAge}
            onSelectSize={this.handleSelectSize}
            onSelectSex={this.handleSelectSex}
            locationSelected={this.state.locationSelected}
            savedPets={this.state.savedPets}
            onSubmit={this.onCreatePetList}/>

          { this.state.pets ? <PetGrid pets={this.state.pets}
            onChange={this.handleSaveToBoard}
            onFavChange={this.handleFav}/> : null}


          {(this.state.locationSelected && !this.state.pets) &&
            <Loading text='Searching' speed={300}/> }

        </div>
      )
  }
}


module.exports = PetList;
