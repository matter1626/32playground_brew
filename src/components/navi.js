import Result from './result';
import Generator from './questionGenerator';
import About from './about';

const navi = [
            {path: '/results',  name:"results", element:<Result/>,      isPrivate:true},
            {path: '/test',     name:"test",    element:<Generator/>,   isPrivate:true},
            {path: '/about',    name:"about",   element:<About/>,       isPrivate:false}
        ]

export default navi;