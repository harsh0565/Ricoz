import User from "../model/userModel.js";

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
