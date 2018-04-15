import React,{Component} from 'react'


export default (Mycomponent)=>{
class Newmyc extends Component{
    constructor(props){
        super();
        this.state={
            data:'myf data'
        }
    }
    componentWillMount(){
       console.log(1)
    }

    render(){
        return <Mycomponent data={this.state.data}/>
    }
}
 return Newmyc

}

 