import Card from '../components/Card';
import '../css/Main.css';

export default () => {
	//TODO: add tailwind
	return (<Card>
		<h2 style={{ marginTop: 0 }}>Plan your day like never before.</h2>
		<p>With TodoManager, you can manage tasks,<br />
		and track the amount of work you've done.</p>
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
			<a className="btn-like-link" href="/login">Log In</a>
			<a className="btn-like-link" href="/signup">Sign Up</a>
		</div>
	</Card>);
};