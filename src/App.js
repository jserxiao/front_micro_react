import './App.css';

const link = (path) => {
  window.open(path);
};
const docLink = 'https://docs.qq.com/doc/DZU11WXFheXBJcmFL?layoutKey=newdoc&createInMall=true&disableFilter=true&folder=&is_panel=1&panel_key=29c5da37528bde745e50babdec8e2169&panel_type=doc&panel_connection_type=2&is_preload=0&fromPage=doc_list_new&create_type=2&aid_position=templatemall&aid_pos=templatemall';
function App() {
  return (
    <div className="SubappReact">
      <header className="SubappReact-header">
        <span className="SubappReact-link" onClick={() => link(docLink)}>前端知识框架</span>
      </header>
    </div>
  );
}

export default App;
