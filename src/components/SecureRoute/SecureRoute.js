import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const SecureRoute = ({ children, ...rest }) => {
    const { userProfile, isLoading } = useAuth()
    if (isLoading) {
        return <section className="hero-banner" id="home-section">
            <div className="container">
                <div className="row">
                    <img style={{ width: "300px" }} src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif" className="rounded mx-auto d-block" alt="..." />
                </div>
            </div>
        </section>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userProfile?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default SecureRoute;