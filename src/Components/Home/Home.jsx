import React from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [data, setData] = React.useState([]);
	const [num, setNum] = React.useState(1);
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/users?page=' + num)
			.then((res) => res.json())
			.then((data) => {
				setData([...data.data]);
			});
	}, [num]);

	return (
		<>
			<div className='container'>
				<h1 className='users__heading'>Users</h1>

				<ul className='users__list'>
					{data.length > 0 &&
						data.map((row) => (
							<li className='users__item' key={row.id}>
								<img
									className='item-user__img'
									src={row.avatar}
									alt={`${row.first_name}  ${row.last_name} img`}
									width='128'
									height='128'
								/>
								<h3 className='item-user__name'>{`${row.first_name}  ${row.last_name}`}</h3>

								<button
									className='item-user__btn'
									onClick={() => navigate('/users/' + row.id)}>
									More info
								</button>
							</li>
						))}
				</ul>

				<div className='controller'>
					<button
						className='back-btn'
						onClick={() => {
							setNum(num - 1);
						}}>
						Back
					</button>
					<button
						className='next-btn'
						onClick={() => {
							setNum(num + 1);
						}}>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
