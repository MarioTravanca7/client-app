import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActiivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  TransfActivities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}

export default function ActivityDashboard({
  TransfActivities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActiivityList
          activities={TransfActivities}
          selectActivity={selectActivity}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && 
        <ActivityDetails activity={selectedActivity}  cancelSelectActivity={cancelSelectActivity }/>}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}

// apanhamos as "activities" no App.tsx vindas do backend
//depois temos que passar para esta file - e é o App.tsx que chama, também esta file
// Aqui cria-se a interface para receber o array Actividades
// e no cabeçalho da função recebemos os dados
// o atributo desta interface tem de ter o mesmo nome do que na outra função que chama esta
// e que envia os dados
