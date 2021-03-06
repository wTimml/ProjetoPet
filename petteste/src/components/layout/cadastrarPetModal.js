import React from 'react'
import M from 'materialize-css'

class modalCadPet extends React.Component {
    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });

        return (

            <div>

                <a class="waves-effect waves-light btn-floating btn-large modal-trigger orange" href="#modal1">
                    <i class="material-icons">add</i>
                </a>


                <div id="modal1" class="modal">
                    <div class="modal-content">
						<h4 className='center'>Cadastrar Pet</h4>

						<form onSubmit={this.handleSubmit} className='white'>
							<h5 className='grey-text text-darken-3'>Sign Up</h5>

							<div className='input-field'>
								<label htmlFor='USER_NAME'>First Name</label>
								<input type='text' id='USER_NAME' onChange={this.handleChange} />
							</div>

							<div className='input-field'>
								<label htmlFor='USER_LASTNAME'>Last Name</label>
								<input type='text' id='USER_LASTNAME' onChange={this.handleChange} />
							</div>

							<div className='input-field'>
								<label htmlFor='USER_EMAIL'>Email</label>
								<input type='email' id='USER_EMAIL' onChange={this.handleChange} />
							</div>
							<div className='input-field'>
								<label htmlFor='USER_BIRTHDAY'>Email</label>
								<input type='date' id='USER_BIRTHDAY' onChange={this.handleChange} />
							</div>

							<div className='input-field'>
								<label htmlFor='USER_PASSWORD'>Password</label>
								<input type='password' id='USER_PASSWORD' onChange={this.handleChange} />
							</div>

							<div className='input-field'>
								<button className='btn pink lighten-1 z-depth-1'>Sign Up</button>
							</div>

						</form>
</div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default modalCadPet