import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        element : "", 
        items:  []
    }

    onChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            element : "",
            items : [...this.state.items, {element : this.state.element}]
        })
    }

    supprime(id){
        // const nvItems = this.state.items.filter((value, index) =>  id !== index 
        // )
        // this.setState({
        //     items : nvItems
        //  })
        const nvItems = this.state.items
        nvItems.splice(id,1)
        this.setState({
             items : nvItems
          })
    }

    renderTodo = () => {
        return this.state.items.map((item, index) =>{
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element}
                            <i className="fas fa-times"
                                style={{cursor: "pointer",     float: "right", 
                                color: "red"}
                                }
                                onClick={() => this.supprime(index)}
                            ></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }
    

    render() {
        return (
            <React.Fragment>
            <div className="card my-3">
                <div className="card-header">To-do List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                
                                <label htmlFor="element">Chose a faire</label>
                                <input type="text"
                                className='form-control form-control-lg'
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                                />
                            </div>
                            <button className="btn btn-primary btn-block"> ajouter une chose à faire !</button>
                        </form>
                </div>                
            </div>
            {this.renderTodo()}
            </React.Fragment>
        )
    }
}
