import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../../actions';
import { Card, CardSection, Input, Button } from '../common';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props.employee;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.employee.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.employee.phone}
            onChangeText={text =>
              this.props.employeeUpdate({
                prop: 'phone',
                value: text
              })
            }
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerTextStyle}>Select Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.employee.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button title="Save" onPress={this.onButtonPress} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flexDirection: 'column',
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  return {
    employee: state.employeeForm
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
);
