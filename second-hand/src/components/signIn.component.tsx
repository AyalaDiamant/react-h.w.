import { UserContext } from "../context/user.context";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from "../data/users.json";

export const SignIn = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const connectUser = (event: any) => {
        event.preventDefault();
        const name = event.target.firstName.value;
        const id = event.target.idNumber.value;
        const userexisting = Users.find(user => user.firstName == name && user.id == id)
        if (!userexisting) {
            navigate('/sign-up');
        }
        else {
            userContext.setUser(userexisting);
            navigate('/product');
        }
    }

    return <div>
        <h1>SignIn</h1>
        <form onSubmit={connectUser}>
            <input type="text" placeholder="first name" name="firstName" /> <br /><br />
            <input type="text" placeholder="id number" name="idNumber" /> <br /><br />
            <button type="submit">Connect</button>
        </form>
    </div>
}
export default SignIn;
