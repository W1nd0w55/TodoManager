import Card from '../components/Card';
import ButtonLikeLink from '../components/ButtonLikeLink';

export default () => {
	return <Card>
		<h2 style={{ marginTop: 0 }}>Plan your day like never before.</h2>
		<p>With TodoManager, you can manage tasks,<br />
		and track the amount of work you've done.</p>
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
			<ButtonLikeLink href="/login">Log In</ButtonLikeLink>
			<ButtonLikeLink href="/signup">Sign Up</ButtonLikeLink>
		</div>
	</Card>;
};