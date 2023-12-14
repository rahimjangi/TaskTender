import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles";

const EarningsScreen = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Grocery Delivery",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      hours: 1,
      earnings: 15.0,
    },
    {
      id: "2",
      title: "Document Courier",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      hours: 1.5,
      earnings: 20.0,
    },
    {
      id: "3",
      title: "Furniture Assembly",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      hours: 3,
      earnings: 45.0,
    },
    {
      id: "4",
      title: "Grocery Delivery",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      hours: 1,
      earnings: 15.0,
    },
    {
      id: "5",
      title: "Document Courier",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      hours: 1.5,
      earnings: 20.0,
    },
    {
      id: "6",
      title: "Furniture Assembly",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      hours: 3,
      earnings: 45.0,
    },
    // ... more tasks
  ]);
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  // Calculate the sum of earnings
  const totalEarnings = tasks.reduce((sum, task) => sum + task.earnings, 0);

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskTime}>
        Start: {item.startTime} | End: {item.endTime}
      </Text>
      <Text style={styles.taskHours}>Hours: {item.hours}</Text>
      <Text style={styles.taskEarnings}>
        Earnings: ${item.earnings.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Filter section */}
      <View style={styles.filterContainer}>
        {/* Date pickers here */}
        <TextInput
          style={styles.dateInput}
          value={fromDate}
          onChangeText={setFromDate}
          placeholder="From Date"
        />
        <TextInput
          style={styles.dateInput}
          value={untilDate}
          onChangeText={setUntilDate}
          placeholder="Until Date"
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            // Placeholder for filter logic
            console.log("Filtering tasks from:", fromDate, "to:", untilDate);
          }}
        >
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Task list */}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Summary and transfer section */}
      <View style={styles.summaryContainer}>
        <Text style={styles.totalEarningsText}>
          Total Earnings: ${totalEarnings.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.transferButton}
          onPress={() => {
            // Placeholder for transfer money logic
            console.log("Transfer money pressed");
          }}
        >
          <Text style={styles.transferButtonText}>Transfer Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the EarningsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dateInput: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  filterButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  list: {
    marginBottom: 60, // Space for summary and transfer section
  },
  taskItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskTime: {
    fontSize: 16,
    color: "#666",
  },
  taskHours: {
    fontSize: 16,
  },
  taskEarnings: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  totalEarningsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transferButton: {
    backgroundColor: "#4CAF50", // A green color for the transfer button
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch", // Make the button stretch to fill the width
    alignItems: "center",
  },
  transferButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EarningsScreen;
