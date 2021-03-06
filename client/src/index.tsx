import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

//Configure Apollo Client
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Initialize remote fetching
const httpLink: any = createHttpLink({
	uri: '/graphql'
});

//Initialize apollo client

const cache = new InMemoryCache();

const client: any = new ApolloClient({
	link: httpLink,
	cache: cache,
});


//Bind apollo client to application
ReactDOM.render(
  <React.StrictMode>
    	<ApolloProvider client={client}>
    		<App />
    	</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
