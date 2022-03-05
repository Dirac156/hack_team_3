import React from "react";
import SideBar from "../../components/sidebar/sidebar.component";
import FieldBoxCreate from "../../components/field-box/field-box-create.component";
import './home.page.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* <AppBarCompoent /> */}
            <div className="row">
                <div className="col-auto">
                    <SideBar page="home"/>
                </div>

                <div className="col">
                    <div className="content">
                        <h2 className="secondary-header capitalize mb-0">Hello Dirac</h2>
                        <p className="text-paragraph color-grey">In publishing and graphic design, Lorem ipsum is a placeholder</p>

                        <div className="row">
                            <div className="col-md-7">
                                <FieldBoxCreate />
                            </div>
                            <div className="col-md-5">
                                side
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;