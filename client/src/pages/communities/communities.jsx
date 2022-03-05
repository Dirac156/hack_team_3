import React from "react";
import SideBar from "../../components/sidebar/sidebar.component";
import "./styles.css";

const Communities = () => {
    const [state, setstate] = React.useState({
        isModel: false
    })
    const openModel = () => {
        setstate({ isModel: !state.isModel})
    }
    return (
        <div className="home-page">
            {/* <AppBarCompoent /> */}
            <div className="row">
                <div className="col-auto">
                    <SideBar page="room"/>
                </div>

                <div className="col">
                    <div className="content">
                        <h2 className="secondary-header capitalize mb-0">Hello Dirac</h2>
                        <p className="text-paragraph color-grey">In publishing and graphic design, Lorem ipsum is a placeholder</p>

                        <div className="row mt-5">
                            <div className="col-md-3">
                                <span className="" onClick={() => openModel()}>Create Room</span>
                            </div>

                            <div className="col-md-3">
                                <span className="" onClick={() => openModel()}>Create Event</span>
                            </div>

                            
                            <div className="col-md-3">
                                <span className="" onClick={() => openModel()}>View Members</span>
                            </div>

                            
                            <div className="col-md-3">
                                <span className="" onClick={() => openModel()}>Create Event</span>
                            </div>
                        </div>

                        <div className="row mt-5">
                        <p className="text-paragraph color-grey">List of communities</p>
                            <div className="col">
                                <ol class="list-group list-group-numbered bg-dark">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Cras justo odio
                                        </div>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communities;