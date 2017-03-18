import React, {Component} from 'react';
import FoodStore from './FoodStore.js';

const titleStyle = {
    padding: 7,
    fontFamily: "Arial",
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    textAlign: 'center',
    width: 250
};

const buttonStyle = {
    margin: 7,
    borderWidth: 1,
    //borderColor: 'red',
    //borderStyle: 'solid'
};

const nameStyle = {
    margin: 7,
    fontFamily: "Arial",
    borderWidth: 1,
    //borderColor: 'red',
    //borderStyle: 'solid'
};

const originStyle = {
    margin: 7,
    fontFamily: "Arial",
    borderWidth: 1,
    //borderColor: 'red',
    //borderStyle: 'solid'
};

const ingredientsStyle = {
    margin: 2,
    fontFamily: "Arial",
    borderWidth: 1,
    //borderColor: 'red',
    //borderStyle: 'solid'
};

const directionsStyle = {
    margin: 7,
    fontFamily: "Arial",
    borderWidth: 1,
    //borderColor: 'red',
    //borderStyle: 'solid'
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: [],
            numOfFood: 0,
            ingredientFilterText: ''
        };
    }

    /*componentWillMount() {
        FoodStore.listFood().then(foodList => {

            const randomizedList = this._randomizeList(foodList);

            this.setState({foodList: randomizedList});
        });
    }*/

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

    _onGenerateClick() {

        FoodStore.listFood().then(foodList => {

            const totalIngredients = foodList.ingredients;

            this.setState({foodList: totalIngredients});
        });
    }

    _renderTotalIngredients(food) {
        return (
            <div key={food.getID()}>
                <ul style={ingredientsStyle}>
                    <li>{food.ingredients.quantity + " " + food.ingredients.unit + " " + food.ingredients.name}</li>
                </ul>
            </div>
        )
    }

    _renderRecipe(food) {
        return (
            <div key={food.getID()}>
                <div>
                    <span style={nameStyle}>{food.getName()}</span>
                    <span style={originStyle}>{food.getOrigin()}</span>
                </div>
                <div>
                    {food.getIngredients().map(this._renderIngredients.bind(this))}
                </div>
                <div>
                    {food.getDirections().map(this._renderDirections.bind(this))}
                </div>
            </div>
        );
    }

    _renderIngredients(ingredient) {
        return (
            <div key={ingredient.name}>
                <ul style={ingredientsStyle}>
                    <li>{ingredient.quantity + " " + ingredient.unit + " " + ingredient.name}</li>
                </ul>
            </div>
        )
    }

    _renderDirections(direction) {
        return (
            <div style={directionsStyle}>{direction}</div>
        )
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

        return (
            <div>

                <div style={titleStyle}>My Recipe App</div>

                <input style={buttonStyle} type="text" value={this.state.ingredientFilterText} onChange={this._onChange.bind(this)} placeholder="Search Country e.g China"></input>

                <button style={buttonStyle} onClick={this._onMinusClick.bind(this)}>&#8722;</button>
                <span style={{
                    margin: 5,
                    fontFamily: "Arial"
                }}>{this.state.numOfFood}</span>
                <button style={buttonStyle} onClick={this._onPlusClick.bind(this)}>&#43;
                </button>

                <button style={buttonStyle} onClick={this._onRandomizeClick.bind(this)}>
                    Randomize
                </button>

                <button style={buttonStyle} onClick={this._onGenerateClick.bind(this)}>
                    Generate Ingredients
                </button>

                <div>{this.state.foodList.map(this._renderRecipe.bind(this))}</div>
            </div>
        );
    }
}
