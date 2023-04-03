import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import path from "./constants/path";
import { Navigation } from "./components/index";
import { SignUpPage, LoginPage } from "./pages";
import PrivateRoute from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "./utils/axios";
import { updateUser } from "./redux/user/user.reducer";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        (async function () {
            try {
                const { data: response } = await axios.get("/user/session");
                console.log(response.user);
                dispatch(updateUser(response.user));
            } catch (err) {
                dispatch(updateUser({}));
            }
        })();
    }, []);

    return (
        <div className="App">
            <Navigation />
            <div className="main-section">
                <Routes>
                    <Route path={path.LANDING_PAGE} exact element={<div>LANDING PAGE</div>} />
                    <Route path={path.ALL_BLOGS} exact element={<div>Blogs</div>} />
                    {Object.keys(user).length === 0 ? (
                        <>
                            <Route path={path.LOGIN} exact element={<LoginPage />} />
                            <Route path={path.SIGN_UP} exact element={<SignUpPage />} />
                            <Route path="/*" exact element={<Navigate to={path.LANDING_PAGE} />} />
                        </>
                    ) : (
                        <>
                            <Route element={<PrivateRoute user={user} />}>
                                <Route path={path.APP} exact element={<div>APPLICATION</div>} />
                            </Route>
                            <Route path="/*" element={<Navigate to={path.APP} />} />
                        </>
                    )}
                </Routes>
            </div>
        </div>
    );
}

export default App;
