import React from "react";
import FieldCard from "./field-card.compoent";
import Input from "../input/input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./field-box.style.css";

const FieldBoxCreate = () => {
    const [state, setstate] = React.useState({
        post: "Hey..."
    })

    

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setstate({ [name] : value})
    }

    const CardHeader = () => (
        <div className="card-header mt-2 ml-2">
            <h3 className="h3-header">Create a post</h3>
        </div>
    )

    return (
        <div className="field-box mt-5">
            <FieldCard 
                cardHeader={<CardHeader />}
                cardBody={
                        <Input
                            type="text" 
                            placeholder={"Your Post"}
                            name="post"
                            value={state.post}
                            handleOnChange={(event) => handleOnChange(event)}
                            className="post field"
                        />
                    }
                cardFooter={
                    <CustomButton classes="filled">create new post</CustomButton>
                }
            />
        </div>
    )
};

export default FieldBoxCreate;