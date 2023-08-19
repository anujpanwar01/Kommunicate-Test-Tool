import { Container } from './Editor.style';
import Env from '../../components/Env/Env';
import AppId from '../../components/AppId/AppId';
import JsonEditor from '../../components/JsonEditor/JsonEditor';
import { Outlet } from 'react-router-dom';

const Editor = () => {
  return (
    <Container>
      <Env />
      <AppId />
      <JsonEditor />
      <Outlet />
    </Container>
  );
};
export default Editor;
