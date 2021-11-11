import React from 'react';
import Home from '../../Components/Home/Home';
import { Routes, Route , Navigate } from 'react-router-dom';
import UserSingle from '../../Components/UserSingle/UserSingle';

function AllUsers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/users' />} />
				<Route path='/users' element={<Home />} />
				<Route path='/users/:id' element={<UserSingle />} />
			</Routes>
		</>
	);
}

export default AllUsers;
