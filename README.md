# Manufacturing and Delivery Management Web Application

This project involves building a web application using Express.js with MongoDB for the backend and ReactJS for the frontend. The purpose of the application is to manage the manufacturing and delivery process of products to retailers. It involves three main entities:

## Manufacturer:
Responsible for manufacturing the products.

## Transporter:
Responsible for transporting the manufactured products to the retailers.

## Retailer:
Places bids for products and receives the manufactured products.

## Functionality Overview

### Retailer Bidding:
- Retailers can place bids for products they require.
- Manufacturers are notified of the orders based on the bids received.

### Manufacturing Process:
- Manufacturers receive notifications of orders placed by retailers.
- Manufacturers mark the manufacturing process as completed once the products are ready for delivery.

### Product Delivery:
- Transporters receive notifications of completed manufacturing processes.
- Transporters pick up the products from manufacturers and deliver them to retailers at their business locations.

## Supported Products
- ButterMilk
- Rasmalai
- CupCakes

## Deadline
The deadline for completing this project is **7th April 2024**.

## Project Structure
The project is structured as follows:

- **Backend:** Contains the Express.js server and interacts with the MongoDB database.
- **Frontend:** Contains the ReactJS application for the user interface.
- **Database:** MongoDB is used to store and retrieve data related to manufacturers, transporters, retailers, bids, orders, and products.
#   E c o m m e r c e _ b a c k e n d  
 