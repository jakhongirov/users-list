import React from 'react';
import './UserSingle.scss';
import { useParams} from 'react-router-dom';

function UserSingle() {
	const { id } = useParams();

	const [data, setData] = React.useState({});

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/users/' + id)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
			});
	}, [id]);

	return (
		<>
			<div className='container'>
				<h1 className='users__heading'>About User</h1>
				<div className='user__box'>
					{data && (
						<>
							<img
								className='user__img'
								src={data.avatar}
								alt={`${data.first_name} ${data.last_name} img`}
								width='128'
								height='128'
							/>
							<h2 className='user__name'>{`${data.first_name} ${data.last_name}`}</h2>

							<a className='user__link' href={`mailto: ${data.email}`}>
								{data.email}
							</a>

							<p className='user__info'>
								To keep ReqRes free, contributions towards server costs
								are appreciated!
							</p>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default UserSingle;
