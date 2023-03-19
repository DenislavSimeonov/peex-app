import Card from 'components/Card';
import 'global/styles/index.scss';

const App = () => (
  <div>
    <Card type='primary'>
      <Card type='secondary' title='Secondary Card'>
        Secondary Card Content
      </Card>
    </Card>
  </div>
);

export default App;
