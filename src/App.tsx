import { ResumeProvider } from './context/ResumeContext';
import { Header } from './components/layout/Header';
import { SplitView } from './components/layout/SplitView';
import { Editor } from './components/editor/Editor';
import { Preview } from './components/preview/Preview';

function App() {
  return (
    <ResumeProvider>
      <Header />
      <SplitView
        editor={<Editor />}
        preview={<Preview />}
      />
    </ResumeProvider>
  );
}

export default App;
