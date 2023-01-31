import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// TODO:
// - [X] O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// - [X] Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// - [X] Desabilite o botão de Login equanto você está executando o login.
// - [X] Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// - [X] Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const handleSubmit = async (event) => {
		setError(null);
		setIsAuthenticating(true);

		try {
			await login({ email: email, password: password });
		} catch (error) {
			setError(error.message);
			return;
		} finally {
			setIsAuthenticating(false);
		}

		alert('Login realizado com sucesso');
	};

	return (
		<div className="wrapper">
			<div className="login-form">
				<h1>Login Form 🐞</h1>
				{/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
				{error && <div className="errorMessage">{error}</div>}
				<div className="row">
					<label htmlFor={'email'}>Email</label>
					<input
						id={'email'}
						type={'email'}
						autoComplete="off"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="row">
					<label htmlFor={'password'}>Password</label>
					<input
						id={'password'}
						type={'password'}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>

				<div className="button">
					<button
						onClick={handleSubmit}
						disabled={email === '' || password.length === 0 || isAuthenticating}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
