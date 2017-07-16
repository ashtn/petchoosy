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
      board: { pets: [] }
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
  }
  handleSaveToBoard(event){
    console.log('handleSaveToBoard event:', event.target);
    console.log('handleSaveToBoard event.target.name', event.target.name);
    console.log('handleSaveToBoard event.target.value', event.target.value);

    var id = event.target.id
    var array = this.state.board['pets']
    // console.log(`${board['pets']}:`, board);

    var newState = {}
    if(event.target.name == 'isSaved' && event.target.value == 'on'){
      // key = "" + id
      array.push({[id]: 'false'})
      }
      console.log('array:',array);

      var newState = Object.assign({}, this.state, this.state.board.pets: array)

      this.setState(() => {return newState})
    }
    // event.target.type  //isSaved
    // event.target.value // on

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
                                      onChange={this.handleSaveToBoard} /> : null}

          {/*  TODO fix loading bug */}
          {(this.state.selectedLocation.length === 5 && !this.state.pets) &&
             <Loading text='Searching' speed={300}/> }
      </div>
    )
  }
}


module.exports = PetList;
