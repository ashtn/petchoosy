var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
import Loading from './Loading';
import PetGrid from './PetList';


function SelectPetSize(props){
  console.log('SelectPetSize render props:', props);
  var sizes = ['all', 'S', 'M', 'L', 'XL'];
  return(
    <div>
      <h1>Size</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
      <select onChange={props.onSelectSize}>
        {sizes.map((size, index)=>{
          return (<option key={index} value={size}>{size}</option>)
        })}
      </select>
    </div>
  )

}
SelectPetSize.propTypes = {
  selectedSize: PropTypes.string.isRequired,
  onSelectSize: PropTypes.func.isRequired,
};

function SelectPetSex(props){
  console.log('SelectPetSex render props:', props);
  var sexes = ['all', 'F', 'M'];
  return(
    <div>
      <h1>Sex</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
      <select onChange={props.onSelectSex}>
        {sexes.map((sex, index)=>{
          return (<option key={index} value={sex}>{sex}</option>)
        })}
      </select>
    </div>
  )

}
SelectPetSex.propTypes = {
  selectedSex: PropTypes.string.isRequired,
  onSelectSex: PropTypes.func.isRequired,
};

// function SelectPetType(props){
//
//   console.log('SelectPetType props',props);
//
//   var petTypes = ['all','smallfurry','barnyard', 'bird', 'cat', 'horse','dog', 'reptile'];
//
//   return (
//     <div>
//       <h3>2. Select Pet Type </h3>
//       <ul className='pet-types'>
//
//         {petTypes.map((petType) => {
//           return (
//             <li
//               style={petType === props.selectedPetType ? {color: '#748DCA'} : null} // adds inline styling to highlight active selection
//               // onClick={props.onSelect.bind(props, petType)} // NOTE clickHandler/ petType is what's being passed when the event happens
//               onClick={props.onSelectPetType} // NOTE clickHandler/ petType is what's being passed when the event happens
//               key={petType}>
//               {petType}
//             </li>
//           )})}
//         </ul>
//       </div>
//     )
// };
function SelectPetType(props){
  console.log('SelectPetType render props:', props);
  var petTypes = ['all','smallfurry','barnyard', 'bird', 'cat', 'horse','dog', 'reptile'];
  return(
    <div>
      <h1>Type</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
      <select onChange={props.onSelectPetType}>
        {petTypes.map((type, index)=>{
          return (<option key={index} value={type}>{type}</option>)
        })}
      </select>
    </div>
  )

}
SelectPetType.propTypes = {
  selectedPetType: PropTypes.string.isRequired,
  onSelectPetType: PropTypes.func.isRequired,
};


function SelectPetAge(props){
  console.log('SelectPetAge render props:', props);
  var ageTypes = ['all', 'baby', 'young', 'adult', 'senior'];
  return(
    <div>
      <h1>Age</h1>
      {/* <select onChange={this.handleSelectAge.bind(this, this.onSelect)}> */}
      <select onChange={props.onSelectAge}>
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
  onSelectAge: PropTypes.func.isRequired,
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
    // console.log('LocationInput render state:', this.state);
  return (
    <form className='column' onSubmit={props.onLocationSubmit}>
      {/* <form className='column' onSubmit={this.handleSubmit}> */}
      <label className='header' htmlFor='selectedLocation'>{props.label}</label>
      <input
        id={props.id}
        placeholder='zipcode'
        type='text'
        autoComplete='on'
        onChange={props.onLocationChange}
        value={props.selectedLocation}
      />
      <button
        className='button'
        type='submit'
        disabled={props.selectedLocation.length === 4}
        >
          Submit
        </button>
      </form>
    )
}
LocationInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onLocationSubmit: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired
}
LocationInput.defaultProps = {
  label: 'location',
}



function SelectionFilter(props){

  console.log('# SelectionFilter render props:', props);


  return (

    <div className='row'>

      <LocationInput //{onSelectChange={this.handleSubmit}}
        id='zipcode'
        onLocationSubmit={props.onLocationSubmit}
        selectedLocation={props.selectedLocation}
        onLocationChange={props.onLocationChange}
      />


      <SelectPetType className='select-pet-type'
        selectedPetType={props.selectedPetType}      onSelectPetType={props.onSelectPetType}
      />

      <SelectPetAge className='select-pet-age'
        selectedAge={props.selectedAge}
        onSelectAge={props.onSelectAge}
      />

      <SelectPetSex className='select-pet-sex'
        selectedSex={props.selectedSex}
        onSelectSex={props.onSelectSex}
      />

      <SelectPetSize className='select-pet-size'
        selectedSize={props.selectedSize}
        onSelectSize={props.onSelectSize}
      />


  </div>
)
}

module.exports = SelectionFilter;
