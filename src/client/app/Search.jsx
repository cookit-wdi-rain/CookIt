  import React     from 'react'

  export default class Search extends React.Component {
    render(){
      return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
          <div className='col-sm-12'>
            <form onSubmit={this.props.onSubmitSearch}>
              <div className='form-group'>
                <input
                  onChange={this.props.onUpdateSearch}
                  type='text'
                  placeholder='Enter Cuisine' />
              </div>
              <div className='form-group'>

              <input
                onChange={this.props.onUpdateSearchIngredients}
                type='text'
                placeholder='Enter Ingredient' />

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
        )
    }
  }

