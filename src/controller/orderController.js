import { Order } from "../models/order.model.js";
import { orderValidation } from "../validation/orderValidation.js";

// Api to make the order
export const createOrder = async (req, res) => {
  try {
    // Validate the request body against the orderValidationSchema
    const validationResult = orderValidation.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({
        error: validationResult.error.details.map((detail) => detail.message),
      });
    }

    // Create a new Order instance
    const order = new Order({
      retailer_id: req.body.retailer_id,
      products: req.body.products,
      quantity: req.body.quantity,
      orderValue: req.body.orderValue,
      mobile: req.body.mobile,
      status: req.body.status,
    });

    // Save the new order to the database
    await order.save();

    // Respond with success message
    return res
      .status(201)
      .json({ success: true, message: "Order created successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error creating order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Api to select the all order

export const selectOrder = async (req, res) => {
  try {
    // Await the execution of the query to get the actual orders
    const orders = await Order.find();

    // Check if orders array is empty to determine if any orders were found
    if (!orders || orders.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Orders not found",
      });
    }

    // If orders are found, return them in the response
    return res.status(200).json({
      status: true,
      orders: orders,
    });
  } catch (error) {
    // If any error occurs during the process, return a 500 Internal Server Error response
    console.error("Error retrieving orders:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server Error",
    });
  }
};

// Api to select the one order
export const selectOneOrder = async (req, res) => {
  try {
    const OrderId = req.params.id;
    const order = await Order.findById(OrderId);

    if (!order) {
      return res.status(404).json({
        status: false,
        message: "Order not found",
      });
    }
    return res.status(200).json({
      status: true,
      order: order,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

// Api to delet the order
export const deleteOrder = async (req, res) => {
  try {
    const OrderId = req.params.id;
    const deletedId = await Order.findByIdAndDelete(OrderId);

    if (!deletedId) {
      return res.status(404).json({
        status: false,
        message: "Order not found",
      });
    }
    return res.status(200).json({
      status: true,
      message: "Order Cancelled Successfull",
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

// Api to get the data fromt the user
export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updateData = req.body;

    // Check if the request body is empty
    if (!updateData || Object.keys(updateData).length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "No update data provided" });
    }

    // Update the order document by ID
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, {
      new: true,
    });

    // Check if the order with the given ID exists
    if (!updatedOrder) {
      return res
        .status(404)
        .json({ status: false, message: "Order not found" });
    }

    return res.status(200).json({ status: true, order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const getYourOrder = async (req, res, next) => {
  try {
    const _id = req.params.id;

    const products = await Order.find({ retailer_id: _id }).populate(
      "products"
    );
    if (Object.keys(products).length === 0 || !products) {
      res.status(200).json({ status: true, message: "NOT Found any order" });
    } else {
      res.status(200).json({ status: 200, order: products });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: false, message: "Internal Server" });
  }
};
