import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';

import { Button } from './components/ui/button';
import { CreateRoom } from './pages/create-room';
import { RoomDetails } from './pages/room';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" index element={<Button>Home</Button>} />
				<Route path="/create-room" element={<CreateRoom />} />
				<Route path="/room/:roomId" element={<RoomDetails />} />
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</QueryClientProvider>
	);
}
