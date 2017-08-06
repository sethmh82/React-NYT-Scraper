import React from "react";

// Create RUN Class
var Run = React.createClass({

getInitialState: function(){
    return {
      search: "",
      start: "",
      end: "",
    }
},

handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
},

  //RENDER THE HTML  
render: function(){

return(
      <div className ="main-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
                </div>
                <div className="panel-body">

                    </div>

                    <div className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
      </div>

    )
  }

});

module.exports = run;
