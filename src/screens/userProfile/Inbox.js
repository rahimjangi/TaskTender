// Sample data
const messages = [
  {
    id: "1",
    title: "Welcome to TaskTender!",
    body: "Thanks for joining...",
    read: false,
    archived: false,
  },
  {
    id: "2",
    title: "New Task Available",
    body: "A new task in your area asfv vwse vews rcwqamk;qwdc  qwec oiwqhc oiqwh co",
    read: true,
    archived: false,
  },
  {
    id: "21",
    title: "Reminder",
    body: "Don't forget to check your tasks...",
    read: true,
    archived: false,
  },
  // ... more messages
  {
    id: "n",
    title: "Archived Message",
    body: "This message is archived...",
    read: true,
    archived: true,
  },
];

import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

// MessageItem component to render each message
const MessageItem = ({ title, body, read, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.item,
      { backgroundColor: read ? "#fff" : "#f0f0f0" }, // Unread messages have a different background
    ]}
  >
    <View style={styles.itemContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body.substring(0, 50)}...</Text>
    </View>
  </TouchableOpacity>
);

// InboxScreen component to render the list of messages
const InboxScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a server with a timeout
    const fetchData = async () => {
      setLoading(true);
      // Simulate a server request with a timeout
      setTimeout(() => {
        // Set data from the server here
        setData([
          {
            id: "1",
            title: "Welcome to TaskTender!",
            body: "Thanks for joining...",
            read: false,
            archived: false,
          },
          {
            id: "2",
            title: "New Task Available",
            body: "A new task in your area asfv vwse vews rcwqamk;qwdc  qwec oiwqhc oiqwh co",
            read: true,
            archived: false,
          },
          {
            id: "21",
            title: "Reminder",
            body: "Don't forget to check your tasks...",
            read: true,
            archived: false,
          },
          // ... more messages
          {
            id: "n",
            title: "Archived Message",
            body: "This message is archived...",
            read: true,
            archived: true,
          },
        ]);
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    if (item.archived) {
      return null; // Don't display archived messages
    }

    const onMessagePress = () => {
      Alert.alert(item.title, item.body, [{ text: "OK" }]);
    };

    return (
      <MessageItem
        title={item.title}
        body={item.body}
        read={item.read}
        onPress={onMessagePress}
      />
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

// Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
  },
});

export default InboxScreen;
