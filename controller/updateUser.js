import User from "../model/userModel.js";

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      success: true,
      message: "User Updated Successfully",
      updatedData,
    });
  } catch (error) {
    res.status(500).send({
        success:false,
        message:"Something went wrong",
        error
    });
  }
};
