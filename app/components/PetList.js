var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import SelectionFilter from './SelectionFilter';
// var PetPreview = require('./PetPreview');
// referencing Battle.js
// referencing Popular

// TODO On InputLocation
// Render SectectPet Type

function PetGrid (props){
  // this can be petPreview abstraction

  return (
    <ul className='pet-list'>

      {console.log('PetGrid props:', props)}

      {props.pets.map(function (pet, index){
        return (
          <li key={pet.name} className='pet-list-item'>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={pet.media.photos.photo[2]['$t']}
                  alt={'Avatar for' + pet.name} />
              </li>
              <li>@{pet.name}</li>
              <li>
                <a href={pet.shelter_url}>{pet.shelterName}</a>
              </li>
              <li>{pet.type['$t']}</li>
              <li>{pet.city}</li>
            </ul>
          </li>
        )})}
    </ul>
  )
}

PetGrid.propTypes = {
  pets: PropTypes.array.isRequired,
}

class PetList extends React.Component {
  constructor(props) {
    console.log('=== PetList constructor props', props);
    super();
    this.state = {
      selectedAnimalType: null,
      selectedLocation: null,
      // selectedBreed: null,
      // selectedAge: null,
      // selectedSex: null,
      // selectedSize: null,
      // pets: null,
    };
    this.updatePetType = this.updatePetType.bind(this);
  }
  componentDidMount(props){
    console.log('=== PetList componentDidMount state:', this.state);
    console.log('=== PetList componentDidMount this.props:', this.props);
    this.updatePetType(this.state.selectedAnimalType);
  }
  updatePetType(props){
    console.log('=== PetList updatePetType props:',props);
    console.log('=== PetList updatePetType state:',this.state);

    if(props){
    this.setState(function (){
      return {
      selectedLocation: props ? props : null,
      pets: this.state.pets ? this.state.pets : null,
      selectedAnimalType: this.state.selectedAnimalType ? this.state.selectedAnimalType : 'all'
      // selectedBreed: this.state.selectedBreed ? this.state.selectedBreed : null,
      // selectedAge: this.state.selectedAge ? this.sate.selectedAge : null,
      // selectedSex: this.state.selectedSex ? this.state.selectedSex : null,
      // selectedSize: this.state.selectedSize ? this.state.selectedSize : null,
    }
    console.log('newState', newState);
    return newState
    console.log('api this.state', this.state);
    });
    // QUESTION API
    api.getPets(props)
    .then((pets) => {
      this.setState(function(){
        return {
          pets: pets
        }
      })
    })}
  }
  render() {
    console.log('=== Petlist render this.state', this.state);
    return (
        <div>
            <SelectionFilter onSelectChange={this.updatePetType}/>

            { this.state.pets ? <PetGrid pets={this.state.pets}
            onSelectChange={this.updatePetType} /> : null}


            {(this.state.selectedLocation && !this.state.pets) &&
               <Loading text='Searching' speed={300}/> }


        </div>
    )
  }
}
///////////////////////////////////

// class ParentComponent extends.Component({
//     getInitialState() {
//         return {
//             selectedLocation: '',
//         };
//     },
//     handleLocation: function(locValue) {
//         this.setState({location: locValue});
//     },
//
//     render() {
//          return (
//                 <div className="col-sm-9" >
//                     <SelectLanguage onSelectLanguage={this.handleLanguage}/>
//                 </div>
//         );
// });
///////////////////////////////////
module.exports = PetList;

// "animal=smallfurry&breed=Hamster&size=M&location=98101&sex=&age=young"

// selectedAnimalType={this.state.selectedAnimalType}
// selectedLocation={this.state.selectedLocation}
// selectedBreed={this.state.selectedBreed}
// selectedAge={this.state.selectedAge}
// selectedSex={this.state.selectedSex}
// selectedSize={this.state.selectedSize}
