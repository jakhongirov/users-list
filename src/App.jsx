import './App.scss';
import UnauthenticatedApp from './UnauthenticatedApp';
import Authenticated from './AuthenticatedApp';
import useToken from './Hooks/useToken';

function App() {
	const [token] = useToken();

	if (token) {
		return <Authenticated />;
	} else {
		return <UnauthenticatedApp />;
	}
}

export default App;
