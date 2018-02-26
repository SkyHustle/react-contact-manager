import React from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ContactList({contacts, deleteContact}){

  const rows = () => {
    return contacts.map(contact => {
      return (
        <Table.Row
          key={contact._id}>
          <Table.Cell collapsing>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>{ contact.name.first }</Table.Cell>
          <Table.Cell>{ contact.name.last }</Table.Cell>
          <Table.Cell>{ contact.phone }</Table.Cell>
          <Table.Cell>{ contact.email }</Table.Cell>
          <Table.Cell>
            <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button basic color="red" onClick={() => deleteContact(contact._id)} >Delete</Button>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  const TableExampleFullWidth = () => (
    <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Phone Number</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows()}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='6'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Add Contact
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )

  return (
    <div>
      { TableExampleFullWidth() }
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
}