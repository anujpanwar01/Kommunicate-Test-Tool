import { Container } from './Editor.style';
import Env from '../components/Env/Env';
import AppId from '../components/AppId/AppId';
import JsonEditor from '../components/JsonEditor/JsonEditor';

const Editor = () => {
  return (
    <Container>
      <Env />
      <AppId />
      <JsonEditor />
    </Container>
  );
};
export default Editor;
