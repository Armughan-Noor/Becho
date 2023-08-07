import './App.css';
import { Container, Row, Col  } from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom'
import LoginForm from './components/SignIn';
import SignUpForm from './components/SignUp';
import {UserAuthContextProvider} from '../src/context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='/' element={<LoginForm/>} />
            <Route path='/signup' element={<SignUpForm/>} />
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
