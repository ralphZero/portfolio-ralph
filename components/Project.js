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
                <ProjectHeader tags={this.state.tags} selectedIndex={this.state.selectedTagIndex} tagClick={this.handleTagClick} />
                <ProjectList projectList={this.state.list}/>
            </div>
        );
    }
}

class ProjectList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: this.props.projectList
        }
    }
    render() {
        return (
            <div className="project-list">
                
            </div>
        );
    }
}

const ProjectList = (props) => {
    return (
        <div className="card">

        </div>
    );
}

const ProjectHeader = (props) => {
    const {tagClick, tags, selectedIndex} = props;
    const tagList = tags.map(tag => {
        return selectedIndex === tag.id ? (
            <span className="project-tag project-tag-active" onClick={() => {tagClick(tag.id)}} key={tag.id}>{tag.title}</span>
        ) : (<span className="project-tag" onClick={() => {tagClick(tag.id)}} key={tag.id}>{tag.title}</span>);
    });
    return (
        <div className="card card--project">
            Projects (4)
            <div className="card--project-tags">
                {tagList}
            </div>
      </div>
    );
}



const element = <React.StrictMode><Project /></React.StrictMode>;
ReactDOM.render(element, document.querySelector('.project'));