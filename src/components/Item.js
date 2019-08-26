import React,{Component} from 'react'

class Item extends Component{

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    const status=this.props.message
    return (
      <div className='Item'>
        {
          status && status.map(item=>(
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    )
  }

}
export default Item