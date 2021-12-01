import { RootStore } from '../../../config/redux';
import { Header } from '../../../components/moleculs/header';
import { useSelector } from 'react-redux';
import NotHeader from '../../../components/moleculs/notHeader';

const NotLogin = () => {
    const { isAuthenticated } = useSelector((state: RootStore) => state.userReducer);
    
    if(!isAuthenticated) {
        return (
            <NotHeader/>
        )
    }else{
        return(
            <Header/>
        )
    }
}

export default NotLogin;

