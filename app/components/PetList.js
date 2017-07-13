var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import SelectionFilter from './SelectionFilter';
// var PetPreview = require('./PetPreview');

function PetGrid (props){
  // this can be petPreview abstraction
  return (
    <ul className='pet-list'>

      {console.log('PetGrid props:', props)}

      {props.pets.map(function (pet, index){
        // console.log('photo:', pet.media.photos.photo);
        return (
          <li key={index} className='pet-list-item'>
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
      selectedPetType: 'all',
      selectedLocation: ' ',
      // selectedBreed: null,
      selectedAge: 'all',
      selectedSex: 'all',
      // selectedSize: null,
      // pets: null,
    };
    this.updatePetType = this.updatePetType.bind(this);
  }
  componentDidMount(props){
    console.log('=== PetList componentDidMount state:', this.state);
    console.log('=== PetList componentDidMount this.props:', this.props);
    this.updatePetType(this.state.selectedPetType);
  }
  updatePetType(props){
    console.log('=== PetList updatePetType props:',props);
    console.log('=== PetList updatePetType state:',this.state);

    if(props && props.selectedLocation){
    this.setState(function (){
      return {
        // TODO  should be props from child, if not props, it should be state
      selectedLocation: props.selectedLocation ? props.selectedLocation: this.state.selectedLocation,
      pets: props.pets ? props.pets : this.state.pets,
      selectedPetType: props.selectedPetType ? props.selectedPetType : this.state.selectedPetType,
      // selectedBreed: this.state.selectedBreed,
      selectedAge: props.selectedAge ? props.selectedAge : this.state.selectedAge,
      selectedSex: props.selectedSex ? props.selectedSex : this.state.selectedSex,
      // selectedSize: this.state.selectedSize,
    }});

    // TODO send props as object to API
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
            <SelectionFilter onSelectChange={this.updatePetType} selectedLocation={this.state.selectedLocation}
            selectedPetType={this.state.selectedPetType}
            selectedAge={this.state.selectedPetType}
            selectedSex={this.state.selectedSex}/>

            { this.state.pets ? <PetGrid pets={this.state.pets}
            onSelectChange={this.updatePetType} /> : null}


            {(this.state.selectedLocation.length > 1 && !this.state.pets) &&
               <Loading text='Searching' speed={300}/> }


        </div>
    )
  }
}


module.exports = PetList;
