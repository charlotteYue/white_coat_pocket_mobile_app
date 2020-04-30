import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class ResourcesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceList: {
        name: 'Healthcare Services',
        resources: [
          'Insurance Navigation',
          'Free Clinics',
          'Prescriptions',
          'Low Cost Primary Care',
        ],
      },
      showName: false,
    };
  }
  renderCategory() {
    console.log('here');
    console.log(this.showName);
    if (this.showName === false || this.showName === undefined) {
      this.showName = true;
      return <Text style={styles.Title}>{this.state.resourceList.name}</Text>;
    } else {
      return null;
    }
  }
  render() {
    console.log('here');
    console.log(this.state.resourceList.resources);
    return this.state.resourceList.resources.map((item, index) => {
      console.log(item);
      console.log(index);
      return (
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://www.pikpng.com/pngl/m/170-1708125_medical-icon-png-medical-icon-clipart.png',
            }}
            style={styles.photo}
          />
          <View style={styles.container_text}>
            <Text style={styles.title}>{item}</Text>
          </View>
        </View>

        // <View style={styles.container}>
        //   <View>{this.renderCategory()}</View>
        //   <View style={styles.item}>
        //     <Text style={styles.Text}>{item}</Text>
        //   </View>
        // </View>
      );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  photo: {
    height: 60,
    width: 60,
  },

  Title: {
    marginTop: 20,
    fontSize: 30,
  },
  //   container: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     padding: 10,
  //     marginTop: 10,
  //   },

  //   Text: {
  //     fontSize: 20,
  //     textAlign: 'center',
  //     justifyContent: 'center',
  //   },
  //   item: {
  //     flex: 1,
  //     margin: 20,
  //     width: '80%',
  //     padding: 10,
  //     borderRadius: 10,
  //     borderWidth: 1,
  //     borderColor: '#1e90ff',
  //     height: 80,
  //     textAlign: 'center',
  //     justifyContent: 'center',
  //     shadowOffset: {width: 10, height: 10},
  //     shadowColor: 'black',
  //     shadowOpacity: 1.0,
  //     shadowRadius: 8,
  //   },
});

export default ResourcesList;
