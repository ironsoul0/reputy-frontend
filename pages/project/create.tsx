import { FC, useState } from "react";
import Select from "react-select";
import axios from "axios";
import StyledDropzone from "../../components/StyledDropzone";

const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5ZjdlNWZiMS1hODIyLTRlZmUtODEwNC0xMTcwNzM4ZTU5ZmUiLCJlbWFpbCI6InRpbWthMjYwOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiODMwOTZlNDIxOGI0ZTk2MGJiNDciLCJzY29wZWRLZXlTZWNyZXQiOiI5M2Y5NDVlOWU1ODRkNTEzZTYxNDgwNDRlNGE5YTViNGUyMjA3ZGNjOTU3OTU5Y2IxMDQ4ZGU5ODQwNGFjMmNmIiwiaWF0IjoxNjcxODg1MTkyfQ.yDuTjbJ4qOW6pKw7ssP7ahw3VLjHgbvtA0S98to3kPY`;

const tagOptions = [
  { value: "Games", label: "Games" },
  { value: "Ecommerce", label: "Ecommerce" },
  { value: "DeFi", label: "DeFi" },
  { value: "Tools and Utility", label: "Tools and Utility" },
  { value: "Collectibles", label: "Collectibles" },
  { value: "Social Networks", label: "Social Networks" },
  { value: "Marketplaces", label: "Marketplaces" },
  { value: "DEX", label: "DEX" },
];

const statusOptions = [
  { value: "Launched", label: "Launched" },
  { value: "Coming soon", label: "Coming soon" },
];

const CreatePage: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ipfsImageData, setIpfsImageData] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    setImage(file);
    const formData = new FormData();

    formData.append("file", file);

    const metadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT,
          },
        }
      );
      setIpfsImageData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = () => {
    const projectData = {
      title,
      description,
      tag,
      status,
      ipfsImageData,
    };

    console.log("projectData", projectData);
  };

  return (
    <div className="container tw-text-center tw-my-12">
      <p className="tw-font-bold tw-text-2xl tw-text-white tw-mb-8">
        Generate the project
      </p>
      <div className="tw-mx-0 tw-flex tw-justify-center">
        <div style={{ width: "50%" }}>
          <input
            className="tw-mb-6 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 h-32 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out"
            type="text"
            placeholder="Title of the project"
            onChange={handleTitleChange}
            value={title}
          />
          <textarea
            className="tw-mb-6 tw-w-full tw-bg-gray-800 tw-rounded tw-border tw-border-gray-700 focus:tw-border-indigo-500 focus:tw-ring-2 focus:ring-indigo-900 h-32 tw-text-base tw-outline-none tw-text-gray-100 tw-py-2 tw-px-3 tw-resize-none tw-leading-6 tw-transition-colors tw-duration-200 tw-ease-in-out"
            rows={3}
            placeholder="Project desription"
            onChange={handleDescriptionChange}
            value={description}
          />
          <Select
            className="tw-mb-6 tw-text-white tw-text-left"
            styles={{
              control: (base) => ({
                ...base,
                background: "#1F2937",
                color: "white",
              }),
              menu: (base) => ({
                ...base,
                background: "#1F2937",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              option: (base, { isFocused, isSelected }) => ({
                ...base,
                backgroundColor: isSelected
                  ? "#007bff"
                  : isFocused
                  ? "#6c757d"
                  : "#1F2937",
              }),
            }}
            defaultValue={tag}
            onChange={setTag as never}
            options={tagOptions}
            placeholder="Select project tag"
          />
          <Select
            className="tw-mb-6 tw-bg-gray-800 text-black tw-text-left"
            styles={{
              control: (base) => ({
                ...base,
                background: "#1F2937",
                color: "white",
              }),
              menu: (base) => ({
                ...base,
                background: "#1F2937",
                color: "white",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              option: (base, { isFocused, isSelected }) => ({
                ...base,
                backgroundColor: isSelected
                  ? "#007bff"
                  : isFocused
                  ? "#6c757d"
                  : "#1F2937",
              }),
            }}
            defaultValue={status}
            onChange={setStatus as never}
            options={statusOptions}
            placeholder="Select project status"
          />
          <StyledDropzone onImageChange={handleImageUpload} />
        </div>
      </div>
      <button
        type="button"
        className="tw-mt-6 tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 focus:tw-outline-none dark:focus:tw-ring-blue-800"
        onClick={handleFormSubmit}
      >
        Submit Project
      </button>
    </div>
  );
};

export default CreatePage;
