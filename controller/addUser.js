import User from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Data not found",
      });
    }

    const savedData = await userData.save();
    res.status(201).send({
      success: true,
      message: "user created successfully",
      savedData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
