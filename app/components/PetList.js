var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import SelectionFilter from './SelectionFilter';
import PetPreview from './PetPreview'

function PetGrid (props){
  // TODO petPreview abstraction
  return (
    <ul className='pet-list'>

      {props.pets.map(function (pet, index){

        return <PetPreview name={pet.name}
          photo={pet.media ? pet.media.photos.photo[2]['$t'] : null }
          // breed={pet.breed}
          sex={pet.sex}
          age={pet.age}
          key={pet.api_id}
          id={pet.api_id}
          onChange={props.onChange}
          onFavChange={props.onFavChange}
          />
         })}
    </ul>
        // if (pet.media.photos){
        //   return (
        //     <li key={index} className='pet-list-item'>
        //       <ul className='space-list-items'>
        //         <li>
        //           {/* {pet.media.photos.photo.map(function(pic){
        //             console.log('index:',index);
        //             console.log('pic:', pic['$t'])}
        //           )} */}
        //
        //
        //           <img
        //             className='avatar'
        //             // TODO fix photo error
        //             src={pet.media.photos.photo[2]['$t'] ? pet.media.photos.photo[2]['$t'] : null}
        //             alt={'Avatar for' + pet.name} />
        //         </li>
        //         <li>@{pet.name}</li>
        //         <li>
        //           <a href={pet.shelter_url}>{pet.shelterName}</a>
        //         </li>
        //         <li>{pet.type['$t']}</li>
        //         <li>{pet.city}</li>
        //       </ul>
        //     </li>
        //   )}}
        // )
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
      // selectedBreed: null,
      selectedAge: 'all',
      selectedSex: 'all',
      selectedSize: 'all',
      user: 100,
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
  }
  handleFav(event){
    console.log('handleFav event.target.name:', event.target.name);
    console.log('handleFav event.target.value:', event.target.value);

    // var id = event.target.id
    // var array = this.state.board.pets
    //
    // console.log('handleFav array:', array);
    // var inBoard = false;
    // console.log('ARRAY.LENGTH', array.length);
    // console.log('array[][id]', array[0][id]);
    // if( array.length > 0 ){
    //   array.map((pet)=>{
    //     if(pet[id]){
    //       inBoard = true
    //       return inBoard };
    //   inBoard = false
    //   return inBoard
    // })}
    //
    // if (inBoard === true){
    // if(event.target.name == 'isFav' && event.target.value == 'on'){
    //   // key = "" + id
    //   array.push({[id]: {isSaved: 'true', isFav: 'false'}})
    //   }
    //   console.log('array:',array);
    //
    //   // console.log(array.includes(array[id]))
    //
    //   // var newState = Object.assign({}, this.state.board.pets, this.state.board.pets: array)
    //
    //   this.forceUpdate()}
  }
  handleSaveToBoard(event){
    console.log('handleSaveToBoard event:', event.target);
    console.log('handleSaveToBoard event.target.name', event.target.name);
    console.log('handleSaveToBoard event.target.value', event.target.value);

    var id = event.target.id
    // var array = this.state.board['pets']
    var savedPets = this.state.savedPets
    // console.log(`${board['pets']}:`, board);
    var saved = false;
    console.log('pets Object length', savedPets.length);

    if( savedPets.length > 0 ){
      savedPets.map((pet)=>{
        if(pet[id]){
          saved = true
          return saved };
          return saved
        }
      )
    }

    console.log('saved:', saved);
    var newState = {}

    if (!saved){
      if(event.target.name == 'isSaved' && event.target.value == 'on'){

        savedPets.push({[id]: {isSaved: 'true', isFav: 'false'}})
        // newState = Object.assign({}, this.state, { savedPets[id]: {isSaved: 'true', isFav: 'false'}}})
      }
      this.forceUpdate()
    }
  }

  // componentDidMount(props){
  //   console.log('=== PetList componentDidMount state:', this.state);
  //   console.log('=== PetList componentDidMount this.props:', this.props);
  // }
  handleLocationChange(event) {

    var value = event.target.value;

    var newState = Object.assign({}, this.state, { selectedLocation: value })

    this.setState(function(){return newState})
  };
  handleLocationSubmit(event) {

    event.preventDefault();

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
  // componentDidUpdate(prevProps, prevState){
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  //   // api.getPets(props)
  //   // .then((pets) => {
  //   //   this.setState(function(){
  //   //     return {
  //   //       pets: pets
  //   //     }
  //   //   })
  //   // })
  // }
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
    console.log('THIS.STATE', this.state);
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
          onSelectSex={this.handleSelectSex}/>

          { this.state.pets ? <PetGrid pets={this.state.pets}
                                      onChange={this.handleSaveToBoard}
                                      onFavChange={this.handleFav}/> : null}

          {/*  TODO fix loading bug */}
          {(this.state.selectedLocation.length === 5 && !this.state.pets) &&
             <Loading text='Searching' speed={300}/> }
      </div>
    )
  }
}


module.exports = PetList;
