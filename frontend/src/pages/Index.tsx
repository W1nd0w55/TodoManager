import TopBar from '../components/TopBar.tsx';
import Main from '../components/Main.tsx';
import Card from '../components/Card.tsx';
import '../css/common.css';
import '../css/index.css';

export default () => {
	return (<>
		<TopBar />
		<Main>
			<Card>
				<h2>Plan your day like never before.</h2>
				<p>
					With TodoManager, you can organize tasks,<br />
					and track the amount of work you've done.
				</p>
			</Card>
		</Main>
	</>);
};