import React from 'react'

const CalcReducer = () => {
  function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return { ...state, count: state.count + 1 }
        case 'SUB':
          if (state.count === 0) {
            return { ...state, count: state.count, message: action.message }
          } else {
              return {...state, count: state.count - 1}
          }
        case 'ADD10': return { ...state, count: state.count + 10 }
        case 'SUB10': return { ...state, count: state.count - 10 }
        case 'RESET': return { ...state, count: 0 }
        case 'CUSTOM': return { ...state, count: state.count + action.custom }
        default: return state
    }
  }

    const [state, dispatch] = React.useReducer(reducer, { count: 0, message: '' })
    const [custom, setCustom] = React.useState(0);

    const handleChange = (e) => {
      setCustom(parseInt(e.target.value, 10))
    }

  return (
    <>
      <p>Count is: {state.count}</p>
      {state.message && <p>Message: {state.message}</p>}


      <div>
          <button onClick={() => dispatch({ type: 'ADD' })}>Add 1</button>

          <button onClick={() => dispatch({ type: 'SUB', message: 'Le compteur ne peut pas descendre en dessous de zéro !' })}>Decrease 1</button>

          <button onClick={() => dispatch({ type: 'ADD10' })}>Add 10</button>
          <button onClick={() => dispatch({ type: 'SUB10' })}>Decrease 10</button>

          <button onClick={() => dispatch({ type: 'RESET' })}>Reset count</button>
          <br/>
          <input type="text" onChange={handleChange}/>
          <button onClick={() => dispatch({type: 'CUSTOM', custom})} >Add + {custom}</button>
      </div>
    </>
  )
}

export default CalcReducer;
