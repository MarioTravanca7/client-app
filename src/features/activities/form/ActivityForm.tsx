import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm} : Props){
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.TextArea placeholder='Description' />
                <Button floated="right" positive type="submit" content="Submeter" />
                <Button onClick={closeForm} floated="right" positive type="submit" content="Cancelar" />
                
            </Form>
        </Segment>
    )
}