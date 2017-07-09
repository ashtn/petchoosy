var React = require('react');
// var Link = require('react-router-dom').Link; // make a route transistion inside application <Link />

class ContactUs extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Contact Us</h1>
        <p>
          Mei omnium elaboraret ad. Erat propriae volutpat mea ad, no illud hendrerit pri. Ne idque legendos eloquentiam duo. Ne quo inermis temporibus scriptorem, sit eu ridens epicurei qualisque, volumus legendos accommodare per ut. Clita iriure veritus vix ea, ullum dicam nostrum vim ea, his stet postulant no. Ea duo vero pertinax, at soleat altera est.
        </p>
        <form className='column'>
        <label className='header'>Email</label>
        <input />
        <label className='header'>Message</label>
        <textarea />
        <button
          className='button'
          type='submit'>
            Submit
        </button>
      </form>
      </div>
    )
  }
}


module.exports = ContactUs;
