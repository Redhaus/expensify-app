// Installed Yarn Globally
// Installed Live-Server Globally

// Built html file and built server by calling

// $ live-server folderName

App.js / src

// place app template into var
var template = <p> This is app.js </p>

// find element in html where app will be placed
var appRoot = document.getElementById('app');

// send both template and location to render method
ReactDOM.render(template, appRoot);


Terminal 
yarn init // answer questions
//>>creates package.json
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
//>>adds dependencies to project


app.js in src folder will contain jsx
app.js in scripts folder will contain the compiled babel javascript code

Babel Command to compile code

////What you want to compile, --output-file path, --presets to use... --watch to automate it
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 


If NODE MODULES ARE DELETED OR MESSED UP
yarn install will look at package.json and reinstall them

// {} brackets can contain, jsx, text, numers, functions, turnary operators, logic operators && or ||

Example     

<div>
<h1>{user.name ? user.name : "anonomous"}</h1>// turnary expression checks 2 things
{user.age >= 18 && <p>Age: {user.age}</p> } // checks 1 thing
{getLocation(user.location)} // more robust returns
</div>

// react only renders elements that have been updated, by comparing js obects that is what is mean by shadow dom


ReactDOM Events available
https://reactjs.org/docs/events.html


JSX Supports strings numbers, functions, arrays, 
ignores, boolen, null and undefined. 


COMPONENTS ARE JUST ES6 Classes that extends React.COMPONENTS

All components must have a render method
Finally Component Class element must be added to JSX to be rendered 


NEST COMPONENTS

// PROPS 
// allows components to talk to one another
// pass data in when initalize a componet
// Props can be passed in with key value pairs on tag
// <Header title="test value"/>
// Each component has its own prop that is referenced by
// this.props




UNDERSTADING BIND()

// bind method is available on functions that allows you to send the context
// of the scope to the function via the first param in bind(obj) or bind(this)

// Context of a class or object does not get transfered to the function 
// when the function is called. IN order to provide that context the class reference
// of this, or the object or class name is required. 

  // the bind(this) gives this scope access inside of fucntions that can then
        // access props and other elements of the class

        // regular functions have this undefined by default


        function func(){
            console.log(this);
        }

        // returns undefined

        const obj = {
            name:'Vikram',
            getName(){
                return this.name;
            }
        }

        const getName = obj.getName // returns error cant get prop
        const getName = obj.getName.bind() // returns error cant get prop same as above
        const getName = obj.getName.bind(obj); // returns vikram because scope of getName is provided
        const getName = obj.getName.bind({name: 'benny'}); // returns benny because new scope is given via bind to provide name property that is return in getName()
        
        // We lose this binding with eventhandlers 
        // bind(this) helps to restore that binding

        console.log(getName());
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind



        // STATE

        Component state allows our componets to manage data 
        like an object with key value pairs
        Once state data changes, the component will rerender with those changes

        Step 1
        // To set up state provide a default set of values
        default state object:

        {
            count:0;
        }

        Step 2
        Componet is rendered with default state values automatically

        Step 3 state changes based on event click, network event etc

        step 4 application rerender automatically with new state values

        step 5 process starts over


        this.setState recieves a function that returns and object
        // Inside set state we have access to state via param state
        // this allows us to access state inside return object 


        this.setState( (state) => {
            return {
                count: state.count + 1
            };
        })


     // required setup to overide constructor 
        // constructor has props passed in by default
        // super(props) gives us access to this.props
        constructor(props){
            super(props); 

            // this sets up function to have full scope of class 
            // without having to set it up everytime it is calledl
            this.handleRemoveAll = this.handleRemoveAll.bind(this);

        }



        // TWO WAY COMPONENT COMMUNICATION



        // PROPS are passed one way from parents to children
        // To change data state, from a child component you create a function on parent state.
        // Pass function as props to child components
        // call function via props 


        Props vs State

        Props                                   State
        an object                               an object
        Can be used when rendering component    Can be used when rendering component    
        Changes cause rerender                  changes cause rerender 
        Can only be changed from parent         Can be changed with setState()
        Props defined in parent                 State defined in component
        Can't be changed by component itself    Can be changed in component 
                                                state can be used to set option props


        Class based components vs stateless functional components 


        Stateless functional componets are just concerned with presenting information
        and they are not concerned with managing state


        // Syntax
        // Stateless functional components are just like render methods in class componets
        //Stateless functional components are faster and don't carry overhead of class based components
      
        
// Stateless functional component allows for props
// No access to this but props are passed to component via first param
// so to referece props you props.name 
// class based components would be this.props.name
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};



// ReactDOM.render( <IndecisionApp/> , document.getElementById('app'));

