import Typist from 'react-typist';
import './App.css';

function App() {
	const docs = '//github.com/jstejada/react-typist';
	return (
		<div className="TypistExample">
			<Typist
				className="TypistExample-header"
				avgTypingDelay={80}
				startDelay={2000}
				cursor={{
					show: true,
					blink: true,
					element: '|',
					hideWhenDone: true,
					hideWhenDoneDelay: 1000,
				}}
			>
				<h1>Typist Examples</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
					itaque ut nemo expedita adipisci earum veniam minima corrupti,
					praesentium suscipit porro. A molestiae quisquam, exercitationem iste
					impedit minima quasi soluta sed facere eum est asperiores, laboriosam,
					tempora tempore inventore numquam provident error! Accusantium a quo
					soluta? Perferendis beatae ut aperiam!
				</p>

				<a href={docs}>Click here to see official document</a>
			</Typist>
			<hr />
			<div className="TypistExample-content">
				<Typist
					className="TypistExample-message"
					cursor={{ hideWhenDone: true }}
				>
					* Easy to style
					<Typist.Delay ms={1250} />
					<br />
					* Easy to customize
					<Typist.Delay ms={1250} />
					<br />
					* Easy to use backp
					<Typist.Delay ms={500} />
					sace
					<Typist.Backspace count={5} delay={1000} />
					<Typist.Delay ms={750} />
					space
					<Typist.Delay ms={1250} />
					<br />
					<span>
						*{' '}
						<a href={docs} className="flash">
							docs
						</a>
					</span>
					<br />
					{''}
				</Typist>
			</div>
		</div>
	);
}

export default App;
