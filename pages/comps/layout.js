import Header from './header';

const layoutStyle = {
    margin:20,
    padding:20,
    border:'1px black solid',
}

const layout = (props) => (
    <div style={layoutStyle}>
        <Header>
        </Header>
        {props.children}
    </div>
);

export default layout;