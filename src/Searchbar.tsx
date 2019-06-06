import React from 'react';
import List from './List';

export interface Props {
    list?: string[]
}

export interface State {
    list: string[]
}

class SearchBar extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            list: [
                "go to the store",
                "wash the dishes",
                "Learn some code",
            ]
        }

    }

    addItem(e: any): any{
        e.preventDefault();

        let list = this.state.list;

        const newItem = document.getElementById("addInput") as HTMLInputElement;
        const form = document.getElementById("addItemForm") as HTMLFormElement;

        if (newItem.value != "") {
            // Add the new item to the end of our list array
            list.push(newItem.value);
            // Then we use that to set the state for list
            this.setState({
              list: list
            });
            // Finally, we need to reset the form
            newItem.classList.remove("is-danger");
            form.reset();
        } else {
        // If the input doesn't have a value, make the border red since it's required
            newItem.classList.add("is-danger");
        }
    }

    removeItem(item: string){
        const list = this.state.list.slice();
        list.some((value, index) =>{
            if(value === item){
                list.splice(index, 1);
                return true;
            }
            else{
                return false;
            }
        })

        this.setState({list: list});
    }

    public render() {
        return(
            <div className="content">
                <div className="container">
                    <section className="section">
                    <ul>
                        {this.state.list.map((item: string) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </section>
                    <hr />
                    <section className="section">
                        <form className="form" id="addItemForm">
                            <input type="text" className="input" id="addInput" placeholder="Something that needs to be done..." />
                            <button className="button is-info" onClick={(e) => this.addItem(e)}>
                            Add Item
                            </button>
                        </form>
                    </section>
                    <hr />
                    <section>
                        <List items={this.state.list} delete={(item) => this.removeItem(item)}/>
                    </section>
                </div>
            </div>
        )
    }
}

export default SearchBar