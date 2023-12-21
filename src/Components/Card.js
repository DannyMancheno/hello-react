import react from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <div className='top-num'>{props.number}</div>
            <div className='main-color' style={{background: props.suite}}></div>
            <div className='bottom-num'>{props.number}</div>
        </div>
    )
}

