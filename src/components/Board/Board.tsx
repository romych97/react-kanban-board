
import React, { useState } from 'react'
// import { Button, Image, Modal } from 'semantic-ui-react'

import CreateTaskModal from '../Modals/CreateTaskModal'
import Timer from '../Timer/Timer'

function Board() {

    const [modal, setModalStatus] = useState(false);

    const [todos, setTodos] = useState<any[]>([]);
    const [inProgress, setInProgress] = useState<any[]>([]);
    const [done, setDone] = useState<any[]>([]);

    const startTask = (id) => {
        setInProgress(oldArray => [...oldArray, todos.filter((item, i) => i === id)])
        setTodos(todos.filter((item, i) => i !== id));
        console.log(todos, 'todos')
    }

    const resolveTask = (id, time) => {
        setDone(oldArray => [...oldArray, inProgress.filter((item, i) => i === id)])
        setInProgress(inProgress.filter((item, i) => i !== id));
        console.log(time)
    }

    const setTimer = (id, data) => {
        inProgress[id][0].time = data
    }

    return (
        <div className="container-fluid pt-3" id="container">
                
        <CreateTaskModal modalStatus={ modal } setModalStatus={ setModalStatus } setTodos={ setTodos } /> 

        <div className="row flex-row flex-sm-nowrap py-3">
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card bg-light"> 
                    <div className="card-body">
                        <div className="w-100 d-block text-left">To Do</div>
                        <div className="items border border-light">
                            { todos && todos.map((data, i) => (
                                <div key={ i } className="card draggable shadow-sm" id="cd2"  >
                                    <div className="card-body p-2 d-flex align-items-center">
                                        <div className="card-title d-flex w-100">
                                            <img alt="img" src="//placehold.it/30" className="rounded-circle" />
                                            <div className="lead font-weight-light ml-2">{ data.taskName }</div>
                                        </div>
                                        <button onClick={ () => startTask(i) } className="btn btn-primary btn-sm px-3">Start</button>
                                    </div>
                                </div>                       
                            )) }
                            <div>
                                <button onClick={ () => setModalStatus(true) } className="btn btn-primary px-5">New Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card bg-light">
                    <div className="card-body">
                        <div className="w-100 d-block text-left">In-progess</div>
                        <div className="items border border-light">
                        { inProgress && inProgress.map((data, i) => (
                            <div key={ i } className="card draggable shadow-sm" id="cd2"  >
                            <div className="card-body p-2 d-flex align-items-center">
                                <div className="card-title w-100">
                                    <div className="d-flex">
                                        <img alt="img" src="//placehold.it/30" className="rounded-circle" />
                                        <div className="lead font-weight-light ml-2">{ data[0].taskName }</div>
                                    </div>
                                    <div className="d-flex w-100">
                                        <div className="mb-3">
                                            <Timer id={ i } setTimer={ setTimer } />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={ () => resolveTask(i, data[0].time) } className="btn btn-success btn-sm px-3">Resolve</button>
                            </div>
                        </div>                     
                            )) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card bg-light">
                    <div className="card-body">
                        <div className="w-100 d-block text-left">Done</div>
                        <div className="items border border-light">
                            { done && done.map((data, i) => (
                                <div key={ i } className="card draggable shadow-sm" id="cd2"  >
                                    <div className="card-body p-2 align-items-center">
                                        <div className="card-title d-flex w-100">
                                            <img alt="img" src="//placehold.it/30" className="rounded-circle" />
                                            <div className="lead font-weight-light ml-2">{ data[0][0].taskName }</div>
                                        </div>
                                        {/* { parseFloat(data[0][0].taskPrice) } | 
                                         { data[0][0].time } */}
                                        <div className="text-left">${ parseFloat(data[0][0].taskPrice) * parseFloat(data[0][0].time) || '0' }</div>
                                    </div> 
                                </div>                       
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Board;