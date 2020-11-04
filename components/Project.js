class Project extends React.Component {
    state = {
        tags : [
            {id: 0, title: 'responsive'},
            {id: 1, title: 'mobile'},
            {id: 2, title: 'web'},
            {id: 3, title: 'javascript'},
            {id: 4, title: 'html'},
            {id: 5, title: 'flutter'},
        ],
        selectedTagIndex : 0
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
            </div>
        );
    }
}

const ProjectHeader = (props) => {
    const {tagClick, tags, selectedIndex} = props;
    const tagList = tags.map(tag => {
        return selectedIndex === tag.id ? (
            <span class="project-tag" onClick={() => {tagClick(tag.id)}} key={tag.id} active>{tag.title}</span>
        ) : <span class="project-tag" onClick={() => {tagClick(tag.id)}} key={tag.id} active>{tag.title}</span>
    });
    return (
        <div class="card card--project">
            Projects (4)
            <div class="card--project-tags">
                {tagList}
            </div>
      </div>
    );
}



const element = <React.StrictMode><Project /></React.StrictMode>;
ReactDOM.render(element, document.querySelector('.project'));