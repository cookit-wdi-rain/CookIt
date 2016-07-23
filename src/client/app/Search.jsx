import React     from 'react'

export default class Search extends React.Component {
  render(){
    return (
       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            <div>
        <form onSubmit={this.props.onSubmitSearch}>
          <select className="input-group" onChange={this.props.onUpdateDrop.bind(this)}>
            <option value="cuisine">Cuisine</option>
            <option value="ingredient">Ingredient</option>
          </select>
          <div className="form-group">
            <input className="input-group"
            onChange={this.props.onUpdateSearch}
            type='text' />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
            type='submit'
            className="btn btn-block btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
            </div>


      );
    }

  }

