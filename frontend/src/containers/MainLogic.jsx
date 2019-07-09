import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

import BudgetProgressBar from "../data/BudgetProgressBar";
import CostHeader from "../data/CostHeader";
import DataTable from "../data/DataTable";
import ItemInputForm from "../components/forms/ItemInputForm";

class MainLogic extends React.Component {
  state = {
    sales_tax_rate: 0.07,
    subTotal: 500,
    taxAmount: 35,
    totalCost: 535
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
            <br />
            <CostHeader
              totalCost={this.state.totalCost}
              subTotal={this.state.subTotal}
              taxAmount={this.state.taxAmount}
            />
            <Container>
              <DataTable />
            </Container>
            <Container>
              <BudgetProgressBar />
            </Container>
            <Container>
              <ItemInputForm />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MainLogic;
