class Project extends React.Component {
    state = {
        tags : [
            {id: 0, title: 'all'},
            {id: 1, title: 'responsive'},
            {id: 2, title: 'mobile'},
            {id: 3, title: 'web'},
            {id: 4, title: 'javascript'},
            {id: 5, title: 'html'},
            {id: 6, title: 'flutter'},
        ],
        selectedTagIndex : 0,
        list: [
            {id: 0, src: 'assets/edie-homepage.jpeg', title: 'Edie homepage', desc: 'Lorem ipsum', demoLink: 'www.link.com', codeLink:'www.link.com', tags: [1, 3]},
            {id: 1, src: 'assets/interior_consultant.jpeg', title: 'Interior Consultant', desc: 'Lorem ipsum', demoLink: 'www.link.com', codeLink:'www.link.com',  tags: [3, 4, 5]},
            {id: 2, src: 'assets/recipe_page.jpeg', title: 'recipe Page', desc: 'Lorem ipsum', demoLink: 'www.link.com', codeLink:'www.link.com', tags: [1, 3, 5]}
        ]
    }
    handleTagClick = (id) => {
        console.log('you clicked : '+id);
        this.setState({
            selectedTagIndex : id
        });
    }
    render() {
        return (
            <div>
                <ProjectHeader tags={this.state.tags} selectedIndex={this.state.selectedTagIndex} tagClick={this.handleTagClick} count={this.state.list.length} />
                <ProjectList projects={this.state.list}/>
            </div>
        );
    }
}

class ProjectList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: this.props.projects
        }
    }
    render() {
        const items = this.state.list.map(item => {
            return (
                <ProjectItem data={item}/>
            );
        });
        return (
            <div className="project-list">
                {items}
            </div>
        );
    }
}

const ProjectItem = ({data}) => {
    return (
        <div className="card project-item" key={data.id}>
            <img className="project-item-img" src={data.src}/>
            <div className="project-item-group">
                <div className="project-item-img-title-group">
                    <h3 className="project-item-title">{data.title}</h3>
                    <p className="project-item-desc">{data.desc}</p>
                </div>
                <div className="project-item-links">
                    <a href={data.demoLink} className="project-item-btn">Demo</a>
                    <a href={data.codeLink} className="project-item-btn btn-white">Code</a>
                </div>
            </div>
        </div>
    );
}

const ProjectHeader = (props) => {
    const {tagClick, tags, selectedIndex, count} = props;
    const tagList = tags.map(tag => {
        return selectedIndex === tag.id ? (
            <span className="project-tag project-tag-active" onClick={() => {tagClick(tag.id)}} key={tag.id}>{tag.title}</span>
        ) : (<span className="project-tag" onClick={() => {tagClick(tag.id)}} key={tag.id}>{tag.title}</span>);
    });
    return (
        <div className="card card--project">
            {count > 1 ? ('Projects ('+count+')') : ('Project ('+count+')')}
            <div className="card--project-tags">
                {tagList}
            </div>
        </div>
    );
}



const element = <React.StrictMode><Project /></React.StrictMode>;
ReactDOM.render(element, document.querySelector('.project'));