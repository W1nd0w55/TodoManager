import Card from '../components/Card.tsx';
import ButtonLikeLink from '../components/ButtonLikeLink.tsx';

export default () => {
	return <Card>
		<h2 className="mb-5 font-bold text-[30pt]">Plan your day like never before.</h2>
		<p className="mb-5">With TodoManager, you can manage tasks,<br />
		and track the amount of work you've done.</p>
		<div className="flex flex-row justify-center gap-5">
			<ButtonLikeLink href="/login">Log In</ButtonLikeLink>
			<ButtonLikeLink href="/signup">Sign Up</ButtonLikeLink>
		</div>
	</Card>;
};