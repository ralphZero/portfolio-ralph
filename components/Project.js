class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
                { id: 0, title: 'all' },
                { id: 1, title: 'responsive' },
                { id: 2, title: 'mobile' },
                { id: 3, title: 'web' },
                { id: 4, title: 'javascript' },
                { id: 5, title: 'html' },
                { id: 6, title: 'flutter' },
            ],
            selectedTagIndex: 0,
            list: [
                { id: 0, src: 'assets/edie-homepage.jpeg', title: 'Edie Homepage', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [1, 3] },
                { id: 1, src: 'assets/interior_consultant.jpeg', title: 'Interior Consultant', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [3, 4, 5] },
                { id: 2, src: 'assets/recipe_page.jpeg', title: 'Recipe Page', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [1, 3, 5] },
                { id: 3, src: 'assets/checkout_page.jpeg', title: 'Checkout Page', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [1, 3] },
                { id: 4, src: 'assets/my_gallery.jpeg', title: 'My Gallery', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [3, 4, 5] },
                { id: 5, src: 'assets/team_page.jpeg', title: 'Team Page', desc: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ', demoLink: 'www.link.com', codeLink: 'www.link.com', tags: [1, 3, 5] }
            ],
            data: [],
            firstPosition: 0
        }
        const _list = this.generateList(this.state.firstPosition);
        this.state.data = _list;
        console.log(this.state.data);
    }
    generateList = (position) => {
        const _list = [...this.state.list].slice(position, position + 3);
        return _list;
    }
    handleTagClick = (id) => {
        console.log('you clicked : ' + id);
        this.setState({
            selectedTagIndex: id
        });
    }
    handlePageSelection = (value, index) => {
        const list = this.generateList(value);
        this.setState({
            data: list
        });
    }
    render() {
        return (
            <div>
                <ProjectHeader tags={this.state.tags} selectedIndex={this.state.selectedTagIndex} tagClick={this.handleTagClick} count={this.state.list.length} />
                <ProjectList projects={this.state.data} />
                <Pagination selectPage={this.handlePageSelection} datalength={this.state.list.length} />
            </div>
        );
    }
}

const ProjectList = ({projects}) => {
    const items = projects.map(data => {
        return (
            <div className="card project-item" key={data.id}>
                <img className="project-item-img" src={data.src} />
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
    });
    return (
        <div className="project-list">
            {items}
        </div>
    );
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        var index = [];
        for (let i = 0; i < this.props.datalength; i++) {
            if (i % 3 === 0) {
                index = [...index, i];
            }
        }
        this.state = {
            length: this.props.datalength,
            indexes: index,
            selectedPage: 1
        }
    }
    render() {
        const pages = this.state.indexes.map((value, index) => {
            let j = index + 1;
            return this.state.selectedPage === j ? (
                <button key={index} onClick={() => { this.props.selectPage(value, index) }} className="pagination pagination-number pagination-active" value={value}>{index + 1}</button>
            ) : (
                    <button key={index} onClick={() => { this.props.selectPage(value, index) }} className="pagination pagination-number" value={value}>{index + 1}</button>
                );
        });
        return (
            <div className="pagination-list">
                <button className="pagination">&larr;</button>
                {pages}
                <button className="pagination">&rarr;</button>
            </div>
        );
    }
}

const ProjectHeader = (props) => {
    const { tagClick, tags, selectedIndex, count } = props;
    const tagList = tags.map(tag => {
        return selectedIndex === tag.id ? (
            <span className="project-tag project-tag-active" onClick={() => { tagClick(tag.id) }} key={tag.id}>{tag.title}</span>
        ) : (<span className="project-tag" onClick={() => { tagClick(tag.id) }} key={tag.id}>{tag.title}</span>);
    });
    return (
        <div className="card card--project">
            {count > 1 ? ('Projects (' + count + ')') : ('Project (' + count + ')')}
            <div className="card--project-tags">
                {tagList}
            </div>
        </div>
    );
}



const element = <React.StrictMode><Project /></React.StrictMode>;
ReactDOM.render(element, document.querySelector('.project'));