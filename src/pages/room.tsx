import { Navigate, useParams } from 'react-router';

interface RoomParams {
	roomId: string;
}
export function RoomDetails() {
	const params = useParams<RoomParams>();

	if (!params.roomId) {
		return <Navigate to="/create-room" replace />;
	}

	return (
		<div>
			<h3>Room Details</h3>
			{JSON.stringify(params.roomId)}
		</div>
	);
}