ReactDOM.render( <User name="Andrew" age="39"/> , document.getElementById('app'));


// Components can be classes or functions 


// LIFECYCLE METHODS
class component methods that give additional functionality to class components
like 

when component mounts
componentDidMount() {
    

}

componentDidUpdate(prevProps, prevState){
    this.state
    // this.props available but so are prevProps and PrevState

}

componentWillUnmount() {
    // when component leaves
}

when component updates


// LOCAL STORAGE Local storage only works with strings
// It will convert even numbers to strings
localStorage.setItem('name', 'ben')
localStorage.getItem('name');

// Converts objects to strings with stringify and back to object or array with parse
const json = JSON.stringify({age:26});
JSON.parse(json)

// WEB PACK//////
// Asset / module bundling
// allows to break up app into multiple files
// add dependencies to app
// Import and export usage

// Avoid installing global 

Installing Babel and Live server locally 
$ yarn add live-server babel-cli@6.24.1


set up package  

"scripts": {
    "serve":"live-server public/",
    "build":"babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch"
  },


//   yarn run serve ------starts server
// // yarn run build -------starts webpack 

// Named Exports
// All vars in each document are scoped locally and 
// in order to not polute the global namespace with web pack you need to 
// import them with new namespaces 
// via named exports and import syntax 
export { square, add }
import { square, add }

// Alternative export approach 
export const square = (x) => x * x;
export const add = (a,b) => a + b;
const subtract = (a,b) => a-b;


// Default Exports

export default subtract;
export { square, add, subtract as default } 
import subtract, { square, add } from './utils'
import subtract from './utils'
// name of default export can also be changed
// default is not in curly braces for import


// THIRD PARTY LIBS
validator 

// loaders 
yarn add babel-core@6.25.0 b
abel-loader@7.1.1

// in webpack config
// console.log(path.join(__dirname, 'public'));
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

// module sets up rules 
// rules tells it to use loader we installed babel-loader
// test for js files with regular expression
// exclude all node modules and node js files

// .babelrc file tells babel to use env and react as compile conversions

WEBPACK server
yarn add webpack-dev-server@2.5.1

// WEBPACK DEV TOOLS in config
devtool: 'cheap-module-eval-source-map'


still need to run yarn run build to get bundle.js file. 
yarn run dev-server only creates a virtual bundle.js file on web server to keep it snappy

set up class plugin
yarn add babel-plugin-transform-class-properties@6.24.1

then add stuff to babelrc

this plugin allows for properties to be added to classes not in functions
without constructor 


class OldSyntax {
    constructor(){
        // super(props);

        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return `hi. my name is ${this.name}`
    }

}
const oldSyntax = new OldSyntax();
const getter = oldSyntax.getGreeting;
console.log(getter());
    
    
class NewSyntax {
    name = 'bob';
    getGreeting = () => {
        return `hi my name is ${this.name}`;
    }

}
const newSyntax = new NewSyntax();
const newGreet = newSyntax.getGreeting;
console.log(newGreet());




// CHILDREN PROP///////////////


const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
            
        </div>
    )
}
// if you place jsx between the open and closing component tag 
// that is passed to props.children
ReactDOM.render( (
    <Layout> 
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>

    </Layout> 
    ), document.getElementById('app'));
    

set up SASS SCSS 
yarn add sass-loader node-sass
Add loaders to webpack config 

// You can create settings files to create reusable vars



EXPENSIFY

REACT ROUTER
yarn add react-router-dom@4.2.2
import { BrowserRouter, Route } from 'react-router-dom';
// react router gives props for each route History, Location, Match



REDUX

COmponent state issues in complex state situations
State is data that changes 
Both track changing data

simple app indecision app
expensift app complex 

simple apps that are hieracal component state works fine, however it doesn't allow for components to be truely reusable
Complex apps that arent hierachial need to use redux is a state manager 

WHAT IS REDUX
Redux Store is just a state container object
EAch component can fetch data from store and change data in store. 
with redux each component can determine what data it needs and what data it needs to change. 


OBJECT DESTRUCTURING

// const person = {
//     name: 'Benjamin',
//     age: 39,
//     location: {
//         city: 'Portland',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;

// // Object destructuring for ES6 syntax pulls items off object
// // vars can be renamed via temp: temperature
// // defaults can be set up with equals if not available
// const { name = 'anon', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// // console.log(`It's ${person.location.temp} in ${person.location.city}`);
// console.log(`It's ${temperature} in ${city}`);


// Array Spread Operator 

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
//filter through every item in array, if items id, does not = action expense id 
// keep it in the array, if it matches remove item in array
        case 'REMOVE_EXPENSE':
            // console.log(action.expense.id);
            return state.filter( (item) => item.id !== action.id )

        default:
            return state;
    }
}





