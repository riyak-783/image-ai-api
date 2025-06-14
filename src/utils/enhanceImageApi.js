const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
const BASE_URL = "https://techhk.aoscdn.com/";
import axios from "axios";
export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID:", taskId);
    //pooling

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image Data" ,enhancedImageData);


    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if(!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }
  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image URL not found.");
  }
  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if(result.state === 4) {
    console.log("processing...");

    if(retries >=20) {
      throw new Error("Max retries reached. Image enhancement failed.");

    }

      await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds before retrying

      return pollForEnhancedImage(taskId, retries + 1);
    }
    console.log("Image enhancement completed successfully.", result);
    return result;
  };

