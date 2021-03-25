import Comments from './Comments';
import Form from './Form';
import StoreProvider from './stores/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <div>
        <h3>Opinie na temat naszej najnowszej książki o programowaniu autorstwa Samuraja i Domana</h3>
        <Comments />
        <Form />
      </div>
    </StoreProvider>
  );
}

export default App;