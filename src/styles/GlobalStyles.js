import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Center children horizontally
    padding: 20,
    backgroundColor: "#fff", // Your global background color
  },
  logo: {
    height: 120, // Updated size for better balance
    width: 120, // Keep aspect ratio of the logo
    resizeMode: "contain",
    marginBottom: 30, // Adjusted spacing
  },
  titleText: {
    fontSize: 22, // Slightly larger for impact
    fontWeight: "600", // Bold weight for title
    color: "#333", // Your global title text color
    marginBottom: 10, // Reduced spacing
  },
  descriptionText: {
    // Renamed for clarity
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 40, // Padding to limit the width of the text
    marginBottom: 40, // Increased spacing before the button
  },
  primaryButton: {
    backgroundColor: "#000", // Your global primary button background color
    width: "100%",
    paddingVertical: 12, // Adjusted padding
    paddingHorizontal: 0, // No horizontal padding (takes entire width)
    borderRadius: 5, // Rounded corners
    elevation: 3, // Elevation for Android (drop shadow effect)
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
    marginBottom: 2, // Spacing from the bottom or next element
  },
  primaryButtonText: {
    fontSize: 18, // Larger font size for button text
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center", // Center text within the button
  },
  inputField: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333", // Your global input border color
    paddingVertical: 10,
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: "#ddd", // Placeholder, replace with your secondary button background color
    width: "100%",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    marginLeft: 10,
    color: "#333", // Your global secondary button text color
    fontWeight: "bold",
  },
  smallPrintText: {
    marginTop: 30,
    fontSize: 12,
    textAlign: "center",
    color: "#333", // Your global small print text color
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
  },
  accountContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  accountHeader: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    padding: 20,
    textAlign: "center", // Center title
  },
  accountItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  accountIcon: {
    marginRight: 10,
    // Define size and color if not using an icon library
  },
  accountTitle: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  accountDescription: {
    fontSize: 14,
    color: "#666",
  },
  accountArrow: {
    // Define size and color if not using an icon library
  },
});
