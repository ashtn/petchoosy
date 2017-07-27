var React = require('react');
var PropTypes = require('prop-types');
import PetPreview from './PetPreview';

function PetGrid (props){
  return (
    // <ul className='pet-list'>
      <div className="py-5 text-center">
        <div className="container">
          <div className="row">
            { props.pets.map(function (pet, index){

              return <PetPreview name={pet.name}
                photo={ pet.media.photos ? pet.media.photos.photo[2]['$t'] : '../assets/placeholder.png' }
                // breed={pet.breed}
                sex={pet.sex}
                age={pet.age}
                key={pet.api_id}
                id={pet.api_id}
                onChange={props.onChange}
                onFavChange={props.onFavChange} />
            })}
          </div>
        </div>
      </div>

  )
}

PetGrid.propTypes = {
  pets: PropTypes.array.isRequired,
}

module.exports = PetGrid;
