import { Component } from 'react'
import { signUp } from '../../utilities/users-service.js'


export default class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        confirm: '',
        error: ''
    }
    
    

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData)
            this.props.setUser(user)
            this.props.navigation.navigate('profiles')
        } catch {
            // If an error occurred
            this.setState({ error: 'Sign Up Failed - Try again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div className='highest-cont'>
                <div className="form-container">
                    <h2>Unlimited Movies, Tv Shows and More</h2>
                    <h4>Watch Anywhere, Cancel Anytime</h4>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <input type="text" name="username" placeholder='Username' value={this.state.user} onChange={this.handleChange} required />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                        <input type="password" name="confirm" placeholder="Confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}