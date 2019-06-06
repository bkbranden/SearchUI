import React from 'react';

export interface ListProps{
    items: string[],
    delete(item: string): void,
}

export interface ListState{
    filtered: string[],
}

class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps){
        super(props);
        this.state = {
            filtered: [],
        }
    }

    componentDidMount(){
        this.setState({
            filtered: this.props.items,
        })
    }

    componentWillReceiveProps(nextProps: ListProps){
        this.setState({
            filtered: nextProps.items,
        })
    }

    handleChange(e: any): any{
        let currentList = [];
        let newList = [];

        if(e.target.value !== ""){
            currentList = this.props.items;
            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();

                return lc.includes(filter);
            })
        }
        else {
            newList = this.props.items;
        }

        this.setState({
            filtered: newList,
        })


    }

    render() {
        return(
            <div>
                <input type="text" className="input" placeholder="Search..." onChange={(e) => this.handleChange(e)}/>
                <ul>
                    {this.state.filtered.map((item: string) => (
                        <li key={item}>{item}  &nbsp;
                            <span className="delete" onClick={() => this.props.delete(item)}>x</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;