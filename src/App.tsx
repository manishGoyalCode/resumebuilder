import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { SplitView } from './components/layout/SplitView';
import { Editor } from './components/editor/Editor';
import { Preview } from './components/preview/Preview';

function App() {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <div className="app-container">
          <Header />
          <SplitView
            editor={<Editor />}
            preview={<Preview />}
          />
        </div>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
