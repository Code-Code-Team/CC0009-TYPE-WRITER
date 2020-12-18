import { blink } from 'global-prefix';
import Typist from 'react-typist';
import './App.css';

function App() {
  const docs = '//github.com/jstejada/react-typist';
	return (
		<div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingDelay={100}
          startDelay={2000}
          cursor = {{blink: true, element : '@'}}
          // onTypingDone={this.onHeaderTyped}
        >
          <a href={docs}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam itaque ut nemo expedita adipisci earum veniam minima corrupti, praesentium suscipit porro. A molestiae quisquam, exercitationem iste impedit minima quasi soluta sed facere eum est asperiores, laboriosam, tempora tempore inventore numquam provident error! Accusantium a quo soluta? Perferendis beatae ut aperiam!</a>
        </Typist>
        <hr/>
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
              * Easy to use backp<Typist.Delay ms={500} />sace
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              space
              <Typist.Delay ms={1250} />
              <br />
              <span>* <a href={docs} className="flash">docs</a></span>
              <br />
              {''}
            </Typist>
         
        </div>
      </div>
	);
}

export default App;
