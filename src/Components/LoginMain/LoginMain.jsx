import React from 'react';
import './LoginMain.scss';
import useToken from '../../Hooks/useToken';

function LoginMain() {
	const [setToken] = useToken(true);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, password } = evt.target.elements;

		fetch(process.env.REACT_APP_API_URL + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username.value.trim(),
				password: password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data.token));
	};

	return (
		<div className='container'>
			<h1 className='login__heading'>Log In</h1>
			<div className='login__box'>
				<form onSubmit={handleSubmit}>
					<input
						className='login__username'
						type='text'
						defaultValue='eve.holt@reqres.in'
						placeholder='username'
						name='username'
						required
					/>
					<input
						className='login__password'
						type='password'
						defaultValue='cityslicka'
						placeholder='password'
						name='password'
						required
					/>

					<button className='login__btn'>Log In</button>
				</form>
			</div>
		</div>
	);
}

export default LoginMain;
