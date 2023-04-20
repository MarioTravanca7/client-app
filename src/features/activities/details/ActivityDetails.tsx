import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ImagemDefault from '../../../assets/categoryImages/food.jpg';

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
}

export default function ActivityDetails({ activity,cancelSelectActivity }: Props) {
  return (
    <Card fluid>
      <Image src={ImagemDefault} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.description}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
            <Button basic color='blue' content='Editar'/>
            <Button onClick={cancelSelectActivity} basic color='grey' content='Cancelar'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
