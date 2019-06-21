import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

import BudgetProgressBar from "../BudgetProgressBar";
import CostHeader from "../CostHeader";
import DataTable from "../DataTable";
import ItemInputForm from "../forms/ItemInputForm";

class App extends React.Component {
  state = {
    totalCost: 100.25,
    subTotal: 50.4,
    taxAmount: 3.54
  };

  render() {
    return (
      <Grid
        stretched={true}
        container={true}
        columns={1}
        verticalAlign={"middle"}
        textAlign={"center"}
      >
        <Grid.Row>
          <Grid.Column>
            <Header>
              <br />
              <CostHeader
                totalCost={this.state.totalCost}
                subTotal={this.state.subTotal}
                taxAmount={this.state.taxAmount}
              />
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
