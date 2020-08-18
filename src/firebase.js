// connects entire app with DB
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAeJw2BaDnAaPQlfSlxQRNoxlX69Jt1dC8',
  authDomain: 'slack-clone-a2acc.firebaseapp.com',
  databaseURL: 'https://slack-clone-a2acc.firebaseio.com',
  projectId: 'slack-clone-a2acc',
  storageBucket: 'slack-clone-a2acc.appspot.com',
  messagingSenderId: '840304226821',
  appId: '1:840304226821:web:bca384c84fbdb36542226c',
  measurementId: 'G-MB7KLMVHTB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// access to db
const db = firebaseApp.firestore();

//preparing authentication module
const auth = firebase.auth();
// this is what u nedd to get google services for authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