// Object Spread Operator 
Can overright 

const user = {
    name: 'Jan',
    age: 24
}

console.log({
    ...user, 
    location: 'Portland',
    name: 'Benjamin'
});
// console.log(user);



// HIGHER ORDER COMPONENTS 

// HIGHER ORDER COMPONENT (HOC) 
// a component that renders another ordinary component
// BENEFITS
// reuse code
// render hijacking
// prop manupulation
// abstrat state

import React from 'react';
import ReactDOM from 'react-dom';

// Standard Component
const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>This info is: {props.info}</p>
    </div>
);

// Create a function that accepts component param and returns modified component
// Pass in props with spread operator 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info: Don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <div><h3>Hi {props.info}</h3> <WrappedComponent {...props}/> </div>: <p>Please login </p>}
        </div>
    )
}

// Assign return function value to const
const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info);




// Render and pass in props as needed
// ReactDOM.render( <AdminInfo isAdmin={false} info="Benjamin"/>, document.getElementById('app'));
ReactDOM.render( <AuthInfo isAuthenticated={true} info="Benjamin"/>, document.getElementById('app'));




// ---------------

// React-Redux provides two items A named component Provider for store
// and a connect function that connects components to that provider store

// Provider allows us to provide the store to all of the components that make up the application



// HOW CONNECT WORKS INSIDE COMPONENTS

// const for HOC similar, connect returns a function, 
// like the function we created for HOC's pass connect return the component
const ConnectedExpenseList = connect( (state) => {
    // console.log(state);
    return {
        expenses: state.expenses
    }

})(ExpenseList);

export default ConnectedExpenseList;



// OMore common syntax

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

// const for HOC similar, connect returns a function, 
// like the function we created for HOC's pass connect return the component
export default connect(mapStateToProps)(ExpenseList);



Controlled Input when form field values are controlled by store data


// MOMENT IS AWESOME JS DATE LIBRARY
// for getting and formatting date

// import moment from 'moment';
// // https://momentjs.com/

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));


// REACT DATES is awesome AIR BNB react calendar plugin that has a lot of functionality 
// import { SingleDatePicker } from 'react-dates';



// JEST TESTING
// Setting up individual test cases 
yarn test -- --watch


// Beset for react testing

const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

// always pass string for first param, and function for second
// test is a built in function for jest

test('should add two numbers', () => {
    const result = add(3,4);

    expect(result).toBe(7);
    // if(result !== 7){
    //     throw new Error('you added nums, result was ${result}, expected 7')
    // }
});

test('should be greeting with name', () => {
    const greeting = generateGreeting('Benjamin');
    expect(greeting).toBe('Hello Benjamin!');
});

test('should be contain name', () => {
    const greeting = generateGreeting('Benjamin');
    expect(greeting).toContain('Benjamin');
});


// GIT LEARNING/////////////////////////

Set up or initalize repository to get started 
Each repository is a saved version of your project

Process
1. untracked files
2. unstages changes
3. staged changes
4. commit

Uncommitted files 
untracked files =>  getAdd command => Staged Changes => getCommit command 

Previously committed files
unstaged changes => Staged changes => Commits   


commandline
git init // sets up folder 
git status //shows untracked files 
git add <filename> // adds files and folders you want
git add . // ads all files in folder 
set up .gitignore and put in there what you don't want tracked. 
// -m for message of readable commit reason
git commit -m "Initial commit" or "bug fixed" or "feature addded"

// working state is clean is because all working files are committed to git


// look for ssh keys
// // ls -a ~/.ssh

// git hub setup guide
// https://help.github.com/articles/connecting-to-github-with-ssh/

create ssh keys 
// -t = type rsa is standard    -b = bit size use 4096 -C sign with email 
ssh-keygen -t rsa -b 4096 -C "ben.read@redhausdesign.com"

// get ssh agent running
eval "$(ssh-agent -s)"

// provide the private file to the agent 
ssh-add ~/.ssh/id_rsa

// copy contents of RSA public file to clipboard 
pbcopy < ~/.ssh/id_rsa.pub

// make ssh connection to github servers
ssh -T git@github.com

// set up connection to specific repository . git remote repository get ssh link from repo page
// origin is branch
git remote add origin git@github.com:Redhaus/expensify-app.git

git remote // show origin
git remote -v //= for verbose 

// push files to repository -u for upstream, origin is remote name 
git remote -u origin master


// WEBPACK PRODUCTION BUILD////////////////////////

webpack.js.org guides 

// run production version that gives different sources
yarn run build:prod