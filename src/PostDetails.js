import React from 'react';
import './App.css';


class PostDetails extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            postDetails: ""
        }

    }

    async componentDidMount() {

        await fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => { this.setState({ postDetails: json }) })

    }


    render() {


        return (
            <div className='MainDiv'>

                <h1 className='H1'>Details</h1>

                {this.state.postDetails ?

                    <div>
                        <h2 className='Title'> Title: {this.state.postDetails.title}</h2>

                        <h3  className='Title'>User  Id: {this.state.postDetails.userId}</h3>

                        <div style={{paddingLeft:'1rem'}}>
                            <span className='Detail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                        </div>
                    </div>

                    :

                    <h3 className='Loading'>Loading...</h3>
                }

            </div>
        )
    }
}

export default PostDetails;
