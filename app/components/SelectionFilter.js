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

function SelectPetType(props){

  var petTypes = ['all','smallfurry','barnyard', 'bird', 'cat', 'horse','dog', 'reptile'];
  return(
    <div>
      <h1>Type</h1>
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

  var ageTypes = ['all', 'baby', 'young', 'adult', 'senior'];
  return(
    <div>
      <h1>Age</h1>
      <select onChange={props.onSelectAge}>
        {ageTypes.map((age, index)=>{
          return (<option key={index} value={age}>{age}</option>)
        })}
      </select>
    </div>
  )
}
SelectPetAge.propTypes = {
  selectedAge: PropTypes.string.isRequired,
  onSelectAge: PropTypes.func.isRequired,
};


function LocationInput(props){

  return (
    <div className="row">
      <div className="col-md-6">
        <h1 className="py-3">Where would you like to meet your new pet?</h1>
      </div>
      <div className="col-md-6 align-self-center">

        <form className='column' onSubmit={props.onLocationSubmit}>
          <fieldset
          className='form-group text-center'>
            <label className='header' htmlFor='selectedLocation'>{props.label}</label>
            <input
              id={props.id}
              placeholder='Enter your Zipcode ()'
              type='text'
              autoComplete='on'
              onChange={props.onLocationChange}
              value={props.selectedLocation}
              className='form-control'
            /></fieldset>
          <button
            className='btn btn-primary w-100 mx-auto btn-block'
            type='submit'
            disabled={props.selectedLocation.length === 4}>
            Submit
          </button>
        </form>

      </div>
    </div>
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

  return (

    <div className='row'>

      <LocationInput className='input-location'
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
