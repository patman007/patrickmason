import React from 'react'
import Child1 from './components/child1/Child1';
import Child2 from './components/child2/Child2';
import Child3 from './components/child3/Child3';
import Child4 from './components/child4/Child4';
import './App.css';

//Parent Functional Component
const Parent = () => (
    <div>
        <div className="card card--purple">
            <p className="card__title card__tile--lg">I am the parent component</p>
            <Child1 />
            <Child2 />
            <Child3 />
            <Child4 />            
        </div>

    </div>
)

export default Parent;