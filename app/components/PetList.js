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
        if (pet.media.photos){
        return (
          <li key={index} className='pet-list-item'>
            <ul className='space-list-items'>
              <li>
                {/* {pet.media.photos.photo.map(function(pic){
                  console.log('index:',index);
                  console.log('pic:', pic['$t'])}
                )} */}


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
        )}})}
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
      selectedLocation: '',
      // selectedBreed: null,
      selectedAge: 'all',
      selectedSex: 'all',
      selectedSize: 'all',
      // pets: null,
    };
    this.updatePetType = this.updatePetType.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
    this.handleSelectAge = this.handleSelectAge.bind(this);
    this.handleSelectPetType = this.handleSelectPetType.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleSelectSex = this.handleSelectSex.bind(this);
  }
  componentDidMount(props){
    console.log('=== PetList componentDidMount state:', this.state);
    console.log('=== PetList componentDidMount this.props:', this.props);
  }
  handleLocationChange(event) {
    var value = event.target.value;
    // console.log('LocationInput handleChange event:', event.target.value);
    // console.log('LocationInput handleChange props:', props);

    var newState = Object.assign({}, this.state, { selectedLocation: value } )
    this.setState(function(){return newState})
  };
  handleLocationSubmit(event) {

    console.log('^^^LocationInput handleSubmit this.state:', this.state);
    console.log('^^^LocationInput handleSubmit this.props: ',this.props);


    event.preventDefault();
    // NOTE this goes to the SelctionFilter handleSubmit
    this.updatePetType(this.state);
  }
  handleSelectAge(event){
    console.log('@-@-@ handleSelectAge x', event.target.value);
    var value = event.target.value;
    var newState = Object.assign({}, this.state, {selectedAge: value})
    this.setState(newState, this.updatePetType(newState));
    // this.updatePetType(newState);
  }
  handleSelectSize(event){
    var value = event.target.value
    var newState = Object.assign({}, this.state, {selectedSize: value})
    this.setState(newState, this.updatePetType(newState));
    // this.updatePetType(newState);
  }
  handleSelectSex(event){
    var value = event.target.value
    var newState = Object.assign({},this.state,{selectedSex: value})
    this.setState(newState, this.updatePetType(newState));
    // this.updatePetType(newState);
  }
  handleSelectPetType(event){

    console.log('handleSelectPetType event:', event.target.value);
    console.log("STATE 1:", this.state );

    var petType = event.target.value
    var newState = Object.assign({}, this.state, {selectedPetType: petType})
    // var newState = {selectedPetType: petType}
    // this.setState(function(state){
    //   return { ...state, selectedPetType: petType }
    // });

    this.setState(newState, () =>{this.updatePetType(newState)})
    // this.updatePetType(this.state)
    // console.log('STATE 1:', this.state);
    // this.setState({selectedPetType: petType})
    // this.updatePetType
    // console.log('STATE 2:', this.state);
    // this.updatePetType()
      console.log("STATE 2:", this.state );
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
    console.log('=== PetList updatePetType props:',);
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
    // if(props.selectedLocation !== ' '){
    api.getPets(props)
    .then((pets) => {
      this.setState(function(){
        return {
          pets: pets
        }
      })
    })}

  // }
  render() {
    console.log('=== Petlist render this.state', this.state);
    return (
      //QUESTION is is neccessary to pass initial state in this component? inorder to update the sate of this component?
      // spread op.
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
            onSelectChange={this.updatePetType} /> : null}


            {(this.state.selectedLocation.length === 5 && !this.state.pets) &&
               <Loading text='Searching' speed={300}/> }


        </div>
    )
  }
}


module.exports = PetList;
