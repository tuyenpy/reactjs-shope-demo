import React, {Component}from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import postData from '../../services/fetchData';
import AppContext from '../../context/AppContext';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    login(updateState){
        const path = 'users/login';
        const data = this.state;

        postData(path, data)
        .then(res => {
            updateState({token: res.data.token});
        })
        .catch(err => console.log(err));
    }

    render() {
        let {onChange, login} = this;
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Type a email" onChange={onChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Type a password" onChange={onChange}/>
                </FormGroup>
                <AppContext.Consumer>
                    {
                        ({updateState}) =>
                        <Button onClick={() => login(updateState)}>Submit</Button>
                    }
                </AppContext.Consumer>
            </Form>
        )
    }
}

export default Login;