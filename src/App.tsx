import { Route, Routes } from 'react-router';

import { Button } from './components/ui/button';
import { CreateRoom } from './pages/create-room';
import { RoomDetails } from './pages/room';

export function App() {
	return (
		<Routes>
			<Route path="/" index element={<Button>Home</Button>} />
			<Route path="/create-room" element={<CreateRoom />} />
			<Route path="/room" element={<RoomDetails />} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	);
}
