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
                {pet.media.photos.photo.map(function(pic){
                  console.log('index:',index);
                  console.log('pic:', pic['$t'])}
                )}


                <img
                  className='avatar'
                  // TODO fix photo error
                  src={pet.media.photos.photo[2]['$t'] ? pet.media.photos.photo[2]['$t'] : null}
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
      selectedSize: 'all',
      // pets: null,
    };
    this.updatePetType = this.updatePetType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(props){
    console.log('=== PetList componentDidMount state:', this.state);
    console.log('=== PetList componentDidMount this.props:', this.props);
    this.updatePetType(this.state.selectedPetType);
  }
  handleChange(event) {
    var value = event.target.value;
    console.log('LocationInput handleChange', event.target.value);
    this.setState(function () {
      return { selectedLocation: value }
        // this.setState({value: event.target.value.toUpperCase()}); // every state mutation will have an associated handler function}

    })};
  handleSubmit(event) {

    console.log('^^^LocationInput handleSubmit this.state:', this.state);
    console.log('^^^LocationInput handleSubmit this.props: ',this.props);


    event.preventDefault();
    this.updatePetType(
      // NOTE this goes to the SelctionFilter handleSubmit
    {
    selectedLocation: this.state.selectedLocation }
    );
  }
  updatePetType(props){
    console.log('=== PetList updatePetType props:',props);
    console.log('=== PetList updatePetType state:',this.state);

    // if(props && props.selectedLocation){
    // this.setState(function (){
    //   return {
    //     // TODO  should be props from child, if not props, it should be state
    //   selectedLocation: props.selectedLocation,
    //   pets: props.pets,
    //   selectedPetType: props.selectedPetType,
    //   // selectedBreed: this.state.selectedBreed,
    //   selectedAge: props.selectedAge,
    //   selectedSex: props.selectedSex,
    //   selectedSize: props.selectedSize,
    // }});

    // TODO send props as object to API
    if(props && props.selectedLocation){
    api.getPets(this.state)
    .then((pets) => {
      this.setState(function(){
        return {
          pets: pets
        }
      })
    })}}
  // }
  render() {
    console.log('=== Petlist render this.state', this.state);
    return (
      //QUESTION is is neccessary to pass initial state in this component? inorder to update the sate of this component?
      // spread op.
        <div>
            <SelectionFilter onSelectChange={this.updatePetType} selectedLocation={this.state.selectedLocation}
            selectedPetType={this.state.selectedPetType}
            selectedAge={this.state.selectedPetType}
            selectedSex={this.state.selectedSex}
            selectedSize={this.state.selectedSize}
            onChange={this.handleChange}
            onSubmit ={this.handleSubmit}/>

            { this.state.pets ? <PetGrid pets={this.state.pets}
            onSelectChange={this.updatePetType} /> : null}


            {(this.state.selectedLocation.length === 5 && !this.state.pets) &&
               <Loading text='Searching' speed={300}/> }


        </div>
    )
  }
}


module.exports = PetList;
