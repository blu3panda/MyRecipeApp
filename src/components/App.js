import React, {Component} from 'react';
import FoodStore from './FoodStore.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: [],
            numOfFood: 0,
            ingredientFilterText: ''
        };
    }

    componentWillMount() {
        FoodStore.listFood().then(foodList => {

            const randomizedList = this._randomizeList(foodList);

            this.setState({foodList: randomizedList});
        });
    }

    _onRandomizeClick() {

        FoodStore.listFood().then(foodList => {

            const filteredList = foodList.filter((food) => {
                if (food.getOrigin() === this.state.ingredientFilterText || this.state.ingredientFilterText === '') {
                    return true;

                } else {
                    return false;
                }
            });

            const newRandomizedList = this._randomizeList(filteredList);

            this.setState({foodList: newRandomizedList});
        });
    }

    _renderRecipe(food) {
        return (
            <div key={food.getID()}>
            <div>
                <span>{food.getType()}</span>
                </div>
                <div>
                <span>{food.getOrigin()}</span>
                </div>
            </div>
        );
    }

    _shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    _randomizeList(foodList) {
        return this._shuffle(foodList).slice(0, this.state.numOfFood);
    }

    _onMinusClick() {

        if (this.state.numOfFood === 0) {
            return;
        }

        this.setState({
            numOfFood: this.state.numOfFood - 1
        })
    }

    _onPlusClick() {
        this.setState({
            numOfFood: this.state.numOfFood + 1
        });
    }

    _onChange(event) {
        const value = event.target.value;
        this.setState({ingredientFilterText: value});

        FoodStore.listFood().then(foodList => {

            const filteredList = foodList.filter((food) => {
                if (food.getOrigin() === value) {
                    return true;

                } else {
                    return false;
                }
            });

            const randomizedList = this._randomizeList(filteredList);

            this.setState({foodList: randomizedList});
        });
    }



    render() {

      var titleStyle = {
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
        textAlign: 'center',
        width: 250,
      };

      var buttonStyle = {
        margin: 5,
      }

        return (
            <div>
                <h1 style={titleStyle}>Cincai</h1>

                <input style={buttonStyle} type="text" value={this.state.ingredientFilterText} onChange={this._onChange.bind(this)} placeholder="Search">
                </input>

                <button style={buttonStyle} onClick={this._onMinusClick.bind(this)}>&#8722;</button>
                <span style={{margin:5}}>{this.state.numOfFood}</span>
                <button style={buttonStyle} onClick={this._onPlusClick.bind(this)}>&#43;
                </button>

                <button style={buttonStyle} onClick={this._onRandomizeClick.bind(this)}>
                    Randomize
                </button>

                <div>{this.state.foodList.map(this._renderRecipe.bind(this))}</div>
            </div>
        );
    }
}
