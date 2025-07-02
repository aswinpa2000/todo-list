const Card =(props)=> {

  const handleComplete = () =>{
    props.onDeleteTask(props.data.task_id);
  }
  return (
    <div className='card'>
    <p>{props.data.task_name}</p>
    <button onClick={handleComplete}>COMPLETE</button>
    </div>
  )
}

export default Card;