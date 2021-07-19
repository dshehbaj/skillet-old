import React from 'react';
import Routes from './Routes';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'skillet',
        endpoint: 'https://w8zv6w6552.execute-api.us-east-1.amazonaws.com/prod',
        region: 'us-east-1',
      }
    ]
  }
})

export default function App() {
  return (
    <Routes />
  );
}

