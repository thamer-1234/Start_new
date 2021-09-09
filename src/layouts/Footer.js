import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Saudi Arabia,
                            <br />
                            
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/thamer-1234/React-bootstrap"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/thmoor20"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://"><i className="fab fa-fw fa-telegram-plane"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Bootcamp</h4>
                        <p className="lead mb-0">
                            This is a task in Fahad React Bootcamp
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy 2021; <br/> Support: 0559944288 <br/> Email:th.sahbi@gmail.com</small></div>
        </div>
            </div>
        )
    }
}
