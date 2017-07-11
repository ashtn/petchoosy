var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var SelectPetType = require('./PetList');
import Loading from './Loading';
import PetGrid from './PetList';

////// NOTE child componenet
// controlled component - bind the value of the input field to whatever the property on the state object is
// class LocationInput extends React.Component {
//   constructor(props) {
//     console.log('^^^ LocationInput constructor props:', props);
//     super(props);
//     this.state = {
//       selectedLocation: ''
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
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
//   handleSubmit(event) {
//
//     console.log('^^^LocationInput handleSubmit this.state:', this.state);
//     console.log('^^^LocationInput handleSubmit this.props: ',this.props);
//
//
//     event.preventDefault();
//     console.log('^^^LocationInput handleSubmit state.selectedLocation:', this.state.selectedLocation);
//     this.props.onSubmit(
//       // this goes to the SelctionFilter handleSubmit
//     this.props.id,
//     this.state.selectedLocation
//     );
//   }
//   render(props) {
//     console.log('^^^LocationInput render props:', props);
//     // console.log('LocationInput render state:', this.state.selectedLocation);
//     return (
//       <form className='column' onSubmit={this.handleSubmit}>
//         <label className='header' htmlFor='selectedLocation'>{this.props.label}</label>
//         <input
//           id={this.props.id}
//           placeholder='zipcode'
//           type='text'
//           autoComplete='on'
//           value={this.state.selectedLocation}
//           onChange={this.handleChange}
//         />
//         <button
//           className='button'
//           type='submit'
//           disabled={this.state.selectedLocation.length < 5}
//           >
//             Submit
//         </button>
//       </form>
//     )
//   }
// }
// ////// NOTE validations
// LocationInput.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// }
// LocationInput.defaultProps = {
//   label: 'location',
// }


////// NOTE displays list of pets, re-renders when pet type is selected
function SelectPetType (props){

  console.log('SelectPetType props',props);

  var petTypes = ['All','dog','barnyard', 'bird', 'cat', 'horse', 'reptile', 'smallfurry'];

  return (
    <div>
      <h1>Select Pet Type </h1>
      <ul className='pet-types'>
        {console.log('selectPetType Petlist.js')}
        {petTypes.map((petType) => {
          return (
            <li
              style={petType === props.selectedAnimalType ? {color: '#748DCA'} : null} // adds inline styling to highlight active selection
              onClick={props.onSelect.bind(null, petType)} // NOTE clickHandler/ petType is what's being passed when the event happens
              key={petType}>
              {petType}
            </li>
          )})}
      </ul>
    </div>

  )
}

