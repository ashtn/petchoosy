import React, { Component } from 'react';
var PropTypes = require('prop-types');

function PetPreview (props){
  // console.log('petPreview props:', props);
  return (
    <div className="col-md-4">
      <img src={props.photo} className="d-block mx-auto rounded-circle img-fluid my-3" />
      <h3>{props.name}</h3>
      <p>{props.sex}</p>
      {/* <p>{props.breed}</p> */}
      <p>{props.age}</p>
      <label>
        Save to Board:
        <input
          name="isSaved"
          id={props.id}
          type="checkbox"
          value={undefined}
          onChange={props.onChange}
        />
      </label>
      <label>
        Fav (choose up to 4):
        <input
          id={props.id}
          name="isFav"
          type="checkbox"
          checked={props[props.id] ? props[id].isFav : null}
          onChange={props.onFavChange}
        />
      </label>
    </div>
  )
  return null
}

// PetPreview.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   petName: PropTypes.string.isRequired,
//   // id: PropTypes.string.isRequired,
//   // onReset: PropTypes.func.isRequired
// }

module.exports = PetPreview;
