import React from "react";
import { connect } from "react-redux";

import { List, Label, Container } from "semantic-ui-react";

const mapStateToProps = state => {
  return { userLists: [state.userLists] };
};

const ListDataTable = ({ userLists }) => (
  <Container>
    {userLists.map(element => (
      <List key={element.id}>
        <List.Header>{element.created}</List.Header>
        {element.items.map(item => (
          <Container>
            <List.Item content={item.price} />
            <List.Item content={item.name} />
          </Container>
        ))}
      </List>
    ))}
  </Container>
);

const UserListsDataTable = connect(mapStateToProps)(ListDataTable);

export default UserListsDataTable;
