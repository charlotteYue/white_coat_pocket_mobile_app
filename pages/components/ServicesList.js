import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListAccordion, ListItem, Checkbox} from 'react-native-paper';

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceList: {
        resources: 'Insurance Navigation',
        list: [
          {
            name: 'HealthSource RI Hotline',
            contact: '(855)-840-4774',
            organization: 'Official Marketplace for RI Health Insurance',
          },
          {
            name: 'Providence Community Health Centers',
            contact: '444-0400',
            organization: 'In-person Support',
          },
          {
            name: 'RIH Office of Patient Advocacy',
            contact: '444-5817',
            organization: 'Patient Representatives',
          },
        ],
      },
      showName: false,
    };
  }
  renderCategory() {
    if (this.showName === false || this.showName === undefined) {
      this.showName = true;
      return (
        <Text style={styles.Title}>{this.state.resourceList.resources}</Text>
      );
    } else {
      return null;
    }
  }
  render() {
    return this.state.serviceList.list.map((item, index) => {
      console.log(item);
      console.log(index);
      return (
        <ListAccordion title={item.name} icon="folder">
          <ListItem title={item.contact} />
          <ListItem title={item.organization} />
        </ListAccordion>
      );
    });
  }
}

const styles = StyleSheet.create({
  Title: {
    marginTop: 20,
    fontSize: 30,
  },
});

export default ServiceList;
