var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import PetGrid from './PetList';


function SelectPetSize(props){
  console.log('SelectPetSex render props:', props);
  var sizes = ['all', 'S', 'M', 'L', 'XL'];
  return(
    <div>
      <h1>Size</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
        <select onChange={props.onSelect}>
        {sizes.map((size, index)=>{
          return (<option key={index} value={size}>{size}</option>)
        })}
      </select>
    </div>
  )

}
SelectPetSize.propTypes = {
  selectedSize: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function SelectPetSex(props){
  console.log('SelectPetAge render props:', props);
  var sexes = ['all', 'F', 'M'];
  return(
    <div>
      <h1>Sex</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
        <select onChange={props.onSelect({selectedPetSex: this})}>
        {sexes.map((sex, index)=>{
          return (<option key={index} value={sex}>{sex}</option>)
        })}
      </select>
    </div>
  )

}
SelectPetSex.propTypes = {
  selectedSex: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function SelectPetType(props){

  console.log('SelectPetType props',props);

  var petTypes = ['all','smallfurry','barnyard', 'bird', 'cat', 'horse','dog', 'reptile'];

  return (
    <div>
      <h3>2. Select Pet Type </h3>
      <ul className='pet-types'>

        {petTypes.map((petType) => {
          return (
            <li
              style={petType === props.selectedPetType ? {color: '#748DCA'} : null} // adds inline styling to highlight active selection
              // onClick={props.onSelect.bind(props, petType)} // NOTE clickHandler/ petType is what's being passed when the event happens
                onClick={props.onSelect({selectedPetType: petType})} // NOTE clickHandler/ petType is what's being passed when the event happens
              key={petType}>
              {petType}
            </li>
        )})}
      </ul>
    </div>
  )
};
SelectPetType.propTypes = {
  selectedPetType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};


function SelectPetAge(props){
  console.log('SelectPetAge render props:', props);
  var ageTypes = ['all', 'baby', 'young', 'adult', 'senior'];
  return(
    <div>
      <h1>Age</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
        <select onChange={props.onSelect.bind(this)}>
        {ageTypes.map((age, index)=>{
          return (<option key={index} value={age}>{age}</option>)
        })}
      </select>
    </div>
  )
  console.log();
}
SelectPetAge.propTypes = {
  selectedAge: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

//
// class LocationInput extends React.Component {
//   // TODO us prop directly no need for state fool
//   constructor(props) {
//
//     console.log('^^^ LocationInput constructor props:', props);
//
//     super(props);
//     // this.state = {
//     //   selectedLocation: props.selectedLocation ? props.selectedLocation : ' '
//     // };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(event) {
//
//     console.log('^^^LocationInput handleSubmit this.state:', this.state);
//     console.log('^^^LocationInput handleSubmit this.props: ',this.props);
//
//
//     event.preventDefault();
//     this.props.onSubmit(
//       // NOTE this goes to the SelctionFilter handleSubmit
//     {id: this.props.id,
//     selectedLocation: this.state.selectedLocation}
//     );
//   }
//   handleChange(event) {
//     var value = event.target.value;
//     // console.log('LocationInput handleChange', event.target.value);
//     this.setState(function () {
//       return {
//         selectedLocation: value
//         // this.setState({value: event.target.value.toUpperCase()}); // every state mutation will have an associated handler function
//       }
//     });
//   }
function LocationInput(props){
  // render(props) {
  //   console.log('^^^LocationInput render props:', props);
  //   // console.log('LocationInput render state:', this.state.selectedLocation);
    return (
      <form className='column' onSubmit={props.onSubmit.bind(this)}>
      {/* <form className='column' onSubmit={this.handleSubmit}> */}
        <label className='header' htmlFor='selectedLocation'>{props.label}</label>
        <input
          id={props.id}
          placeholder='zipcode'
          type='text'
          autoComplete='on'
          onChange={props.onChange.bind(this)}
          value={props.selectedLocation}
        />
        <button
          className='button'
          type='submit'
          disabled={props.selectedLocation.length === 5}
          >
            Submit
        </button>
      </form>
    )

}
LocationInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
LocationInput.defaultProps = {
  label: 'location',
}


// class SelectionFilter extends React.Component {
function SelectionFilter(props){
  // constructor(props) {
  //   super(props);
  //   console.log('# SelectionFilter constructor props:', props);
  //   // this.state = {
  //   //   // QUESTION should this pattern be repeating through each child component?
  //   //   // TODO avoid using props to set state
  //   //   // TODO doesnt need state
  //   //   selectedPetType: props.selectedPetType,
  //   //   selectedLocation: props.selectedLocation,
  //   //   // selectedBreed: this.selectedBreed ? this.selectedBreed : null,
  //   //   selectedAge: props.selectedAge,
  //   //   selectedSex: props.selectedSex,
  //   //   selectedSize: props.selectedSize
  //   // };
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.handleSelectAge = this.handleSelectAge.bind(this);
  //   // this.handleSelectSex = this.handleSelectSex.bind(this);
  //   // this.handleSelectSize = this.handleSelectSize.bind(this);
  //   // this.handleReset = this.handleReset.bind(this);
  //   // this.updatePetType = this.updatePetType.bind(this);
  //   // this.updateState = this.updateState.bind(this);
  // }
  // handleSubmit(id, selectedLocation) {
  // handleSelectSize(event){
  //   var newState = {selectedSize: event.target.value}
  //   this.setState(newState);
  //   this.handleSubmit(newState);
  // }
  // handleSelectAge(event){
  //   console.log('@-@-@ handleSelectAge x', event.target.value);
  //   var newState = {selectedAge: event.target.value}
  //   this.setState(newState);
  //   this.handleSubmit(newState);
  //
  // }
  // handleSelectSex(event){
  //   var newState = {selectedSex: event.target.value}
  //   this.setState(newState);
  //   this.handleSubmit(newState);
  // }
  // handleSubmit(props) {
  //   console.log('# SelectionFilter handleSubmit props:', props);
  //   console.log('# SelectionFilter handleSubmit this.state: ', this.state);
  //   // console.log('Filter handleSubmit props: ', this.props);
  //   var newState = {
  //     selectedLocation: props.selectedLocation,
  //     selectedPetType: props.selectedPetType,
  //     // selectedBreed: props.selectedBreed,
  //     selectedAge: props.selectedAge,
  //     selectedSex: props.selectedSex,
  //     selectedSize: props.selectedSize
  //   }
  //
  //   this.setState(newState);
  //   this.props.onSelectChange(newState) // NOTE goes to this.updatePetType in petlist
  // }

  // componentDidMount() {
  //   console.log('!!!! updateState componentDidMount his.state', this.state);
  // this.updateState(this.state); // by default it will be ALL becuase what what we have set up in the constructor
  // }

  // updateState(props){
  //   console.log('!!!!!updateState props:', props);
  //   console.log('!!!!!updateState this.state:', this.state);
  //   this.setState(()=>{
  //     return {
  //       selectedPetType: props.selectedPetType,
  //       selectedLocation: props.selectedLocation,
  //       selectedBreed: props.selectedBreed,
  //       selectedAge: props.selectedAge,
  //       selectedSex: props.selectedSex,
  //       selectedSize: props.selectedSize,
  //       pets: props.pets,
  //     }
  //   });
  //   this.handleSubmit(props)
  // }

    console.log('# SelectionFilter render props:', props);


    return (

        <div className='row'>
          {/* <Filter onSelectChange={this.handleSubmit}/> */}

          <LocationInput //{onSelectChange={this.handleSubmit}}
          id='zipcode'
          onSubmit={props.onSubmit}
          // QUESTION do i need to pass this prop down to the location input component
          selectedLocation={props.selectedLocation}
          onChange={props.onChange}
        />


          {/* <LocationInput onSelectChange={this.handleSubmit}
          id='zipcode'
          onSubmit={this.handleSubmit}/> */}

          <SelectPetType className='select-pet-type' selectedPetType={props.selectedPetType} onSelect={props.onSelectChange}
          // {onSelect={this.updateState}}
          // onSelectChange={this.updateState}
         />

         <SelectPetAge className='select-pet-age'
         selectedAge={props.selectedAge} onSelect={props.onSelectChange} />

         <SelectPetSex className='select-pet-sex'
         selectedSex={props.selectedSex} onSelect={props.onSelectChange} />

         <SelectPetSize className='select-pet-size'
           selectedSize={props.selectedSize}
           onSelect={props.onSelectChange} />
      </div>
    )
  }

module.exports = SelectionFilter;
