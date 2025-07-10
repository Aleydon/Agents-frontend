import { Link } from 'react-router';

export function CreateRoom() {
	return (
		<div className="h-screen w-full">
			<Link className="text-white underline" to="/room">
				Acessar sala
			</Link>
		</div>
	);
}
