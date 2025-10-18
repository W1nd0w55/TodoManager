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
				<h2>Hii</h2>
			</Card>
		</Main>
	</>);
};