SelectPetType.propTypes = {
  selectedAnimalType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

////// NOTE Filter child compoenet
class Filter extends React.Component {
  // Set the initial state of the form filter
  // constructor(props) {
  //   super(props);
  //   // NOTE onSelect prop has been passed props.onSelectChange
  //   console.log('Filter constructor state:', this.state);
  //   console.log('Filter constructor this.props: ',this.props);
  //
  //   this.state = {
  //     selectedAnimalType: null,
  //     selectedLocation: null,
  //     selectedBreed: null,
  //     selectedAge: null,
  //     selectedSex: null,
  //     selectedSize: null,
  //     pets: null,
  //   };
  //
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.handleReset = this.handleReset.bind(this);
  // }
  constructor(props) {
    console.log('^^^ LocationInput constructor props:', props);
    super(props);
    this.state = {
      selectedLocation: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleSubmit(props) {
  //
  //   console.log('Filter handleSubmit props:', props );
  //   console.log('Filter handleSubmit state:', this.state);
  //   // console.log('Filter handleSubmit props: ', this.props);
  //   this.props.onSelectChange(
  //     {
  //   // this.setState(function (){
  //   //   return {
  //     // selectedAnimalType: props.selectedAnimalType,
  //     selectedLocation: props,
  //     // selectedBreed: props.selectedBreed,
  //     // selectedAge: props.selectedAge,
  //     // selectedSex: props.selectedSex,
  //     // selectedSize: props.selectedSize,
  //     // pets: props.pets,
  //   })
  // }
  handleSubmit(event) {

    console.log('^^^LocationInput handleSubmit this.state:', this.state);
    console.log('^^^LocationInput handleSubmit this.props: ',this.props);


    event.preventDefault();
    console.log('^^^LocationInput handleSubmit state.selectedLocation:', this.state.selectedLocation);
    this.props.onSubmit(
      // this goes to the SelctionFilter handleSubmit
    this.props.id,
    this.state.selectedLocation
    );
  }
  handleChange(event) {
    var value = event.target.value;
    // console.log('LocationInput handleChange', event.target.value);
    this.setState(function () {
      return {
        selectedLocation: value
        // this.setState({value: event.target.value.toUpperCase()}); // every state mutation will have an associated handler function
      }
    });
  }
  // handleReset(id){
  //   this.setState(function(){
  //     return {
  //     selectedAnimalType: props.selectedAnimalType,
  //     selectedLocation: props.selectedLocation,
  //     selectedBreed: props.selectedBreed,
  //     selectedAge: props.selectedAge,
  //     selectedSex: props.selectedSex,
  //     selectedSize: props.selectedSize,
  //     pets: props.pets,
  //     }
  //   })
  // }
  // render() {
  //
  //   console.log('Filter render:', this.state.selectedLocation);
  //   var zipcode = this.state.selectedLocation;
  //   console.log('Filter render zipecode: ', zipcode);
  //   var text = 'Location Accepted I think'
  //
  //   return (
  //     <div>
  //       {zipcode === null &&
  //       <LocationInput
  //         id='zipcode'
  //         label="zipcode"
  //         onSubmit={this.handleSubmit} />
  //       }
  //       {zipcode && text}
  //
  //     </div>
  // )}
  render(props) {
    console.log('^^^LocationInput render props:', props);
    // console.log('LocationInput render state:', this.state.selectedLocation);
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='selectedLocation'>{this.props.label}</label>
        <input
          id={this.props.id}
          placeholder='zipcode'
          type='text'
          autoComplete='on'
          value={this.state.selectedLocation}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={this.state.selectedLocation.length < 5}
          >
            Submit
        </button>
      </form>
    )
  }
}
Filter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
Filter.defaultProps = {
  label: 'location',
}
////// NOTE parent compoenet
class SelectionFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log('# SelectionFilter constructor props:', props);
    this.state = {
      selectedAnimalType: this.selectedAnimalType ? this.selectedAnimalType : null,
      selectedLocation: this.selectedLocation ? this.selectedLocation : null,
      // selectedBreed: this.selectedBreed ? this.selectedBreed : null,
      // selectedAge: this.selectedAge ? this.state.selectedAge : null,
      // selectedSex: this.selectedSex ? this.selectedSex : null,
      // selectedSize: this.selectedSize ? this.selectedSize : null,
      // pets: this.pets ? this.pets : null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, selectedLocation) {

    console.log('# SelectionFilter handleSubmit id:', id);
    console.log('# SelectionFilter handleSubmit selectedLocation: ', selectedLocation);
    console.log('# SelectionFilter handleSubmit this.props: ', this.state);
    // console.log('Filter handleSubmit props: ', this.props);
    this.props.onSelectChange(
      selectedLocation,
    )
    // this.setState(function() {
    //
    //   console.log('# SelectionFilter setState this.props:',this.props);
    //   console.log('# SelectionFilter setState props.selectedLocation:', this.props.selectedLocation);
    //
    //   var newState = {
    //     selectedLocation: this.props.selectedLocation,
    //   }
    //
    //   return newState;
      // onSelectChange: this.props.handleSubmit,
      // selectedAnimalType: props.selectedAnimalType,
      // selectedBreed: props.selectedBreed,
      // selectedAge: props.selectedAge,
      // selectedSex: props.selectedSex,
      // selectedSize: props.selectedSize,
      // pets: props.pets,

    // });
  }
  handleSelectionChange(){}
  render(){
    const location = this.state.selectedLocation

    console.log('# SelectionFilter render this.state', this.state);
    let display = null

    return (
      <div>
        <div className='row'>
          {/* <Filter onSelectChange={this.handleSubmit}/> */}
          <Filter onSelectChange={this.handleSubmit}
          id='zipcode'
          onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

module.exports = SelectionFilter;
