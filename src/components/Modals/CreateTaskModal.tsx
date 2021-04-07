import React, { useState } from "react";

interface Props {
    modalStatus: any;
    setModalStatus: any;
    setTodos: any;
  }

 const CreateTaskModal: React.FunctionComponent<Props> = ({ modalStatus, setModalStatus, setTodos }) => {
 
    const [inputValues, setInputValues] = useState({
        taskPrice: '', taskDescription: '', taskName: '', time: '0:0:0'
      });

    const [error, setError] = useState<string>('')
    
    const setData = () => {
        setInputValues({ taskPrice: '', taskDescription: '', taskName: '', time: '0:0:0' })
        if (!inputValues.taskPrice || !inputValues.taskName) {
            setError('Fill all of the fields of the form ');
            return false;
        } else {
            setTodos(oldArray => [...oldArray, inputValues])
        }
    }

    return (
        <div>
            { modalStatus && 
            <div>
                <div className="modal show"  style={{ display: 'block' }} id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button onClick={ () => setModalStatus(false) } type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="float-left">Task name</label>
                            <input required onChange={ (e) => setInputValues({ ...inputValues, taskName: e.target.value }) } type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="float-left">Task description</label>
                            <input onChange={ (e) => setInputValues({ ...inputValues, taskDescription: e.target.value }) } type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="float-left">Cost of an hour of work</label>
                            <input onChange={ (e) => setInputValues({ ...inputValues, taskPrice: e.target.value }) } type="number" className="form-control" id="exampleInputEmail1" placeholder="Enter summ in dollars $" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={ () => setModalStatus(false) } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={ () => { setData(); setModalStatus(false) } } type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            }
        </div>
    )
}

export default CreateTaskModal;