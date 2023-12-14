import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const BankAccountScreen = () => {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [cardType, setCardType] = useState("Visa"); // Default card type
  const [editingAccount, setEditingAccount] = useState(null);

  // Dummy data for previous payments
  const previousPayments = [
    { id: "1", amount: "100.00", date: "2023-01-01" },
    { id: "2", amount: "200.00", date: "2023-02-01" },
  ];

  const handleSave = () => {
    if (editingAccount) {
      // Update existing account
      const updatedAccounts = bankAccounts.map((account) => {
        if (account.accountNumber === editingAccount) {
          return { ...account, bankName, accountNumber, cardType };
        }
        return account;
      });
      setBankAccounts(updatedAccounts);
      setEditingAccount(null);
    } else {
      // Add new account
      setBankAccounts([...bankAccounts, { bankName, accountNumber, cardType }]);
    }
    setAccountNumber("");
    setBankName("");
    setCardType("Visa");
  };

  const handleEdit = (account) => {
    setAccountNumber(account.accountNumber);
    setBankName(account.bankName);
    setCardType(account.cardType);
    setEditingAccount(account.accountNumber);
  };

  const handleRemove = (accountNumber) => {
    setBankAccounts(
      bankAccounts.filter((account) => account.accountNumber !== accountNumber)
    );
  };

  return (
    <View style={styles.container}>
      <Text>Add/Edit Bank Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Bank Name"
        value={bankName}
        onChangeText={setBankName}
      />
      <Picker
        selectedValue={cardType}
        onValueChange={(itemValue, itemIndex) => setCardType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Visa" value="Visa" />
        <Picker.Item label="MasterCard" value="MasterCard" />
        <Picker.Item label="American Express" value="American Express" />
        <Picker.Item label="Discover" value="Discover" />
      </Picker>
      <Button
        title={editingAccount ? "Update Bank Account" : "Add Bank Account"}
        onPress={handleSave}
      />

      <Text>Your Bank Accounts</Text>
      <FlatList
        data={bankAccounts}
        keyExtractor={(item) => item.accountNumber}
        renderItem={({ item }) => (
          <View style={styles.accountCard}>
            <Text>
              {item.bankName}: {item.accountNumber} ({item.cardType})
            </Text>
            <View style={styles.buttonGroup}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button
                title="Remove"
                onPress={() => handleRemove(item.accountNumber)}
              />
            </View>
          </View>
        )}
      />

      <Text>Previous Payments</Text>
      <FlatList
        data={previousPayments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paymentCard}>
            <Text>Payment Amount: ${item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  accountCard: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  paymentCard: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "gray",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default BankAccountScreen;
