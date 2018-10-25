import React from 'react'


export default class Form extends React.Component{
    render () {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action = "" method="post" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="add">label</label>
                            <input style={{width: 190}} id="add" type="text" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="inputDs">label</label>
                            <select name="ds" id="inputDs" className="form-control" required>
                                <option value="{0}">Small</option>
                                <option value="{1}">Medium</option>
                                <option value="{2}">High</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="add">label</label>
                            <input style={{width: 300}} id="add" type="text" className="form-control" placeholder="Content" />
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-primary">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}