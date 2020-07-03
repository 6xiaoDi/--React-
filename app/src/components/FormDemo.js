import React from 'react';

export default class FormDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            v1: 1
        };

        // this.changeV1 = this.changeV1.bind(this);
    }

    // changeV1 (e) {
    //     this.setState({
    //         v1: e.target.value
    //     })
    // }

    render() {
        return(
            <div>
                <h2>表单</h2>
                <hr/>
                {/*<input type="text" value={this.state.v1} onChange={this.changeV1}/>*/}
                <input type="text" defaultValue={this.state.v1}/>
                {this.state.v1}
                <button onClick={ () => {
                    this.setState({
                        v1: this.state.v1 + 1
                    })
                }}>按钮</button>
            </div>
        );
    }

}